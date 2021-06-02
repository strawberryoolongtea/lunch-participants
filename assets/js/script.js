const nameValue = document.querySelector('.name-value');
const nameButton = document.querySelector('.name-button');
const nameData = document.querySelector('.data-list .name')

const departButton = [...document.querySelectorAll('.departButton')];
const department = document.querySelector('.data-list .department');

const timeButton = [...document.querySelectorAll('.timeButton')]
const time = document.querySelector('.data-list .time');

nameButton.addEventListener('click', () => {
  if (false) {
    alert('이름을 입력하세요.');
    console.log('true', nameValue.value)
  } else {
    nameData.innerText = nameValue.value
    nameButton.style.backgroundColor = '#333';
    nameButton.style.color = '#fff'
    console.log('false', nameValue.value)
  }
});

for (let i in departButton) {
  departButton[i].addEventListener('click', function () {
    for (let j of departButton) {
      j.classList.remove('on')
    }
    this.classList.add('on')
    department.innerText = this.innerText
  })
}

for (let i in timeButton) {
  timeButton[i].addEventListener('click', function () {
    for (let j of timeButton) {
      j.classList.remove('on')
    }
    this.classList.add('on')
    time.innerText = this.innerText
  })
}
