document.getElementById('formulario').addEventListener('submit', saveTask);


function saveTask(e) {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(title);

  let task = {
    title,
    description,
    completed: false
  }

  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  document.getElementById('formulario').reset();
  getTasks();
}


function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i=0; i<tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i,1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}


function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  let vista = document.getElementById('tareas');
  vista.innerHTML = '';

  for (let i=0; i<tasks.length; i++) {
    let texto;
    let linea;
    let bcolor;
    if (tasks[i].completed) {
      texto = 'checked';
      linea = 'line-through';
      bcolor = '#D3D6DA'
    } else {
      texto = '';
      linea = 'none';
      bcolor = '#ffffff';
    }

    let task = `
      <div class="card mb-2">
        <div class="card-body" style="background-color:${bcolor}">
          <input type="checkbox" id="${i}" onchange="checkChange(this)" ${texto}>
          <span style="text-decoration:${linea}">
            &nbsp;${tasks[i].title} - ${tasks[i].description}
          </span>
          <button class="btn btn-danger float-right" onclick="deleteTask('${tasks[i].title}')">Delete</button>
        </div>
      </div>      
    `;
    vista.innerHTML += task;
  }
}


getTasks();


function checkChange(ele) {
  console.log(ele);
  let mispan = ele.nextElementSibling;
  console.log(mispan);
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let id = ele.getAttribute('id');
   
  if (ele.checked) {
    mispan.style.textDecoration = 'line-through';
    ele.parentNode.style.background = '#D3D6DA';
    tasks[id].completed = true;
  }
  else {
    mispan.style.textDecoration = 'none';
    ele.parentNode.style.background = '#ffffff';
    tasks[id].completed = false;
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}