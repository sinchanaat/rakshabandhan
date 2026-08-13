const birthday = new Date("2026-08-22T00:00:00");
const celebrate = document.getElementById("celebrateBtn");
const surprise = document.getElementById("surpriseBtn");
const secret = document.getElementById("secret");
const confetti = document.getElementById("confetti");
const musicBtn = document.getElementById("musicBtn");

function burst(count=100){
  confetti.innerHTML="";
  for(let i=0;i<count;i++){
    const p=document.createElement("i");
    p.className="piece";
    p.style.left=Math.random()*100+"vw";
    p.style.top=(-10-Math.random()*30)+"vh";
    p.style.background=["#ff765c","#f7df55","#f7f1e8","#7ac7a5","#8c7cff"][Math.floor(Math.random()*5)];
    p.style.transform=`rotate(${Math.random()*360}deg)`;
    p.style.animationDelay=Math.random()*.8+"s";
    p.style.animationDuration=(2+Math.random()*2)+"s";
    confetti.appendChild(p);
  }
  setTimeout(()=>confetti.innerHTML="",4500);
}
celebrate.addEventListener("click",()=>{burst(140);document.getElementById("letter").scrollIntoView({behavior:"smooth"});});
surprise.addEventListener("click",()=>{secret.classList.add("show");burst(180);});
document.getElementById("photoCard").addEventListener("click",()=>{
  const img=document.querySelector("#photoCard img");
  const overlay=document.createElement("div");
  overlay.style="position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:30;display:grid;place-items:center;padding:20px;cursor:pointer";
  overlay.innerHTML=`<img src="${img.src}" style="max-width:95vw;max-height:90vh;object-fit:contain">`;
  overlay.onclick=()=>overlay.remove();
  document.body.appendChild(overlay);
});

// A lightweight music control; user can add birthday-music.mp3 to the folder.
let audio;
musicBtn.addEventListener("click",()=>{
  if(!audio){ audio=new Audio("birthday-music.mp3"); audio.loop=true; }
  if(audio.paused){audio.play().then(()=>musicBtn.innerHTML="♫ <span>Pause</span>").catch(()=>alert("Add birthday-music.mp3 to the website folder first."));}
  else{audio.pause();musicBtn.innerHTML="♫ <span>Music</span>";}
});
