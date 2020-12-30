'use strict';

// Seleccion de elementos del DOM;
const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const players = document.querySelectorAll('.player');
const currentScore = document.querySelectorAll('.current-score');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const activePlayer = document.getElementsByClassName('player--active');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const score0 = document.getElementById('score--0');;
const score1 = document.getElementById('score--1');
const scores = document.querySelectorAll('.score');
const btnNew = document.querySelector('.btn--new');
const name0 = document.getElementById('name--0');
const name1 = document.getElementById('name--1');
;



const playerActiveCurrentScore = (dado) => {
    for(let i = 0; i < players.length; i++){
        if(dado === 1){
            players[i].classList.toggle('player--active');
            for (let a = 0; a < currentScore.length; a++) {
                currentScore[a].textContent = 0
            };
        };
    };
}

const winner = () =>{
    if (score0.textContent >= 100) {
        player0.classList.add('player--winner')
        player0.classList.add('name')
        btnHold.classList.add('hidden')
        btnRoll.classList.add('hidden')
        name0.textContent = 'WINNER!!😁✨🎉';

    }else if( score1.textContent >= 100 ){
        player1.classList.add('player--winner');
        player1.classList.add('name')
        btnHold.classList.add('hidden')
        btnRoll.classList.add('hidden')
        name1.textContent = 'WINNER!!😁✨🎉';
    }
}


btnRoll.addEventListener('click', () => {
    // Numero aleatorio para el dado.
    const  diceNumber = Math.trunc(Math.random() * 6)+ 1;

    
    !player1.classList.contains('player--active') ? current0.textContent = Number(current0.textContent) + diceNumber : current1.textContent = Number(current1.textContent) + diceNumber;
    
    playerActiveCurrentScore(diceNumber)
    dice.src=`dice-${diceNumber}.png`
});


btnHold.addEventListener('click', () => {

   if(player0.classList.contains('player--active')){
    score0.textContent = Number(score0.textContent) +  Number(current0.textContent);
    current0.textContent = 0
   }else{
    score1.textContent = Number(score1.textContent) +  Number(current1.textContent);
    current1.textContent = 0
   }

   for (let i = 0; i < players.length; i++) {
    players[i].classList.toggle('player--active')
   }
   winner()
})


btnNew.addEventListener('click', () => {
    if (score0.textContent >= 100) {
        player0.classList.remove('player--winner')
        player0.classList.remove('name')
        btnHold.classList.remove('hidden')
        btnRoll.classList.remove('hidden');
        score0.textContent = 0;
        score1.textContent = 0
        name0.textContent = 'PLAYER 1';
        player0.classList.add('player--active')
        player1.classList.remove('player--active')

    }else if( score1.textContent >= 100){
        player1.classList.remove('player--winner');
        player1.classList.remove('name')
        btnHold.classList.remove('hidden')
        btnRoll.classList.remove('hidden')
        score1.textContent = 0
        score0.textContent = 0;
        name1.textContent = 'PLAYER 2'
        player0.classList.add('player--active')
        player1.classList.remove('player--active')
    }
})
