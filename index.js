let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function add1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
}
function add2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore;
}
function add3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore;
}

function addG1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore;
}
function addG2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore;
}
function addG3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore;
}