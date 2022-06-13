import dummyData from './dummyData.js';
import { addClass, setAttr, createNode } from './Util/Node.js';

function renderList() {
  dummyData.forEach((data, index) => {
    const { listName, listId, contents } = data;
    const listWrapper = createNode('section', 'list', '', 'data-index', `${index}`);
    addClass(listWrapper, `${listId}`);

    // 배열을 만들어서 엘리멘트, 클래스, 텍스트, 순으로 돌리는것도 추천

    const listTitle = createNode('h1', 'list_title', listName);
    const listContents = createNode('div', 'list_contents');
    const cardCount = createNode('p', 'card_count', `${contents.length} Cards`);
    listContents.append(cardCount);

    contents.forEach((content) => {
      const { text, contentId } = content;
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('draggable', 'true');
      card.setAttribute('data-content_id', contentId);
      card.textContent = text;

      listContents.append(card);
    });

    const cardAddBtn = document.createElement('button');
    cardAddBtn.classList.add('card_add_btn');
    cardAddBtn.textContent = '+ ADD NEW CARD';

    listWrapper.append(listTitle);
    listWrapper.append(listContents);
    listWrapper.append(cardAddBtn);

    document.querySelector('#trello')
      .append(listWrapper);

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
      // console.log('drag over');
    }

    function dragEnter() {
      // console.log('drag entered');
    }

    function dragLeave() {
      // console.log('drag left(leave)');
    }

    function dragDrop(e) {
      console.log('drag dropped');
      console.log(e.target);
      if (dragItemData === null) {
        console.log(dragItemData);
      }
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
  });
}

export default renderList;
