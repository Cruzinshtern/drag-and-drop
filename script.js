const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Listeners for fills
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}


//Drag functions
function dragStart(e) {
    const letter = document.getElementById('fill').textContent;
    e.dataTransfer.setData('text', letter)
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();

}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop(e) {
    const rrr = e.dataTransfer.getData('text')
    console.log(rrr)
    this.className = 'empty';
    this.append(fill);
}
