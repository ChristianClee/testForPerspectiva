class PositionPopUp{
  constructor(one, two, three, four) {
    this.one = document.getElementById(one)
    this.two = document.getElementById(two)
    this.three = document.getElementById(three)
    this.four = document.getElementById(four)

    this.one.onmouseenter = () => this.getSizeBottomPopUp(this.one)
    this.two.onmouseenter = () => this.getSizeBottomPopUp(this.two)
    this.three.onmouseenter = () => this.getSizeBottomPopUp(this.three)
    this.four.onmouseenter = () => this.getSizeBottomPopUp(this.four)



    this.getSizeWidth(this.one)
    this.getSizeWidth(this.two)
    this.getSizeWidth(this.three)
    this.getSizeWidth(this.four)
  }
  
  getSizeBottomPopUp(elem) {
    setTimeout(() => {
      const popUp = elem.querySelector(".pop-up")
      const heightSize = popUp.getBoundingClientRect().height
      console.log(heightSize)
      popUp.style.bottom = `${heightSize * -1}px`
    },30)
  }

  getSizeWidth(elem) {
    const elemsA = elem.querySelectorAll(".pop-up a")
    const widthSize = elem.getBoundingClientRect().width
    elemsA.forEach(i => {
      if (widthSize < 250) { i.style.width = `250px` }
      else {i.style.width = `${widthSize}px`}
      }
      )
  }
  


}

const li = new PositionPopUp("nav-li-one", "nav-li-two", "nav-li-three", "nav-li-four")