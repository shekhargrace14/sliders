const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')


// const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth)

// arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition=(slide, index)=>{
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

// when I click left, move slides to the left
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;

    track.style.transform = 'translateX(-'+amountToMove+')'
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide')

})
// when I click right, move slides to the right
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    // move to the next slide
    track.style.transform = 'translateX(-'+amountToMove+')';
    currentSlide.classList.remove('current-slide')
    nextSlide.classList.add('current-slide')


})
