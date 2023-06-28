// console.log(randomDiceResult1)
// console.log(randomDiceResult2)

const header = document.querySelector(".container h1")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")

const btn = document.querySelector("button")

// header.textContent = "kupa"

// console.log(header)

const setSrc = (img, num) => {
	img.setAttribute("src", "./images/dice" + num + ".png")
}
const playTheGame = () => {
	const randomDiceResult2 = Math.floor(Math.random() * 6 + 1)
	const randomDiceResult1 = Math.floor(Math.random() * 6 + 1)
	setSrc(img1, randomDiceResult1)
	setSrc(img2, randomDiceResult2)

	const checkWinner = (header) => {
		if (randomDiceResult1 > randomDiceResult2) {
			header.textContent = "Player1 wins"
		} else if (randomDiceResult2 > randomDiceResult1) {
			header.textContent = "Player2 wins"
		} else {
			header.textContent = "Draw"
		}
	}
	checkWinner(header)
}

btn.addEventListener("click", playTheGame)
