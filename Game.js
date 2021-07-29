// Grabs modal open and close button
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const openBtn = document.getElementById('openModal');

//Displays the modal in a block
const openModal = () => {
    modal.style.display = 'block'
}

// Event listener click open button to open the Modal
openBtn.addEventListener('click', openModal)

//event listener to close the modal
const closeModal = () => {
    modal.style.display = 'none'
}

//event listener to close the modal by clicking, or after timeout
close.addEventListener('click', closeModal)

setTimeout(openModal, 2000);