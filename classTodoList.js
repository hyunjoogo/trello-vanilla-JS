class TodoList {
  constructor(place, data, idx) {
    this.place = place;
    this.data = data;
    this.idx = idx;
    this.listArray = [];

    this.render();
  }

  createToDoListElement() {
    const { listName, listId, contents } = this.data;
    this.listWrapper = document.createElement('section');
    this.listWrapper.classList.add('list');
    this.listWrapper.classList.add(`${listId}`);
    this.listWrapper.setAttribute('data-index', `${this.idx}`);

    const listTitle = document.createElement('h1');
    listTitle.classList.add('list_title');
    listTitle.textContent = listName; // 받은 리스트 이름 넣기

    const listContents = document.createElement('div');
    listContents.classList.add('list_contents');

    // 카드 갯수 카운터 생성
    const cardCount = document.createElement('p');
    cardCount.classList.add('card_count');
    cardCount.textContent = `${contents.length} Cards`;
    listContents.append(cardCount);

    // 가지고 온 contents의 자료를 card에 하나씩 넣어주기
    contents.forEach((content) => {
      const { text, contentId } = content;
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('draggable', 'true');
      card.setAttribute('data-content_id', contentId);
      card.textContent = text;

      listContents.append(card);
    });

    // 카드추가 버튼 생성
    const cardAddBtn = document.createElement('button');
    cardAddBtn.classList.add('card_add_btn');
    cardAddBtn.textContent = '+ ADD NEW CARD';

    // 생성된 엘리멘트들을 Wrapper에 순서대로 추가
    this.listWrapper.append(listTitle);
    this.listWrapper.append(listContents);
    this.listWrapper.append(cardAddBtn);

    // trello 칸에 Wrapper 추가
  }

  render() {
    // 엘리멘트를 만들고
    this.createToDoListElement();
    // place에 append해주기
    this.place.append(this.listWrapper);
  }
}

export default TodoList;
