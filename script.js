const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const progress = document.querySelector('#progress')
const circles = document.querySelectorAll('.circle')
let currentActive = 0

next.addEventListener('click', () => {
  prev.disabled = false
  if (currentActive < 3) {
    currentActive++
    circles[currentActive].classList.add('active')
    progress.style.width = (currentActive * 100) / (circles.length - 1) + '%'
    checkButtons()
  }
})

prev.addEventListener('click', () => {
  next.disabled = false
  if (currentActive > 0) {
    circles[currentActive].classList.remove('active')
    currentActive--
    progress.style.width = (currentActive * 100) / (circles.length - 1) + '%'
    checkButtons()
  }
})

function checkButtons(){
if (currentActive === circles.length - 1) {
      next.disabled = true
    }
else if (currentActive === 0) {
    prev.disabled = true
}
else {
    next.disabled = false
    prev.disabled = false
}
}