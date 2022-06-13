import makeNewList from './makeList.js';
import renderList from './renderList.js';
import TodoList from './classTodoList.js';
import dummyData from './dummyData.js';

// const trello = document.querySelector('#trello');
//
// for (let i = 0; i < dummyData.length; i++) {
//   new TodoList(trello, dummyData[i], i);
// }

renderList();
const addEvent = (button) => {
  button.addEventListener('click', () => {
    console.log(1);
  });
};
const list = document.querySelectorAll('.card_add_btn');
list.forEach((button) => {
  addEvent(button);
});

const addNewList = () => {
  makeNewList();
  renderList();
  document.querySelector('.new_list_input').value = '';
};
const listForm = document.querySelector('.new_list_form');
listForm.addEventListener('submit', () => addNewList());
