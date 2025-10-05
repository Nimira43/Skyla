const container = document.querySelector('.container')

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
  container.classList.add('change')
})

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
  container.classList.remove('change')
})

const colours = ['#000',  '#581902', '#8d2702', '#c53501', '#ff4500']

let i = 0

Array.from(document.querySelectorAll('.nav-link')).forEach(item => {
  item.style.cssText = `background-color: ${colours[i++]}`
})

