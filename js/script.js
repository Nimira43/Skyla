const container = document.querySelector('.container')

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
  container.classList.add('change')
})

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
  container.classList.remove('change')
})

const colours = ['#ffd700',  '#f4e595ff', '#f88a63ff', '#bf9382ff', '#fbc8c8ff']

let i = 0

Array.from(document.querySelectorAll('.nav-link')).forEach(item => {
  item.computedStyleMap.cssText = `background-color: ${colours[i++]}`
})