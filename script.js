const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    console.log("peguei");
    this.classList.add('dragging');
    dropzones.forEach(zone => {
        zone.classList.add('highlight');
    });
}

function drag() {

}

function dragend() {
    console.log("soltei");
    this.classList.remove('dragging');
    dropzones.forEach(zone => {
        zone.classList.remove('highlight');
    });
}

dropzones.forEach(zone => {
    zone.addEventListener('dragenter', dragenter);
    zone.addEventListener('dragover', dragover);
    zone.addEventListener('dragleave', dragleave);
    zone.addEventListener('drop', drop);
});

function dragenter () {
    console.log("entrei aqui");
}

function dragover() {
    this.classList.add('over');

    const draggingCard = document.querySelector('.dragging');

    this.appendChild(draggingCard);
}

function dragleave() {
    console.log("sai daqui");
    this.classList.remove('over');
}

function drop() {
    console.log("soltei aqui");
    this.classList.remove('over');
}