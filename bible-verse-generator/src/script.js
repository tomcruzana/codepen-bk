//bible verse
const v = document.querySelector(".verse");
const c = document.querySelector(".chapter");
const b = document.querySelector("button");
const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');

b.addEventListener("click", ()=>{
  audio.play(); //sound 
  fetch("https://beta.ourmanna.com/api/v1/get/?format=json&order=random")
  .then(r => r.json())
  .then(d => {
        v.textContent = `"${d.verse.details.text}"`;
        c.textContent = d.verse.details.reference;
  })
  .catch(err => alert(`error fetching data ${err}`))
});




