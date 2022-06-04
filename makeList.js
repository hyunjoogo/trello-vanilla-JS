/**
 * 기존 템플릿의 새로운 리스트 생성
 * @param listName 리스트 이름
 */
function makeNewList(listName) {
  const listWrapper = document.createElement('section');
  listWrapper.className = 'list list-name';

  const listTitle = document.createElement('h1');
  listTitle.className = 'list_title';
  listTitle.textContent = listName; // 받은 리스트 이름 넣기

  const listContents = document.createElement('div');
  listContents.className = 'list_contents';

  const cardCount = document.createElement('p');
  cardCount.className = 'card_count';
  cardCount.textContent = '0 Cards';

  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('draggable', 'true');

  const cardAddBtn = document.createElement('button');
  cardAddBtn.className = 'card_add_btn';
  cardAddBtn.textContent = '+ ADD NEW CARD';

  listContents.append(cardCount);
  listContents.append(card);

  listWrapper.append(listTitle);
  listWrapper.append(listContents);
  listWrapper.append(cardAddBtn);

  document.querySelector('#trello').append(listWrapper);
}
export default makeNewList;
