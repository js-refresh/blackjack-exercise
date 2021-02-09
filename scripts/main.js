var deck = [
  '<img src="images/2_of_clubs.png" alt="">',
  '<img src="images/2_of_diamonds.png" alt="">',
  '<img src="images/2_of_hearts.png" alt ="">',
  '<img src="images/2_of_spades.png" alt ="">',
  '<img src="images/3_of_clubs.png" alt ="">',
  '<img src="images/3_of_diamonds.png" alt ="">',
  '<img src="images/3_of_hearts.png" alt ="">',
  '<img src="images/3_of_spades.png" alt ="">',
  '<img src="images/4_of_clubs.png" alt ="">',
  '<img src="images/4_of_diamonds.png" alt ="">',
  '<img src="images/4_of_hearts.png" alt ="">',
  '<img src="images/4_of_spades.png" alt ="">',
  '<img src="images/5_of_clubs.png" alt ="">',
  '<img src="images/5_of_diamonds.png" alt ="">',
  '<img src="images/5_of_hearts.png" alt ="">',
  '<img src="images/5_of_spades.png" alt ="">',
  '<img src="images/6_of_clubs.png" alt ="">',
  '<img src="images/6_of_diamonds.png" alt ="">',
  '<img src="images/6_of_hearts.png" alt ="">',
  '<img src="images/6_of_spades.png" alt ="">',
  '<img src="images/7_of_clubs.png" alt ="">',
  '<img src="images/7_of_diamonds.png" alt ="">',
  '<img src="images/7_of_hearts.png" alt ="">',
  '<img src="images/7_of_spades.png" alt ="">',
  '<img src="images/8_of_clubs.png" alt ="">',
  '<img src="images/8_of_diamonds.png" alt ="">',
  '<img src="images/8_of_hearts.png" alt ="">',
  '<img src="images/8_of_spades.png" alt ="">',
  '<img src="images/9_of_clubs.png" alt ="">',
  '<img src="images/9_of_diamonds.png" alt ="">',
  '<img src="images/9_of_hearts.png" alt ="">',
  '<img src="images/9_of_spades.png" alt ="">',
  '<img src="images/10_of_clubs.png" alt ="">',
  '<img src="images/10_of_diamonds.png" alt ="">',
  '<img src="images/10_of_hearts.png" alt ="">',
  '<img src="images/10_of_spades.png" alt ="">',
  '<img src="images/ace_of_clubs.png" alt ="">',
  '<img src="images/ace_of_diamonds.png" alt ="">',
  '<img src="images/ace_of_hearts.png" alt ="">',
  '<img src="images/ace_of_spades.png" alt ="">',
  '<img src="images/jack_of_clubs.png" alt ="">',
  '<img src="images/jack_of_diamonds.png" alt ="">',
  '<img src="images/jack_of_hearts.png" alt ="">',
  '<img src="images/jack_of_spades.png" alt ="">',
  '<img src="images/king_of_clubs.png" alt ="">',
  '<img src="images/king_of_diamonds.png" alt ="">',
  '<img src="images/king_of_hearts.png" alt ="">',
  '<img src="images/king_of_spades.png" alt ="">',
  '<img src="images/queen_of_clubs.png" alt ="">',
  '<img src="images/queen_of_diamonds.png" alt ="">',
  '<img src="images/queen_of_hearts.png" alt ="">',
  '<img src="images/queen_of_spades.png" alt ="">',
];

var value = [
  '<img src="images/2_of_clubs.png" alt="">', 2,
  '<img src="images/2_of_diamonds.png" alt="">', 2,
  '<img src="images/2_of_hearts.png" alt ="">', 2,
  '<img src="images/2_of_spades.png" alt ="">', 2,
  '<img src="images/3_of_clubs.png" alt ="">', 3,
  '<img src="images/3_of_diamonds.png" alt ="">', 3,
  '<img src="images/3_of_hearts.png" alt ="">', 3,
  '<img src="images/3_of_spades.png" alt ="">', 3,
  '<img src="images/4_of_clubs.png" alt ="">', 4, 
  '<img src="images/4_of_diamonds.png" alt ="">', 4, 
  '<img src="images/4_of_hearts.png" alt ="">', 4, 
  '<img src="images/4_of_spades.png" alt ="">', 4, 
  '<img src="images/5_of_clubs.png" alt ="">', 5, 
  '<img src="images/5_of_diamonds.png" alt ="">', 5, 
  '<img src="images/5_of_hearts.png" alt ="">', 5, 
  '<img src="images/5_of_spades.png" alt ="">', 5, 
  '<img src="images/6_of_clubs.png" alt ="">', 6,
  '<img src="images/6_of_diamonds.png" alt ="">', 6,
  '<img src="images/6_of_hearts.png" alt ="">', 6,
  '<img src="images/6_of_spades.png" alt ="">', 6,
  '<img src="images/7_of_clubs.png" alt ="">', 7, 
  '<img src="images/7_of_diamonds.png" alt ="">', 7, 
  '<img src="images/7_of_hearts.png" alt ="">', 7, 
  '<img src="images/7_of_spades.png" alt ="">', 7, 
  '<img src="images/8_of_clubs.png" alt ="">', 8, 
  '<img src="images/8_of_diamonds.png" alt ="">', 8, 
  '<img src="images/8_of_hearts.png" alt ="">', 8, 
  '<img src="images/8_of_spades.png" alt ="">', 8, 
  '<img src="images/9_of_clubs.png" alt ="">', 9, 
  '<img src="images/9_of_diamonds.png" alt ="">', 9, 
  '<img src="images/9_of_hearts.png" alt ="">', 9, 
  '<img src="images/9_of_spades.png" alt ="">', 9, 
  '<img src="images/10_of_clubs.png" alt ="">', 10,
  '<img src="images/10_of_diamonds.png" alt ="">', 10,
  '<img src="images/10_of_hearts.png" alt ="">', 10,
  '<img src="images/10_of_spades.png" alt ="">', 10,
  '<img src="images/ace_of_clubs.png" alt ="">', 11,
  '<img src="images/ace_of_diamonds.png" alt ="">', 11,
  '<img src="images/ace_of_hearts.png" alt ="">', 11,
  '<img src="images/ace_of_spades.png" alt ="">', 11,
  '<img src="images/jack_of_clubs.png" alt ="">', 10, 
  '<img src="images/jack_of_diamonds.png" alt ="">', 10, 
  '<img src="images/jack_of_hearts.png" alt ="">', 10, 
  '<img src="images/jack_of_spades.png" alt ="">', 10, 
  '<img src="images/king_of_clubs.png" alt ="">', 10, 
  '<img src="images/king_of_diamonds.png" alt ="">', 10, 
  '<img src="images/king_of_hearts.png" alt ="">', 10, 
  '<img src="images/king_of_spades.png" alt ="">', 10, 
  '<img src="images/queen_of_clubs.png" alt ="">', 10, 
  '<img src="images/queen_of_diamonds.png" alt ="">', 10, 
  '<img src="images/queen_of_hearts.png" alt ="">', 10, 
  '<img src="images/queen_of_spades.png" alt ="">', 10, 
];


const dealCard = document.querySelector('#deal-button')
const dealerHand = document.querySelector("#dealer-hand")
const playerHand = document.querySelector("#player-hand")
dealCard.addEventListener("click", () => {
  let cardDealt = deck[deck.length*Math.random() | 0];
  let cardDealt2 = deck[deck.length*Math.random() | 1];
  let cardDealt3= deck[deck.length*Math.random() | 2];
  let cardDealt4 = deck[deck.length*Math.random() | 3];

    dealerHand.innerHTML += cardDealt + cardDealt3
    playerHand.innerHTML += cardDealt2 + cardDealt4  
})
const hit = document.querySelector('#hit-button')
const hitPlayer = document.querySelector("#player-hand")
const hitDealer = document.querySelector("#dealer-hand")
hit.addEventListener("click", () => {
  let cardDealt5 = deck[deck.length*Math.random() | 0];
    playerHand.innerHTML += cardDealt5 
    if (playerHand ){

    }
})



window.addEventListener('DOMContentLoaded', function () {
  // Execute after page load
})



var deck = [
    '<img src="images/2_of_clubs.png" alt="">',
    '<img src="images/2_of_diamonds.png" alt="">',
    '<img src="images/2_of_hearts.png" alt ="">',
    '<img src="images/2_of_spades.png" alt ="">',
    '<img src="images/3_of_clubs.png" alt ="">',
    '<img src="images/3_of_diamonds.png" alt ="">',
    '<img src="images/3_of_hearts.png" alt ="">',
    '<img src="images/3_of_spades.png" alt ="">',
    '<img src="images/4_of_clubs.png" alt ="">',
    '<img src="images/4_of_diamonds.png" alt ="">',
    '<img src="images/4_of_hearts.png" alt ="">',
    '<img src="images/4_of_spades.png" alt ="">',
    '<img src="images/5_of_clubs.png" alt ="">',
    '<img src="images/5_of_diamonds.png" alt ="">',
    '<img src="images/5_of_hearts.png" alt ="">',
    '<img src="images/5_of_spades.png" alt ="">',
    '<img src="images/6_of_clubs.png" alt ="">',
    '<img src="images/6_of_diamonds.png" alt ="">',
    '<img src="images/6_of_hearts.png" alt ="">',
    '<img src="images/6_of_spades.png" alt ="">',
    '<img src="images/7_of_clubs.png" alt ="">',
    '<img src="images/7_of_diamonds.png" alt ="">',
    '<img src="images/7_of_hearts.png" alt ="">',
    '<img src="images/7_of_spades.png" alt ="">',
    '<img src="images/8_of_clubs.png" alt ="">',
    '<img src="images/8_of_diamonds.png" alt ="">',
    '<img src="images/8_of_hearts.png" alt ="">',
    '<img src="images/8_of_spades.png" alt ="">',
    '<img src="images/9_of_clubs.png" alt ="">',
    '<img src="images/9_of_diamonds.png" alt ="">',
    '<img src="images/9_of_hearts.png" alt ="">',
    '<img src="images/9_of_spades.png" alt ="">',
    '<img src="images/10_of_clubs.png" alt ="">',
    '<img src="images/10_of_diamonds.png" alt ="">',
    '<img src="images/10_of_hearts.png" alt ="">',
    '<img src="images/10_of_spades.png" alt ="">',
    '<img src="images/ace_of_clubs.png" alt ="">',
    '<img src="images/ace_of_diamonds.png" alt ="">',
    '<img src="images/ace_of_hearts.png" alt ="">',
    '<img src="images/ace_of_spades.png" alt ="">',
    '<img src="images/jack_of_clubs.png" alt ="">',
    '<img src="images/jack_of_diamonds.png" alt ="">',
    '<img src="images/jack_of_hearts.png" alt ="">',
    '<img src="images/jack_of_spades.png" alt ="">',
    '<img src="images/king_of_clubs.png" alt ="">',
    '<img src="images/king_of_diamonds.png" alt ="">',
    '<img src="images/king_of_hearts.png" alt ="">',
    '<img src="images/king_of_spades.png" alt ="">',
    '<img src="images/queen_of_clubs.png" alt ="">',
    '<img src="images/queen_of_diamonds.png" alt ="">',
    '<img src="images/queen_of_hearts.png" alt ="">',
    '<img src="images/queen_of_spades.png" alt ="">',
];