let player1score =0;
let player2score =0;
let player1Turn =true;
 // create variable to store references of necesary dom nodes

 const player1Dice = document.getElementById('player1Dice');
 const player2Dice = document.getElementById('player2Dice');
 const player1scoreboard =document.getElementById('player1scoreboard');
 const player2scoreboard =document.getElementById('player2scoreoard');
 const massage= document.getElementById('massage');
const resetBtn= document.getElementById('resetBtn');
const rollBtn= document.getElementById('rollBtn');

/*hook up a click event listner to roll dice button . log out a random number between 1 and 6*/
 rollBtn.addEventListener("click",function(){
 	const randomNumber = Math.floor(Math.random()*6)+1;// *6 is random number from 0-5 and +1 makes 1-6.
 	console.log(randomNumber);
 })