async function fetchTasks() {
  const res = await fetch('/tasks');
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.done) li.classList.add('done');
    li.innerHTML = `
      <span>${task.text}</span>
      <div class="actions">
        <button onclick="markDone(${index})">Mark</button>
        <button onclick="deleteTask(${index})">Del</button>
      </div>
    `;
    list.appendChild(li);
  });
}

document.getElementById('todo-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = document.getElementById('taskInput').value;
  await fetch('/add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ text: task })
  });
  document.getElementById('taskInput').value = '';
  fetchTasks();
});


async function markDone(index) {
  await fetch(`/done/${index}`, { method: 'POST' });
  fetchTasks();
}

async function deleteTask(index) {
  await fetch(`/delete/${index}`, { method: 'POST' });
  fetchTasks();
}

fetchTasks();
