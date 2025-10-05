const container = document.querySelector('.container')

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
  container.classList.add('change')
})

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
  container.classList.remove('change')
})