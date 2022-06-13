/**
 * 기존 템플릿의 새로운 리스트 생성
 * 고유 ID = 생성당시의 타임스템프
 * @param listName 리스트 이름
 */
import dummyData from './dummyData.js';

function makeNewList() {
  const newData = {
    listName: 'test-list',
    contents: [],
    listId: new Date().getTime(),
  };

  dummyData.push(newData);
  const trello = document.querySelector('#trello');
  while (trello.hasChildNodes()) {
    trello.removeChild(trello.firstChild);
  }
}
export default makeNewList;
