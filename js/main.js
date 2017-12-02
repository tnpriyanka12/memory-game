console.log("Up and running!");

//Storing the variables in an array
var cards = ["queen", "queen", "king", "king"];
//Storing the value of cards that are actively in play
var cardsInPlay = [];

//Storing value of first card flipped
var cardOne;
cardOne = cards[0];
//Push it to cards in play array
cardsInPlay.push(cardOne);
console.log("User flipped card " + cardsInPlay);

//Storing value of second card flipped
var cardTwo;
cardTwo = cards[2];
//Push it to cards in play array
cardsInPlay.push(cardTwo);
console.log("User flipped card " + cardsInPlay[cardsInPlay.length - 1] );



//Checking if number of cards flipped is greater than 2
if(cardsInPlay.length === 2){
	//if cards>2 & cards are same
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!!!");
	}
	//if cards >2 and cards are not same
	else {
		alert("Sorry, try again");
	}
}

else{
	alert("Pick another card!")

}