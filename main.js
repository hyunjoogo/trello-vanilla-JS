import makeNewList from './makeList.js';
import dummyData from './dummyData.js';
import renderList from './renderList.js';

console.log(dummyData);
renderList();

const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

let dragItem = null;
let dragItemBelongedListIndex = '';

function dragStart() {
  console.log('drag started');
  dragItem = this;
  dragItemBelongedListIndex = this.parentNode.parentNode.dataset.index;
  setTimeout(() => {
    this.classList.toggle('invisible');
  }, 0);
}

function dragEnd() {
  console.log('drag Ended');
  console.log('내가 누구인지', dragItem);
  const belongedListId = dragItem.parentNode.parentNode;
  const contentId = dragItem.dataset.content_id;
  console.log(contentId);
  console.log('Card가 속한 listId', belongedListId);
  dragItem.classList.toggle('invisible');

  // 기존 list에서 빼기
  let { contents } = dummyData[dragItemBelongedListIndex];
  const newContents = contents.filter((value) => value.contentId !== contentId);
  contents = newContents;
  console.log(contents);
  dragItem = null;
  dragItemBelongedListIndex = '';
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

function dragDrop(e) {
  console.log('drag dropped');
  // 이벤트 리스너에 화살표함수를 쓰면 this가 undefined가 된다.
  // 안쓰면 this는 선택한 요소가 됨
  console.log('속한 listId', e.target.parentNode.parentNode.classList[1]);
  // console.log(e);

  // 자료를 옮기는 것
  // 옮길 자료가 어디에 있었는지 => 그래야지 그 자료에서 빼지
  // 나는 dummyData[n].contents[m]

  // 어디에 옮길지 = > 그래야지 거기에 넣지
  // dummyData.forEach((v) => {
  //   if (v.listId === this.classList[1]) {
  //     v.contents.push(this);
  //   }
  // });
}

function dragDropThis() {
  console.log('drag dropped');
  console.log(this);
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
  list.addEventListener('drop', (e) => dragDrop(e));
  list.addEventListener('drop', dragDropThis);
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
