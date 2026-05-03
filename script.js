// MENU
function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");

  document.body.style.overflow =
    menu.classList.contains("open") ? "hidden" : "auto";
}

// MODAL
function openModal(id){
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  document.querySelectorAll(".modal-box > div")
    .forEach(el => el.style.display="none");

  document.getElementById(id).style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

// ANIMATION
const blocks = document.querySelectorAll(".block");

function reveal(){
  const t = window.innerHeight * 0.85;
  blocks.forEach(b=>{
    if(b.getBoundingClientRect().top < t){
      b.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
