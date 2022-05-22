const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

let dragItem = null;


function dragStart() {
  console.log('drag started');
  dragItem = this; // 여기서 this는 이벤트 대상
  setTimeout(() => this.className = "invisible", 0);
}

function dragEnd() {
  console.log('drag Ended');
  this.className = "card";
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
  const listContents = this.querySelector(".list_contents");
  listContents.append(dragItem);

}


cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

lists.forEach(list => {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('dragenter', dragEnter);
  list.addEventListener('dragleave', dragLeave);
  list.addEventListener('drop', dragDrop);
});
