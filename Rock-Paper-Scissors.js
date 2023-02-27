let hands = ["✊", "🖐", "✌"]
let answerNode = {}
let count = 0
let yourBonus = 0
let computerBonus = 0
let yourFinalPoint = 0
let computerFinalPoint = 0

let computersHandEl = document.getElementById("Computers-Hand-el")
let answerEl = document.getElementById("answer-el")
let handsEl = document.getElementsByName("hands")
let messageEl = document.getElementById("message-el")
let yourPoints = document.getElementById("your-points-el")
let computerPoints = document.getElementById("computer-points-el")
let winnerEl = document.getElementById("winner-el")
// let winnerDiv = document.getElementsByClassName(".winner")

function randomItem() {
  return hands[Math.floor(Math.random() * hands.length)]
}

function animation() {
  messageEl.style.opacity = 0;
  messageEl.style.transition = "1s";
}
function submit() {
  if (count < 10) {
    game()
    messageEl.style.opacity = 2;
    messageEl.style.transition = "1s";
    setTimeout(animation, 2000);
    yourFinalPoint = yourBonus
    computerFinalPoint = computerBonus
  } else {
      messageEl.textContent = "Game is over"
      messageEl.style.opacity = 2;
      messageEl.style.transition = "1s";
      setTimeout(animation, 2000);
    }
}    
      

    //   if (Number(yourFinalPoint) > Number(computerFinalPoint)) {
    //     winnerEl.textContent = "You've won the game!"
        
    //     winnerEl.style.visibility = "visible"
    //     // winnerDiv.style.visibility = "visible"
    //     winnerEl.style.color = "green"
    //   }
    //   else if (Number(yourFinalPoint) < Number(computerFinalPoint)) {
    //     winnerEl.textContent = "You've lost the game."
    //     winnerEl.style.visibility = "visible"
    //     // winnerDiv.style.visibility = "visible"
    //     winnerEl.style.color = "red"
    //   } else {
    //     winnerEl.textContent = "Tie"
    //   }
    //   console.log(winnerEl.textContent)

function game() {
  for (i = 0; i < handsEl.length; i++) {
    if (handsEl[i].checked) {
      answerEl.innerHTML += handsEl[i].value
      answerNode = handsEl[i]
    }
  }

  let computerAnswer = randomItem()

  computersHandEl.textContent += computerAnswer

  if (answerNode.value === computerAnswer) {
    messageEl.textContent = "Equal"
  }

  if (answerNode.value === "✊" && computerAnswer === "🖐") {
    messageEl.textContent = "Computer won!!"
  }

  if (answerNode.value === "✊" && computerAnswer === "✌") {
    messageEl.textContent = "You won!"
  }

  if (answerNode.value === "🖐" && computerAnswer === "✊") {
    messageEl.textContent = "You won!"
  }

  if (answerNode.value === "🖐" && computerAnswer === "✌") {
    messageEl.textContent = "Computer won!!"
  }

  if (answerNode.value === "✌" && computerAnswer === "🖐") {
    messageEl.textContent = "You won!"
  }

  if (answerNode.value === "✌" && computerAnswer === "✊") {
    messageEl.textContent = "Computer won!!"
  }

  if (messageEl.textContent === "You won!") {
    yourBonus += 1
    yourPoints.textContent = "Your points: " + yourBonus
  }
  if (messageEl.textContent === "Computer won!!") {
    computerBonus += 1
    computerPoints.textContent = "Computer points: " + computerBonus
  }
  if (messageEl.textContent === "Equal") {
    yourBonus += 1
    computerBonus += 1
    yourPoints.textContent = "Your points: " + yourBonus
    computerPoints.textContent = "Computer points: " + computerBonus
  }
  count += 1
  console.log(count)
}