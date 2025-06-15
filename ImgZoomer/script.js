const img = document.getElementById("main-img");
const lens = document.getElementById("lens");

img.addEventListener("mousemove", moveLens);
lens.addEventListener("mousemove", moveLens);
img.addEventListener("mouseenter", () => lens.style.visibility = "visible");
img.addEventListener("mouseleave", () => lens.style.visibility = "hidden");

function moveLens(e) {
  const rect = img.getBoundingClientRect();
  const lensSize = lens.offsetWidth / 2;

  let x = e.clientX - rect.left - lensSize;
  let y = e.clientY - rect.top - lensSize;

  // Clamp position
  x = Math.max(0, Math.min(x, img.width - lens.offsetWidth));
  y = Math.max(0, Math.min(y, img.height - lens.offsetHeight));

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  lens.style.backgroundImage = `url('${img.src}')`;
  lens.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;
  lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
}
