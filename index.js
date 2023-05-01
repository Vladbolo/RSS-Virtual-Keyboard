const keysEnglish = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'DEL',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\',', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
]

const inputField = document.createElement("textarea");
const keyboard = document.createElement("div");


inputField.className = 'textarea'
keyboard.setAttribute("id", "keyboard");

document.body.appendChild(inputField);
document.body.appendChild(keyboard);

keysEnglish.forEach(key => {
  const button = document.createElement("button");
  button.setAttribute("class", "key");
  button.innerHTML = key;
  keyboard.appendChild(button);
})

const keyButtons = document.querySelectorAll(".key");
let isCapsOn = false;

const setLowerCaseKeys = () => {
  for (const key of keyButtons) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toLowerCase()
    }
  }
}
const setUpperCaseKeys = () => {
  for (const key of keyButtons) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toUpperCase()
    }
  }
}

//  Spacebar
keyButtons[58].addEventListener('click', () => {
  inputField.innerHTML += ' '
})

// Tab
keyButtons[14].addEventListener('click', () => {
  inputField.innerHTML += '   '
})

// Enter
keyButtons[41].addEventListener('click', () => {
  inputField.innerHTML += '\n'
})

// L-Shift
keyButtons[42].addEventListener('mousedown', () => {
  setUpperCaseKeys()
})
keyButtons[42].addEventListener('mouseup', () => {
  setLowerCaseKeys()
})

// R-Shift
keyButtons[54].addEventListener('mousedown', () => {
  setUpperCaseKeys()
})
keyButtons[54].addEventListener('mouseup', () => {
  setLowerCaseKeys()
})

//  Capslock
keyButtons[28].addEventListener('click', () => {
  isCapsOn = !isCapsOn;
  if (isCapsOn === true) {
    keyButtons[28].style.backgroundColor = 'green'
    setUpperCaseKeys()
  } else {
    keyButtons[28].style.backgroundColor = '#1C232E'
    setLowerCaseKeys()
  }
})

// Backspace
keyButtons[13].addEventListener('click', () => {
  if (inputField.innerHTML !== undefined) {
    inputField.innerHTML = inputField.innerHTML.slice(0, inputField.innerHTML.length - 1)
  }
})

//Del
keyButtons[27].addEventListener('click', () => {
  inputField.innerHTML = '';
})


for (const key of keyButtons) {
  if (key.innerHTML.length === 1) {
    if(key.innerHTML !== '▲' && key.innerHTML !== '►' && key.innerHTML !==  '▼' && key.innerHTML !== '◄'){
      key.addEventListener('click', () => inputField.innerHTML += key.innerHTML)
      }
  }
}