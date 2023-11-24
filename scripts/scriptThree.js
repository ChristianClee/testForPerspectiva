const list = document.querySelectorAll(".repair-goods__item")

list.forEach(i => {

  const img = i.querySelector("img")
  const srsAdress = img
    .src
    .split("/")
    .slice(0, -1)
    .join("/")
  
  const currentImage = img
    .src
    .split("/")
    .slice(-1,)
    .join("/")
  
  const newImage =   currentImage.split(".")[0] + "-" + currentImage
  i.onmouseenter = () => {
    img.src = srsAdress + "/" + newImage
  }
  i.onmouseleave = () => {
    img.src = srsAdress + "/" + currentImage
  }
})