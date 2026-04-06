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
