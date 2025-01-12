const randomNumber= parseInt(Math.random()*100+1)

const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let p=document.createElement(`p`)
let previewGuess=[]
let playGame=true