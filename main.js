import makeNewList from './makeList.js';
import dummyData from './dummyData.js';
import renderList from './renderList.js';

console.log(dummyData);
renderList();

const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

let dragItem = null;
let dragItemBelongedListIndex = '';
let dragItemData = null;

function dragStart() {
  console.log('drag started');
  dragItem = this;
  dragItemBelongedListIndex = this.parentNode.parentNode.dataset.index;
  const contentId = dragItem.dataset.content_id;
  dragItemData = dummyData[dragItemBelongedListIndex].contents.filter((value) => value.contentId === contentId);
  setTimeout(() => {
    this.classList.toggle('invisible');
  }, 0);
}

function dragEnd() {
  console.log('drag Ended');
  // console.log('내가 누구인지', dragItem);
  const contentId = dragItem.dataset.content_id;
  dragItem.classList.toggle('invisible');

  // 기존 list에서 빼기
  const fromList = dummyData[dragItemBelongedListIndex].contents;
  const newContents = fromList.filter((value) => value.contentId !== contentId);
  dummyData[dragItemBelongedListIndex].contents = newContents;
  dragItem = null;
  dragItemBelongedListIndex = '';
  dragItemData = null;

  console.log(dummyData);
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
  const contentId = dragItem.dataset.content_id;
  dummyData[this.dataset.index].contents.push(...dragItemData);
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
  console.log(list);
});

document.querySelectorAll('.card_add_btn')
  .forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(1);
    });
  });

function addNewList() {
  const input = document.querySelector('.new_list_input');
  const listName = input.value;
  makeNewList(listName);
  input.value = '';
}

document.querySelector('.new_list_form')
  .addEventListener('submit', () => addNewList());
