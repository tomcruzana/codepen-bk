const cat = document.querySelector("#cat");
const button = document.querySelector("button");

function playAudio() {
  var audio = new Audio('https://www.chosic.com/wp-content/uploads/2023/06/cat-meowing(chosic.com).mp3');
  audio.play();
}

button.addEventListener("click", e => {
  fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(data => {
    cat.src = data[0].url
    playAudio();
  })
  .catch(err => console.log(err))
});