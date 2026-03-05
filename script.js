// Typing Animation
const name = "Tepid Haru Perpetua";
let i=0;
const typed = document.getElementById("typed-name");
function typeName(){
if(i<name.length){
typed.innerHTML += name.charAt(i);
i++;
setTimeout(typeName,150);
}}
window.onload = typeName;

// Navbar Scroll Effect
window.addEventListener("scroll",function(){
const navbar = document.querySelector(".navbar");
if(window.scrollY>50) navbar.style.background = "#020617";
else navbar.style.background = "rgba(0,0,0,0.4)";
});

// Particles Background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];

class Particle{
constructor(x,y,radius,color,dx,dy){
this.x=x;this.y=y;this.radius=radius;this.color=color;this.dx=dx;this.dy=dy;
}
draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);ctx.fillStyle=this.color;ctx.fill();}
update(){
if(this.x+this.radius>canvas.width||this.x-this.radius<0)this.dx*=-1;
if(this.y+this.radius>canvas.height||this.y-this.radius<0)this.dy*=-1;
this.x+=this.dx;this.y+=this.dy;this.draw();}
}

function initParticles(){
particlesArray=[];
for(let i=0;i<100;i++){
let radius=Math.random()*3+1;
let x=Math.random()*(canvas.width-radius*2)+radius;
let y=Math.random()*(canvas.height-radius*2)+radius;
let dx=(Math.random()-0.5)*1;
let dy=(Math.random()-0.5)*1;
particlesArray.push(new Particle(x,y,radius,"white",dx,dy));
}
}

function animate(){
requestAnimationFrame(animate);
ctx.clearRect(0,0,canvas.width,canvas.height);
particlesArray.forEach(p=>p.update());
}

initParticles();
animate();
window.addEventListener("resize",function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;initParticles();});