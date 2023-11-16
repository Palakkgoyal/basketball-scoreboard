let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function add(n) {
    homeScore += n
    homeScoreEl.textContent = homeScore;
}

function addG(n) {
    guestScore += n
    guestScoreEl.textContent = guestScore;
}