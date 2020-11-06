const fillElement = document.querySelector('.fill');
const emptyElements = document.querySelectorAll('.empty');


fillElement.addEventListener('dragstart', fillElementDragStartHandler);
fillElement.addEventListener('dragend', fillElementDragEndHandler);
emptyElements.forEach(emptyElement => {
  emptyElement.addEventListener('dragover', emptyElementDragOverHandler);
  emptyElement.addEventListener('dragenter', emptyElementDragEnterHandler);
  emptyElement.addEventListener('dragleave', emptyElementDragLeaveHandler);
  emptyElement.addEventListener('drop', emptyElementDragDropHandler);
});


function fillElementDragStartHandler() {
  this.classList.add('hold');
  requestAnimationFrame(() => (this.classList.add('invisible')));
}

function fillElementDragEndHandler() {
  this.classList.remove('hold');
  this.classList.remove('invisible');
}

function emptyElementDragOverHandler(evt) {
  evt.preventDefault();
}

function emptyElementDragEnterHandler(evt) {
  evt.preventDefault();
  this.classList.add('hovered');
}

function emptyElementDragLeaveHandler(evt) {
  evt.preventDefault();
  this.classList.remove('hovered');
}

function emptyElementDragDropHandler() {
  this.classList.remove('hovered');
  this.append(fillElement);
}
