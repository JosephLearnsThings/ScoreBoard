let homeScore = 0
let guestScore = 0
let homeElement = document.getElementById("home")
let guestElement = document.getElementById("guest")

function addOneHome() {
    homeScore += 1;
    homeElement.textContent = homeScore
    
}