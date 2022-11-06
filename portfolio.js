

// MOBILE NAVBAR

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }


  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation ?
        (link.style.animation = "") :
        (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
            }s`);
    });
  }


  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }


  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }


  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}


const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);


mobileNavbar.init();




//  INTERNAL NAVIGATION LINKS

const menuItens = document.querySelectorAll(".menu li a")

menuItens.forEach(item => {
  item.addEventListener('click', scroolToIdOnClick)
})

function getScrollTopByHref(element) {
  const id = element.getAttribute("href")
  return document.querySelector(id).offsetTop;

}

function scroolToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 110;
  scrollToPosition(to)
}

function scrollToPosition(to) {
  smoothScrollTo(0, to)
}



//Smooth scroll animation
// @param {int} endX: destination x coordinate
// @param {int} duration: animation duration in ms

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 1000;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


/* THEME SWITCHER */

let btn = document.getElementById("checkbox")


btn.addEventListener("click", (e) => {
 
  document.body.classList.toggle("white", e.target.clicked);
})


// /*---   ScrollReveal: SHOW ELEMENTS WHEN SCROLLING THE PAGE ----*/


const target = document.querySelectorAll("[data-anime]")
const animationClass = "animate"

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4 );
  target.forEach(function(element){
      if((windowTop) > element.offsetTop){
        element.classList.add(animationClass)
      }
      else{
        element.classList.remove(animationClass)
      }
  })
}

animeScroll();

if(target.length){
window.addEventListener("scroll", function(){ 
  animeScroll()
})
}

onload=function(){
document.body.style.visibility="visible"
}