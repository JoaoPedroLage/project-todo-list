const creatTask = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const listClass = document.querySelector('.taskList');
const allLi = document.getElementsByTagName('li');
const eraseList = document.getElementById('apaga-tudo');
const eraseSelected = document.getElementById('remover-finalizados');

function addItem() {
  const input = document.getElementById('texto-tarefa').value;
  let addToList = list.innerHTML;
  addToList = `${addToList}<li>${input}</li>`;

  document.getElementById('lista-tarefas').innerHTML = addToList;
  document.getElementById('texto-tarefa').value = '';
}

function removeAllItens() {
  list.innerHTML = '';
}

// allLi.classList.add = 'li-list-item';
// const liListItem = document.querySelectorAll('.li-lis-item');
function removeSelected() {
  for (let i = 0; i < allLi.length; i += 1) {
    const element = allLi[i];

    if (element.classList.contains('completed')) {
      listClass.removeChild(element);
      i -= 1;
    }
  }
}

function clickChange(event) {
  for (let i = 0; i < allLi.length; i += 1) {
    if (allLi[i].classList.contains('greySelected')) {
      allLi[i].classList.remove('greySelected');
    }
    event.target.classList.add('greySelected');
  }
}

function riskTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else event.target.classList.add('completed');
}

creatTask.addEventListener('click', addItem);
list.addEventListener('click', clickChange);
list.addEventListener('dblclick', riskTask);
eraseList.addEventListener('click', removeAllItens);
eraseSelected.addEventListener('click', removeSelected);
