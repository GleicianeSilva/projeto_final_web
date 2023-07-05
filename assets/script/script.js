const carrosel = document.querySelectorAll('.carrosel');
const btnPrev = document.getElementById('prev_button');
const btnNext = document.getElementById('next_button');

let currentSlide = 0;

function hideCarrosel(){
    carrosel.forEach(item =>item.classList.remove('on'))
}

function showCarrosel(){
    carrosel[currentSlide].classList.add('on')
}

function nextCarrosel () {
    hideCarrosel()
    if(currentSlide == carrosel.length -1){
        currentSlide = 0
    } else{
        currentSlide++
    }
    showCarrosel()
}

function prevtCarrosel () {
    hideCarrosel()
    if(currentSlide == 0){
        currentSlide = carrosel.length -1
    } else{
        currentSlide--
    }
    showCarrosel()
}

btnNext.addEventListener('click', nextCarrosel)
btnPrev.addEventListener('click', prevtCarrosel)

setInterval(nextCarrosel, 5000)