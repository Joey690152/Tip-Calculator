const amountInput = document.querySelector('.bill');
const response = document.querySelector('.response')
const peopleInput = document.querySelector('.people-input')
const response2 = document.querySelector('.response-2')
const percentBtn = document.querySelectorAll('.btn')

amountInput.addEventListener('input', amountInputFunction);
peopleInput.addEventListener('input', peopleInputFunction);
percentBtn.forEach(function (val) {
  val.addEventListener('click', handleClick);
})


amountInput.value = '0.0';
peopleInput.value = '0';
response.value = '£' + (0.0).toFixed(2);
response2.value = '£' + (0.0).toFixed(2);

let amountValue = 0.0;
let peopleValue = 0;
let tipValue = 0.15;

function amountInputFunction () {
  amountValue = parseFloat(amountInput.value);
  console.log(amountValue)
};

function peopleInputFunction () {
  peopleValue = parseFloat(peopleInput.value);
  console.log(peopleValue)
}

function handleClick(event) {
  percentBtn.forEach(function(val) {
    val.classList.remove('active-tip')
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add('active-tip');
      tipValue = parseFloat(val.innerHTML) / 100
    }
  });
  console.log(tipValue)
}



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







