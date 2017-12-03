console.log("Up and running!");

//Storing the card variables in an array using array & objects
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},

	{
		rank: "king",
		suit: "diamond",
		cardImage: "images/king-of-diamond.png"
	}
];
//Storing the value of cards that are actively in play
var cardsInPlay = [];



//FUNCTION - for checking for a match of two cards
var checkForMatch = function(){
	//if cards>2 & cards are same
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!!!");
	}
	//if cards >2 and cards are not same
	else {
		alert("Sorry, try again");
	}
}

//Function for flipping card
//function
//
var flipCard = function (cardId){

		//Printing the card user flipped
		console.log("User flipped card" +cards[cardId].rank);
		console.log("of " +cards[cardId].suit);
		console.log("(img) " +cards[cardId].cardImage);

		//Push it to cards in play array
		cardsInPlay.push(cards[cardId].rank);
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

