let player1score =0;
let player2score =0;
let player1Turn =true;
 // create variable to store references of necesary dom nodes

 const player1Dice = document.getElementById('player1Dice');
 const player2Dice = document.getElementById('player2Dice');
 const player1scoreboard =document.getElementById('player1Scoreboard');
 const player2scoreboard =document.getElementById('player2Scoreboard');
 const massage= document.getElementById('massage');
const resetBtn= document.getElementById('resetBtn');
const rollBtn= document.getElementById('rollBtn');


function showDisplayButton(){
	rollBtn.style.display="none"
 	resetBtn.style.display="block"
}
/*hook up a click event listner to roll dice button . log out a random number between 1 and 6*/
 rollBtn.addEventListener("click",function(){
 	const randomNumber = Math.floor(Math.random()*6)+1;// *6 is random number from 0-5 and +1 makes 1-6.




  // find out which player turnn it is.
 if(player1Turn){
 	player1score +=randomNumber;
 	player1scoreboard.textContent=player1score
 	player1Dice.textContent= randomNumber;
 	player1Dice.classList.remove("active");
 	player2Dice.classList.add("active");
 	massage.textContent="Player 2 turn"
 	player2Dice.textContent='-';
 

 }else{
 	player2score+=randomNumber;
 	player2scoreboard.textContent=player2score; 
 	player2Dice.textContent= randomNumber;
 	 player2Dice.classList.remove("active");
 	 player1Dice.classList.add("active");
 	 massage.textContent="Player 1 turn"
 	 player1Dice.textContent="-";

 }
 // for winner 
 if(player1score>=20){
 	massage.textContent="player 1 won.. hurryyyyyyyyyyyyyyyyyyyyyy"
 	showDisplayButton()
 }else if(player2score>=20){
 	massage.textContent="player 2 won... hurryyyyyyyyyyyyyyyyyyyyyy"
 	showDisplayButton()
 }

 // switch the turn back to the other player
/* if(player1Turn){
 	player1Turn=false;
 }else{
 	player1Turn=true;
 }*/
// simple form
 player1Turn=!player1Turn
 })

resetBtn.addEventListener("click",function(){
	reset();
})

function reset(){
massage.textContent="player 1 turn";
player1Scoreboard.textContent=0;
player2scoreboard.textContent=0;
player1Dice.textContent='-';
player2Dice.textContent='-';
player1score=0;
player2score=0;
player1Turn=true;
resetBtn.style.display="none";
rollBtn.style.display="block";
player2Dice.classList.remove("active");
player1Dice.classList.add("active");
}