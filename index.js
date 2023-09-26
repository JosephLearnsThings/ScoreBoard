let homeScore = 0
let guestScore = 0
let homeElement = document.getElementById("home")
let guestElement = document.getElementById("guest")

function incrementScore(score, team) {
    if (team === "home") {
        homeScore += score;
        homeElement.textContent = homeScore
    } else if (team === "guest") {
        guestScore += score;
        guestElement.textContent = guestScore
    }
}

function resetScore(team) {
    if (team === "home") {
        homeScore = 0
        homeElement.textContent = homeScore
    } else if (team === "guest") {
        guestScore = 0
        guestElement.textContent = guestScore
    }

        
}

