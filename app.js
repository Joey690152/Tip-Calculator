const amountInput = document.querySelector('.bill');
const response = document.querySelector('.response')
const peopleInput = document.querySelector('.people-input')
const response2 = document.querySelector('.response-2')

// bill input event listener. to check value is above 0 

amountInput.addEventListener('input', function(e) {
  let value = e.target.value;
  if (value < 1) {
    e.preventDefault();
    amountInput.classList.add('incorrect');
    response.textContent = 'Bill value must be higher than 0'
  } else {
    response.textContent = '';
    amountInput.classList.remove('incorrect')
  }
});

// people input event listener. to check value is above 0

peopleInput.addEventListener('input', function (e) {
  let value = e.target.value;
  if (value < 1) {
    e.preventDefault();
    peopleInput.classList.add('incorrect');
    response2.textContent = 'Number of people must be higher than 0';
  } else {
    response2.textContent = '';
    peopleInput.classList.remove('incorrect')
  }
})



