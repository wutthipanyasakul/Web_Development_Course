//Lesson 7 While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];


let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};