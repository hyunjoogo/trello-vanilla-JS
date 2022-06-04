import dummyData from './dummyData.js';

function renderList() {
  dummyData.forEach((data, index) => {
    const { listName, listId, contents } = data;
    const listWrapper = document.createElement('section');
    listWrapper.classList.add('list');
    listWrapper.classList.add(`${listId}`);
    listWrapper.setAttribute('data-index', `${index}`);

    const listTitle = document.createElement('h1');
    listTitle.classList.add('list_title');
    listTitle.textContent = listName; // 받은 리스트 이름 넣기

    const listContents = document.createElement('div');
    listContents.classList.add('list_contents');

    const cardCount = document.createElement('p');
    cardCount.classList.add('card_count');
    cardCount.textContent = `${contents.length} Cards`;
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
  });
}

export default renderList;
