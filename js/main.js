console.log("Up and running!");

//Storing the variables in an array
var cards = ["queen", "queen", "king", "king"];
//Storing the value of cards that are actively in play
var cardsInPlay = [];



//FUNCTION - for checking for a match of two cards
var checkForMatch = function(){
	//if cards>2 & cards are same
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!!!");
	}
	//if cards >2 and cards are not same
	else {
		console.log("Sorry, try again");
	}
}

//Function for flipping card
//function
//
var flipCard = function (cardId){

		//Printing the card user flipped
		console.log("User flipped card " +cardId);

		//Push it to cards in play array
		cardsInPlay.push(cards[cardId]);
		//console.log("User flipped card " + cardsInPlay[cardsInPlay.length - 1] );


		//Checking if number of cards flipped is greater than 2
		if(cardsInPlay.length === 2){
			checkForMatch();
		}

		else {
			console.log("Pick another card!");
		}

};

flipCard(0);
flipCard(2);

