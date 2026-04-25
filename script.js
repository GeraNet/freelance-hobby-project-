const elements = document.querySelectorAll(".reveal");

// reveal
function show(){
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < trigger) el.classList.add("show");
  });
}

window.addEventListener("scroll", show);
window.addEventListener("load", show);

// loader
window.addEventListener("load", ()=>{
  const loader = document.getElementById("loader");

  setTimeout(()=>{
    loader.style.opacity = "0";
    loader.style.transition = "0.5s";
    setTimeout(()=>loader.style.display="none",500);
  },800);
});

// burger
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", ()=>{
  navLinks.classList.toggle("active");
});

// navbar scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 50){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// progress
window.addEventListener("scroll", ()=>{
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

// typing
const text = "FHP – Freelance Hobby Projekt";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}

window.addEventListener("load", typing);

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click", e=>{
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
