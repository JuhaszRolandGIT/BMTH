// https://www.youtube.com/watch?v=VZ07OjhdJlc&list=PL9bD98LkBR7P16BndaNtP4x6Wf5Ib85Hm&index=6



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

document.querySelector(".left")
.addEventListener("mousemove", function(){
    document.querySelector(".c-center-one").style.height = "100vh"
    // document.querySelector(".left").style.cursor = "pointer"
    document.querySelector("#lft-btn").style.backgroundColor = "#333"
    document.querySelector("#lft-btn").style.color = "#fff"

    document.querySelector(".container").style.height = "0vh"
    
    document.querySelector("#rght-btn").style.backgroundColor = "initial"
    document.querySelector("#rght-btn").style.color = "#333"

    document.querySelector(".img-one").style.width = "25vw"
    document.querySelector(".img-one").style.height = "25vh"
    document.querySelector(".img-one").style.opacity = "1"
    document.querySelector(".img-one").style.filter = "blur(0.5px)"

    document.querySelector(".img-two").style.width = "15vw"
    document.querySelector(".img-two").style.height = "17vh"
    document.querySelector(".img-two").style.opacity = "1"
    document.querySelector(".img-two").style.filter = "blur(5px)"

    document.querySelector(".img-three").style.width = "15vw"
    document.querySelector(".img-three").style.height = "17vh"
    document.querySelector(".img-three").style.opacity = "1"
    document.querySelector(".img-three").style.filter = "blur(5px)"

    document.querySelector(".img-four").style.width = "15vw"
    document.querySelector(".img-four").style.height = "17vh"
    document.querySelector(".img-four").style.opacity = "1"
    document.querySelector(".img-four").style.filter = "blur(5px)"

    document.querySelector(".img-five").style.width = "25vw"
    document.querySelector(".img-five").style.height = "25vh"
    document.querySelector(".img-five").style.opacity = "1"
    document.querySelector(".img-five").style.filter = "blur(5px)"

    document.querySelector("#about-btn").style.display = "none"
})

document.querySelector(".left")
.addEventListener("mouseleave", function(){
    document.querySelector(".c-center-one").style.height = "0vh"
    document.querySelector("#lft-btn").style.backgroundColor = "initial"
    document.querySelector("#lft-btn").style.color = "#333"
    document.querySelector(".img-one").style.width = "20vw"
    document.querySelector(".img-one").style.height = "22vh"
    document.querySelector(".img-one").style.opacity = "0"
    document.querySelector(".img-one").style.filter = "blur(10px)"

    document.querySelector(".img-two").style.width = "10vw"
    document.querySelector(".img-two").style.height = "10vh"
    document.querySelector(".img-two").style.opacity = "0"
    document.querySelector(".img-two").style.filter = "blur(5px)"

    document.querySelector(".img-three").style.width = "10vw"
    document.querySelector(".img-three").style.height = "10vh"
    document.querySelector(".img-three").style.opacity = "0"
    document.querySelector(".img-three").style.filter = "blur(5px)"

    document.querySelector(".img-four").style.width = "20vw"
    document.querySelector(".img-four").style.height = "22vh"
    document.querySelector(".img-four").style.opacity = "0"
    document.querySelector(".img-four").style.filter = "blur(5px)"

    document.querySelector(".img-five").style.width = "15vw"
    document.querySelector(".img-five").style.height = "17vh"
    document.querySelector(".img-five").style.opacity = "0"
    document.querySelector(".img-five").style.filter = "blur(5px)"

    document.querySelector("#about-btn").style.display = "flex"

})

document.querySelector("#rght-btn")
.addEventListener("click",  function(){
    document.querySelector(".container").style.height = "100vh"
    document.querySelector("#about-btn").style.display = "none"
    document.querySelector(".left").style.display = "none"
    document.querySelector(".right").style.display = "none"
    document.querySelector(".center").style.width = "100%"
    document.querySelector(".container h2").style.justifyContent = "center"
})

document.querySelector("svg")
.addEventListener("click",  function(){
    document.querySelector(".container").style.height = "0vh"
    document.querySelector(".left").style.display = "flex"
    document.querySelector(".right").style.display = "flex"
    document.querySelector(".center").style.width = "40%"
    document.querySelector("#about-btn").style.display = "flex"

})


document.querySelector(".right")
.addEventListener("dblclick", function(){
    document.querySelector(".container").style.height = "0vh"
})

document.querySelector("#rght-btn")
.addEventListener("mousemove",  function(){
    document.querySelector("#rght-btn").style.backgroundColor = "#333"
})

document.querySelector("#rght-btn")
.addEventListener("mouseleave",  function(){
    document.querySelector("#rght-btn").style.backgroundColor = "initial"

})

document.querySelector("#about-btn")
.addEventListener("mousemove", function(){
    document.querySelector("#about-btn").style.backgroundColor = "#333"
})

document.querySelector("#about-btn")
.addEventListener("mouseleave", function(){
    document.querySelector("#about-btn").style.backgroundColor = "initial"
})

document.querySelector("#about-btn")
.addEventListener("click", function(){
  document.querySelector(".about-box").style.height = "50vh"
  document.querySelector(".about-box").style.transition = "0.5s"
  document.querySelector(".t-center").style.height = "0vh"
  document.querySelector(".t-center h1").style.fontSize = "5vh"
  document.querySelector(".b-center h1").style.fontSize = "5vh"
  document.querySelector(".t-center h1").style.lineHeight = "5vh"
  document.querySelector(".b-center h1").style.lineHeight = "5vh"
  document.querySelector(".b-center h1").style.transition = "0.8s"
  document.querySelector(".t-center h1").style.transition = "0.8s"
  document.querySelector("#about-btn").style.display = "none"
  document.querySelector("#rght-btn").style.display = "none"
  document.querySelector("#lft-btn").style.display = "none"
  document.querySelector(".left").style.display = "none"
    document.querySelector(".right").style.display = "none"
    document.querySelector(".center").style.width = "100%"
    document.querySelector(".c-center-one").style.height = "0vh"
    document.querySelector(".c-center-two").style.height = "0vh"
    document.querySelector(".b-center").style.marginTop = "1vh"
    document.querySelector(".t-center").style.marginTop = "20vh"
    document.querySelector(".img-oli").style.opacity = "1"
    document.querySelector(".img-oli").style.transition = "1.5s"
    document.querySelector(".img-jordan").style.opacity = "1"
    document.querySelector(".img-jordan").style.transition = "1.5s"
    document.querySelector(".img-jona").style.opacity = "1"
    document.querySelector(".img-jona").style.transition = "1.5s"

});