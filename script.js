const list = document.getElementById('lista-tarefas');
const creatTask = document.getElementById('criar-tarefa');
const allLi = document.getElementsByTagName('li');

function addItem() {
  const input = document.getElementById('texto-tarefa').value;
  let addToList = list.innerHTML;
  addToList = `${addToList}<li>${input}</li>`;

  document.getElementById('lista-tarefas').innerHTML = addToList;
  // localStorage.setItem()
  document.getElementById('texto-tarefa').value = '';
}

function removeAllItens() {
  list.innerHTML = '';
}

function removeSelecteds() {
  for (let i = 0; i < allLi.length; i += 1) {
    const element = allLi[i];

    if (element.classList.contains('completed')) {
      list.removeChild(element);
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

const eraseList = document.getElementById('apaga-tudo');
const eraseSelecteds = document.getElementById('remover-finalizados');
const eraseSelected = document.getElementById('remover-selecionado');

creatTask.addEventListener('click', addItem);
list.addEventListener('click', clickChange);
list.addEventListener('dblclick', riskTask);
eraseList.addEventListener('click', removeAllItens);
eraseSelecteds.addEventListener('click', removeSelecteds);
eraseSelected.addEventListener('click', () => {
  for (let i = 0; i < allLi.length; i += 1) {
    if (allLi[i].classList.contains('greySelected')) {
      list.removeChild(allLi[i]);
    }
  }
});
