const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  //random number між 0 та 3
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber] //Одне і те ж
  color.textContent = colors[randomNumber]
})
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
