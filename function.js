

let total = 0
let cards = []
let message = ''
let blackJack = false
let alive = false
let viewCard = document.getElementById("card-view")
let totalCard = document.getElementById("total-view")
let infoView = document.getElementById("info-view")
let playerInfo = document.getElementById("player-info")
let betView = document.getElementById("bet-view")

let player = {
    name: "Player",
    money: 500
}


playerInfo.textContent = player.name + ": " + player.money

function startGame() {

    if (alive === false) {

        alive = true
        let firstCard = randomCard()
        let secondCard = randomCard()
        cards = [firstCard, secondCard]
        total = firstCard + secondCard
        renderGame()

    } else if (blackJack == true) {

        alive = true
        let firstCard = randomCard()
        let secondCard = randomCard()
        cards = [firstCard, secondCard]
        total = firstCard + secondCard
        renderGame()

    }

}


function renderGame() {

    viewCard.textContent = "Cards: "
    totalCard.textContent = "Total: " + total

    for(let addCard = 0; addCard < cards.length; addCard++) {
        viewCard.textContent += cards[addCard] + " "
    }

    if (total < 21) {
        message = "Draw another Card?"
    } else if (total === 21) {
        message = "You win!"
        blackJack = true
    } else {
        message = "You Lose!"
        alive = false

    }

    infoView.textContent = message

}

function newCard() {

    if(alive === true || blackJack === true) {

        let drawCard = randomCard()
        total += drawCard
        cards.push(drawCard)
        renderGame()
    }


}

function randomCard() {

    return Math.floor( Math.random() * 12 ) + 1

}












