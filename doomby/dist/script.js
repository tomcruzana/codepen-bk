let w = window.innerWidth / 2;
const p = document.querySelector(".player");
const c = document.querySelector(".coords");
const s = document.querySelector(".shots");
let shotsCtr = 0;
const sc = document.querySelector(".score");
let scoreCtr = 0;

window.addEventListener("mousemove", (event) => {
  c.textContent = `${event.clientX}`;
  //p.style.top = event.clientY + "px";

  p.style.left = event.clientX + "px";

  if (event.clientX > w + 250) {
    //going right
    p.style.transform = "rotate(45deg)";
    p.style.bottom = "-40px";
  } else if (event.clientX < w - 250) {
    //going left
    p.style.transform = "rotate(-45deg)";
    p.style.bottom = "-100px";
  } else {
    p.style.transform = "rotate(0deg)";
    p.style.bottom = "0px";
  }
});

//fire
document.addEventListener("mousedown", () => {
  let fire = new Audio(
    "https://opengameart.org/sites/default/files/lmg_fire01.mp3"
  );
  fire.play();
  p.style.background = "url('https://i.imgur.com/gDaLdh5.png')";
  ++shotsCtr;
  s.textContent = shotsCtr;
});

document.addEventListener("mouseup", () => {
  p.style.background = "url('https://i.imgur.com/dc5O4Mc.png')";
});

// aim
document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
    p.style.transform = "scale(2)";
});

// enemy
function spawnEnemy() {
  const minX = 0;
  const maxX = window.innerWidth - 100;
  const minY = 0;
  const maxY = window.innerHeight - 100;
  
  const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
  const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

  const enemy = document.createElement('div');
  enemy.classList.add('enemy');
  
  enemy.style.position = 'absolute';
  enemy.style.left = randomX + 'px';
  enemy.style.top = randomY + 'px';
  enemy.style.width = '100px';
  enemy.style.height = '100px';
  enemy.style.backgroundImage = 'url(https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.gif)';
  enemy.style.backgroundSize = 'cover';
  
  document.body.appendChild(enemy);
  
  enemy.addEventListener('click', () => {
    // Remove the enemy when clicked
    document.body.removeChild(enemy);
    ++scoreCtr;
    sc.textContent = scoreCtr;
  });
}

setInterval(spawnEnemy, 5000);