const modal = document.querySelector('#modal')
const openModal = () => {
  window.setTimeout(() => modal.classList = 'open', 500)
}
const closeModal = () => {
  window.addEventListener('click', (event) => {
    if(event.target.id === 'modal' || event.target.id === 'close'){
      modal.classList = 'close'
    }
  })
}

export {openModal, closeModal}
