let isModalOpened = false;
let isHeaderVisible = true; // New variable to track header visibility

function openModal(projectId) {
  const projectSelector = `.project:nth-of-type(${projectId})`;
  const projectContent = document.querySelector(`${projectSelector} .project-content`).innerHTML;
  const modalContent = document.getElementById('modalContent');
  const modal = document.getElementById('myModal');
  const header = document.querySelector('header');

  modalContent.innerHTML = projectContent;
  modal.classList.add('opened');

  // Check if the header is visible before opening the modal
  if (isHeaderVisible) {
    header.classList.add('modal-open');
    header.classList.add('visible');

  }

  isModalOpened = true;

  document.body.classList.add('modal-open'); // Add class to disable scrolling

  document.addEventListener('mousedown', closeModalOutside);
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.classList.remove('opened');

  isModalOpened = false;

  document.body.classList.remove('modal-open'); // Remove class to enable scrolling

  // Add the 'visible' class back to the header if it was visible before opening the modal
  const header = document.querySelector('header');
  if (isHeaderVisible) {
    header.classList.remove('modal-open');
  }

  document.removeEventListener('mousedown', closeModalOutside);
}

function closeModalOutside(event) {
  setTimeout(() => {
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');

    if (isModalOpened && !modalContent.contains(event.target) && event.target !== modal) {
      closeModal();
    }
  }, 10);
}
