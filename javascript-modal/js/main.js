const imageSF = document.querySelector('.trip-image');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const openModal = () =>  {
 backdrop.style.display = 'block';
 modal.style.display = 'block';
};

const closeModal = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none'; 
};

imageSF.onclick = openModal;
backdrop.onclick = closeModal;
