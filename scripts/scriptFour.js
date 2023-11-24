


let i = 0

const data = [
  {
  text: "Редко пишу отзывы, но в данной ситуации удержаться не могла. Классный мастер: приехал во время, починил мой холодильник, за который никто из мастеров не хотел браться, да и за работу взял недорого. Да и искрящуюся розетку не оставил без внимания — снял крышку, поджал и подкрутил — теперь все в ажуре. Работу сделал быстро и качественно. Так что можете смело обращаться сюда— останетесь довольны.",
  stars: 5,
  person: "Евгения Виноградова",
  },
  {
    text: "Метод elem.getBoundingClientRect() возвращает координаты в контексте окна для минимального по размеру прямоугольника, который заключает в себе элемент elem, в виде объекта встроенного класса DOMRect.",
    stars: 5,
    person: "Max Pain",
  },
  {
    text: "Если вы прокрутите страницу, то расположение кнопки в окне поменяется, и, соответственно, её координаты в контексте окна тоже (при вертикальной прокрутке – y/top/bottom).",
    stars: 4,
    person: "hello world",
  },

]

const colomn_1 = document.getElementById('reviews__colomn_1')
const colomn_2 = document.getElementById('reviews__colomn_2')

const comment_1 = document.getElementById('comment_1')
const comment_2 = document.getElementById('comment_2')
const name_1 = document.getElementById('reviews__name_1')
const name_2 = document.getElementById('reviews__name_2')

// console.log(name_1)
console.log(name_1.textContent)
console.log(name_2.textContent)

function getCount() {
  if (i >= data.length - 1) {
    i = 0
  } else {
    i+=1
  }
}

function getName(i) {
  comment_1.textContent = data[i].text
  name_1.textContent = data[i].person
  if (data[i + 1]) {
    comment_2.textContent = data[i + 1].text
    name_2.textContent = data[i + 1].person
  } else {
    comment_2.textContent = data[0].text
    name_2.textContent = data[0].person
  }
}

function getOldName() {
    comment_2.textContent = ""
    comment_1.textContent = ""
    name_1.textContent = ""
    name_2.textContent = "" 
}


let flag = true
setInterval(() => {
  if (flag) {
    colomn_1.style.left = '0%'
    colomn_2.style.left = '100%'
    getOldName()

    setTimeout(() => {
      getCount()
      getName(i)
      colomn_1.style.transitionDuration = "1.8s"
      colomn_2.style.transitionDuration = "1.8s"
      colomn_1.style.left = '-100%'
      colomn_2.style.left = '0%'
      flag = false
    },20)
    
  } else {
    colomn_1.style.transitionDuration = "0s"
    colomn_2.style.transitionDuration = "0s"
    flag = true
  }
  
}, 2000)

// setInterval(() => {
//   console.log(data[i])
//   if (i >= data.length - 1) {
//     i
//       = 0
//   } else {
//     i++
//   }
// },2000)