// MENU
function toggleMenu(){
  document.getElementById("menu").classList.toggle("open");
  document.body.style.overflow =
    document.getElementById("menu").classList.contains("open")
    ? "hidden"
    : "auto";
}

// MODAL SYSTEM
function openModal(id){
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  document.querySelectorAll(".modal-content")
    .forEach(el => el.style.display = "none");

  document.getElementById(id).style.display = "block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

// SCROLL ANIMATION
const fadeEls = document.querySelectorAll(".fade");

function reveal(){
  const trigger = window.innerHeight * 0.85;

  fadeEls.forEach(el=>{
    if(el.getBoundingClientRect().top < trigger){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
