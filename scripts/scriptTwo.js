const nav = document.getElementById("nav-goods")
const yCoordinate = nav.getBoundingClientRect().y 


window.addEventListener("scroll", (e) => {

  const scrollWindow = window.scrollY

  // if (scrollWindow > yCoordinate ) {
  if (scrollWindow > 145 ) {
    nav.style.position = "fixed"
    nav.style.top = "0px"
  } else {
    nav.style.position = "relative"
  }
})