const imageSF = document.querySelector('.trip-image');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const openModal = () =>  {
 backdrop.style.display = 'block';
 modal.style.display = 'block';
};

imageSF.onclick = openModal;