const keysEnglish = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►',
];

const keysRussia = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'];

const inputField = document.createElement('textarea');
const keyboard = document.createElement('div');
const toggleLan = document.createElement('button');

toggleLan.className = 'toggle-language';
toggleLan.innerHTML = 'toggle language';
inputField.className = 'textarea';
keyboard.setAttribute('id', 'keyboard');

document.body.appendChild(inputField);
document.body.appendChild(keyboard);
document.body.appendChild(toggleLan);

keysEnglish.forEach((key) => {
  const button = document.createElement('button');
  button.setAttribute('class', 'key');
  button.innerHTML = key;
  keyboard.appendChild(button);
});

const keyButtons = document.querySelectorAll('.key');
let isCapsOn = false;

const setLowerCaseKeys = () => {
  for (const key of keyButtons) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toLowerCase();
    }
  }
};
const setUpperCaseKeys = () => {
  for (const key of keyButtons) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toUpperCase();
    }
  }
};

window.addEventListener('keydown', (event) => {
  const keyCode = event.key;
  for (const key of keyButtons) {
    if (keyCode === key.innerHTML) {
      key.classList.add('active');
    }
  }
});

window.addEventListener('keyup', (event) => {
  const keyCode = event.key;
  for (const key of keyButtons) {
    if (keyCode === key.innerHTML) {
      key.classList.remove('active');
    }
  }
});

//  Spacebar
keyButtons[58].addEventListener('click', () => {
  inputField.innerHTML += ' ';
});

// Tab
keyButtons[14].addEventListener('click', () => {
  inputField.innerHTML += '   ';
});

// Enter
keyButtons[41].addEventListener('click', () => {
  inputField.innerHTML += '\n';
});

// L-Shift
keyButtons[42].addEventListener('mousedown', () => {
  setUpperCaseKeys();
});

keyButtons[42].addEventListener('mouseup', () => {
  setLowerCaseKeys();
});

// R-Shift
keyButtons[54].addEventListener('mousedown', () => {
  setUpperCaseKeys();
});
keyButtons[54].addEventListener('mouseup', () => {
  setLowerCaseKeys();
});

//  Capslock
keyButtons[29].addEventListener('click', () => {
  isCapsOn = !isCapsOn;
  if (isCapsOn === true) {
    keyButtons[29].style.backgroundColor = '#5571ee';
    setUpperCaseKeys();
  } else {
    keyButtons[29].style.backgroundColor = '#1C232E';
    setLowerCaseKeys();
  }
});

keyButtons[29].addEventListener('keydown', () => {
  isCapsOn = !isCapsOn;
  if (isCapsOn === true) {
    keyButtons[29].style.backgroundColor = '#5571ee';
    setUpperCaseKeys();
  } else {
    keyButtons[29].style.backgroundColor = '#1C232E';
    setLowerCaseKeys();
  }
});

// Backspace
keyButtons[13].addEventListener('click', () => {
  if (inputField.innerHTML !== undefined) {
    inputField.innerHTML = inputField.innerHTML.slice(0, inputField.innerHTML.length - 1);
  }
});

// Del
keyButtons[28].addEventListener('click', () => {
  inputField.innerHTML = '';
});

// запись в поле
function writeText() {
  for (const key of keyButtons) {
    if (key.innerHTML.length === 1) {
      if (key.innerHTML !== '▲' && key.innerHTML !== '►' && key.innerHTML !== '▼' && key.innerHTML !== '◄') {
        key.addEventListener('click', () => inputField.innerHTML += key.innerHTML);
      // key.addEventListener('keydown', () => inputField.innerHTML += key.innerHTML)
      }
    }
  }
}
// подсветка клавиш
window.addEventListener('keydown', (event) => {
  const keyCode = event.key;
  for (const key of keyButtons) {
    if (keyCode === key.innerHTML) {
      key.classList.add('active');
    }
  }
});

window.addEventListener('keyup', (event) => {
  const keyCode = event.key;
  for (const key of keyButtons) {
    if (keyCode === key.innerHTML) {
      key.classList.remove('active');
    }
  }
});

window.addEventListener('keydown', (event) => {
  const keyCode = event.key;
  if (keyCode === 'Shift') {
    setUpperCaseKeys();
  }
});

window.addEventListener('keyup', (event) => {
  const keyCode = event.key;
  if (keyCode === 'Shift') {
    setLowerCaseKeys();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Delete') {
    inputField.innerHTML = '';
  }
});
// переключение языков
let currentLanguage = 'english';

function clearKeyboard() {
  const keyboardBody = document.getElementById('keyboard');
  keyboardBody.innerHTML = '';
}

function toggleLanguage() {
  if (currentLanguage === 'english') {
    currentLanguage = 'russian';
    clearKeyboard();
    keysRussia.forEach((key) => {
      const button = document.createElement('button');
      button.setAttribute('class', 'key');
      button.innerHTML = key;
      keyboard.appendChild(button);
    });
    writeText();
  } else {
    currentLanguage = 'english';
    clearKeyboard();
    keysEnglish.forEach((key) => {
      const button = document.createElement('button');
      button.setAttribute('class', 'key');
      button.innerHTML = key;
      keyboard.appendChild(button);
    });
    writeText();
  }
}

const toggleLanguageButton = document.querySelector('.toggle-language');
toggleLanguageButton.addEventListener('click', toggleLanguage);

writeText();
