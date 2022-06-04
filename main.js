// eslint-disable-next-line import/extensions
import makeNewList from './makeList.js';

const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

let dragItem = null;

function dragStart() {
  console.log('drag started');
  dragItem = this;
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
}

function dragEnd() {
  console.log('drag Ended');
  this.className = 'card';
  dragItem = null;
}

function dragOver(event) {
  event.preventDefault();
  console.log('drag over');
}

function dragEnter() {
  console.log('drag entered');
}

function dragLeave() {
  console.log('drag left(leave)');
}

function dragDrop() {
  console.log('drag dropped');
  const listContents = this.querySelector('.list_contents');
  listContents.append(dragItem);
}

cards.forEach((card) => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

lists.forEach((list) => {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('dragenter', dragEnter);
  list.addEventListener('dragleave', dragLeave);
  list.addEventListener('drop', dragDrop);
});

function addNewList() {
  const input = document.querySelector('.new_list_input');
  const listName = input.value;
  // if (listName === '') {
  //   input.focus();
  //   return alert('리스트의 이름을 입력해주세요.');
  // }
  makeNewList(listName);
  input.value = '';
}

document.querySelector('.new_list_form')
  .addEventListener('submit', () => addNewList());
