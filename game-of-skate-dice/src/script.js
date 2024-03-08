
const playDiceRollSound = (url) => {
    var a = new Audio(url);
    a.play();
}

const stances = [
  "natural stance", 
  "switch",
  "fakie",
  "nollie",
  "any stance"
]

const sides = [
  "frontside", 
  "backside"
]

const spins = [
  "-",
  "180", 
  "360",
  "540",
  "-",
  "-"
]

const flips = [
  "-",
  "pop shuvit", 
  "heelflip",
  "kickflip",
  "hardflip",
  "inward heelflip",
  "varial kickflip",
  "varial heelflip",
  "bigspin",
  "bigflip",
  "impossible",
  "360 flip",
  "lazer flip"
]

const rollDice = () => {
  const stanceVal = Math.floor(Math.random() * 5)
  const sideVal = Math.floor(Math.random() * 2)
  const spinVal = Math.floor(Math.random() * 6)
  const flipVal = Math.floor(Math.random() * 13)
  
  return {
    stanceVal,
    sideVal,
    spinVal,
    flipVal
  }
}

const stanceDice = document.querySelector(".stances-dice")
const sideDice = document.querySelector(".sides-dice")
const spinDice = document.querySelector(".spins-dice")
const flipDice = document.querySelector(".flips-dice")
    
const rollBtn = document.querySelector("#roll")

rollBtn.addEventListener("click", (e)=>{
  playDiceRollSound('https://bit.ly/dice-sound')
  e.preventDefault;
  stanceDice.classList.remove("rotate")
  sideDice.classList.remove("rotate")
  spinDice.classList.remove("rotate")
  flipDice.classList.remove("rotate")
  
  void stanceDice.offsetWidth;
  void sideDice.offsetWidth;
  void spinDice.offsetWidth;
  void flipDice.offsetWidth;
  
  stanceDice.classList.add("rotate")
  sideDice.classList.add("rotate")
  spinDice.classList.add("rotate")
  flipDice.classList.add("rotate")
  
  stanceDice.innerHTML = stances[rollDice().stanceVal]
  sideDice.innerHTML = sides[rollDice().sideVal]
  spinDice.innerHTML = spins[rollDice().spinVal]
  flipDice.innerHTML = flips[rollDice().flipVal]
  
})

