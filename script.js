gsap.from("#page2 h1 ,#page2 h4 ,#page2 #about-us", {
  scrollTrigger :{
      trigger : "#page2 h1",
      Start: "top 30%",
  },
  y : 100,
  opacity:0,
  ease : Expo.easeInOut,
  duration : 2,  
})

gsap.from("#page3 #page3-left img", {
  scrollTrigger :{
      trigger : "#page3 #page3-left img",
      Start: "top 10%",
  },
  x : -100,
  opacity:0,
  ease : Expo.easeInOut,
  duration : 3,  
})

gsap.from("#page3 #page3-right h1 ,#page3 #page3-right p, #page3 #page3-right #p3-rlast" , {
  scrollTrigger :{
      trigger : "#page3 #page3-right h1",
      Start: "top 10%",
  },
  y : 100,
  opacity:0,
  ease : Expo.easeInOut,
  duration : 3,  
})

gsap.from("#page4 h1 ,#page4 img", {
  scrollTrigger :{
      trigger : "#page4 h1",
      Start: "top 100%",
  },
  y: 100,
  opacity:0,
  ease : Expo.easeInOut,
  duration : 3,  
})

gsap.from("#page5 .p5-rl ,#p5-last", {
  scrollTrigger :{
      trigger : "#page5 .p5-rl",
      Start: "top 50%",
  },
  y: 100,
  opacity:0,
  ease : Expo.easeInOut,
  duration : 3,  
})

gsap.from("#page7 #p7-mid", {
  scrollTrigger :{
      trigger : "#page7 #p7-mid",
      Start: "top 50%",
  },
  y: 100,
  opacity:0,
  ease : Expo.easeInOut,
  duration : 3,  
})

gsap.from("#page7 #p7-bottom", {
  scrollTrigger :{
      trigger : "#page7 #p7-bottom",
      Start: "top 0%",
      end : "top 50%",
  },
  y: 100,
  opacity:0,
  ease : Expo.easeInOut,
  duration : 3,  
})



var tl = gsap.timeline();

tl
.from("#img1",{
    y : 100,
      duration :1.5,
      opacity :0
})
.from("#img2",{
    x: 80,
    duration :1.5,
    opacity :0
} ,"-=1.5")
.from("#img3",{
    y : -80,
    duration :1.5,
    opacity :0
},"-=1.5")
.from("#page1 h1",{
    duration :3,
    opacity :0,
},"-=1.5")
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grapcursor:true
});

var flag = 0;
var nav = document.querySelector("#right-side")
var menu = document.querySelector("#menu-icon")
document.querySelector("#menu-icon").addEventListener("click",function () {
      if (flag===0) {
        nav.style.display = "block";
        menu.innerHTML = `<i class="ri-close-line"></i>`
        flag = 1
        
      } 
      else {
        nav.style.display = "none";
        menu.innerHTML = `<i class="ri-menu-3-line"></i>`
        flag = 0
      }
})  