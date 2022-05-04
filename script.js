'use-strict';
const inputValue = document.querySelector('#password');
const hide = document.querySelector('.hide');
const slash = document.querySelector('.slash');

function hidePassword() {
  inputValue.type === 'password'
    ? (inputValue.type = 'text')
    : (inputValue.type = 'password');

  if (inputValue.value) {
    if (slash.classList.contains('fa-eye-slash')) {
      hide.classList.toggle('fa-eye');
      hide.classList.toggle('fa-eye-slash');
    } else {
      hide.classList.toggle('fa-eye-slash');
      hide.classList.toggle('fa-eye');
    }
  }
}

hide.addEventListener('click', hidePassword);
