// server.ts http://localhost:3000
import { serve } from "bun";
import db from "./db";

function renderNotes() {
  const notes = db.query("SELECT * FROM notes ORDER BY id DESC").all();
  return notes
    .map(
      (note: any) => `
    <div class="note">
      <h3>${note.title}</h3>
      <p>${note.content}</p>
    </div>`
    )
    .join("\n");
}

serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // Serve static files
    if (path === "/style.css") {
      return new Response(Bun.file("style.css"), {
        headers: { "Content-Type": "text/css" },
      });
    }

    // Handle form submission
    if (req.method === "POST" && path === "/add") {
      return req.formData().then((formData) => {
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        db.run("INSERT INTO notes (title, content) VALUES (?, ?)", [title, content]);
        return Response.redirect("/");
      });
    }

    // Serve HTML with rendered notes
    if (path === "/") {
      return Bun.file("index.html")
        .text()
        .then((html) => {
          const notesHtml = renderNotes();
          return new Response(
            html.replace(`<div id="notes">`, `<div id="notes">${notesHtml}`),
            { headers: { "Content-Type": "text/html" } }
          );
        });
    }

    return new Response("404 Not Found", { status: 404 });
  },
});
