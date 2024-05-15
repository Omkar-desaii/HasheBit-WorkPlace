function displayRandomNumber() {
  let Number = Math.floor(Math.random() * 41) - 20;
  console.log(Number);
  let Guess = document.getElementById("userInput").value;
  console.log(Guess);
  const difference = Math.abs(Number - Guess);
  if (Guess === Number) {
    displayResult("Congratulations! You guessed it right!");
  } else {
    const difference = Math.abs(Number - Guess);
    if (Number < 0) {
      displayResult("Cold", Number);
    } else {
      displayResult("Hot", Number);
    }
  }
}
function displayResult(Feedback, Number) {
  document.getElementById("num").innerHTML = `<div>
        <div> Number : ${Number}</div>
        <div> ${Feedback}</div>

        </div>`;
}
