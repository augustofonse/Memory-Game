const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard () {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        if (lockBoard) return;
        if (this === firstCard) return;

        // first click
        hasFlippedCard = true;
        firstCard = this;
        return;

    }
    // second click
    hasFlippedCard = false;
    secondCard = this;

        // do cards match?
       checkForMatch();
    }


function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

isMatch ? disableCards() : unflipCards();
}

function disableCards() {
firstCard.removeEventListener ('click', flipCard);
econdCard.removeEventListener ('click', flipCard);

resetBoard();
}

function unflipCards() {
    lockBoard = true;

setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
    } , 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

(function shuffle() {
    cards.forEach(card =>{
        let randomPas = Math.floor(Math.random() * 12,);
        card.style.order = randomPas;
    })
})();


cards.forEach(card => card.addEventListener('click', flipCard))
;

