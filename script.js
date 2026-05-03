function toggleMenu(){
  document.getElementById("menu").classList.toggle("open");
  document.body.style.overflow =
    document.getElementById("menu").classList.contains("open")
    ? "hidden" : "auto";
}

function openModal(id){
  document.getElementById("modal").style.display = "flex";

  document.querySelectorAll(".modal-content")
    .forEach(el => el.style.display="none");

  document.getElementById(id).style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

/* STRONG SCROLL ANIMATION */
const cards = document.querySelectorAll(".card");

function reveal(){
  const trigger = window.innerHeight * 0.85;

  cards.forEach((el, i)=>{
    if(el.getBoundingClientRect().top < trigger){
      setTimeout(()=>{
        el.classList.add("show");
      }, i * 60); // stagger effect
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
