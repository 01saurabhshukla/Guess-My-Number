
// If you want your code to be the most efficient and effective code, then when you are trying to retrieve an id then you should use getElementById. If you are trying to retrieve a class or tag then you should use querySelector.


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  // console.log(inputNumber);

  if (!inputNumber) {
    document.querySelector('.message').textContent = '✖ No Number Entered';
  } else if (inputNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // let Hscore = Number(document.querySelector('.score').innerText);

    // if (Hscore > highscore) {
    //     document.querySelector('#highscore').textContent = Hscore;
    // }
    // if (score > highscore) {
    //     highscore = score;
    //     document.querySelector('#highscore').textContent = highscore;
    //   }
  
  } else if (inputNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        inputNumber > secretNumber ? 'Too High ' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
