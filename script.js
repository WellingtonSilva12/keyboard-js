const buttons = document.querySelectorAll('.btn')
const inputText = document.querySelector('textarea')
const btn_capslock = document.querySelector('.capslock')
const btn_del = document.querySelector('.delete')
const btn_del1 = document.querySelector('.delete1')
const btn_space = document.querySelector('.space')
const toggleChars = document.querySelector('.chars')
const toggleChars1 = document.querySelector('.chars1')
const secondKeyboard = document.querySelector('.second-keyboard')

let character = []

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    inputText.value += btn.innerText
    character = inputText.value.split('')
    console.log(character)
  })
})

btn_space.addEventListener('click', () => {
  character.push(' ')
  inputText.value = character.join('')
})

btn_capslock.addEventListener('click', () => {
  btn_capslock.classList.toggle('active')
  buttons.forEach(btn => {
    btn.classList.toggle('upper')
  })
})

btn_del.addEventListener('click', () => {
  character.pop()
  inputText.value = character.join('')
})

btn_del1.addEventListener('click', () => {
  character.pop()
  inputText.value = character.join('')
})

toggleChars.addEventListener('click', () => {
  secondKeyboard.classList.toggle('hidden-keyboard')
})

toggleChars1.addEventListener('click', () => {
  secondKeyboard.classList.toggle('hidden-keyboard')
})
