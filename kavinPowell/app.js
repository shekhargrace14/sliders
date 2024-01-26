const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

// # find the width of slide 
// const slideSize = slides[0].getBoundingClientRect();
// const slideWidth = slideSize.width
// console.log(slideWidth);

const slideWidth = slides[0].getBoundingClientRect().width;


// # arrange the slides next to one another 
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides[3].style.left = slideWidth * 3 + 'px';
// slides[4].style.left = slideWidth * 4 + 'px';

// # making a loop to arrange the slides next to one another 

// slides.forEach((slide, index)=>{
//     slide.style.left = slideWidth * index + 'px';
// });

// # putting the loop in the function to arrange the slides next to one another 
const setSlidePosition = (slide, index)=>{
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition)


// a common function for nextButton and prevButton

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot)=>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// when i click left, move slides to the left
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);

    updateDots(currentDot, prevDot)

})

// when i click right, move slides to the right
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    // const amountToMove = nextSlide.style.left; // we are using this value directly in common function in track.style.transform property. 
    // move the slide
    // put these lines in a common funtion creadted above  
    // track.style.transform = 'translateX(-'+ amountToMove +')';
    // currentSlide.classList.remove('current-slide');
    // nextSlide.classList.add('current-slide');
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot)

})
// when i click the nav indicators, ,move to that slide

dotsNav.addEventListener('click', e =>{
    const targetDot = e.target.closest('button');

    if(!targetDot) return;
    
    const currentSlide = track.querySelector('current-slide');
    const currentDot = dotsNav.querySelector('current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot, targetDot)

    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if(targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
        
    }else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
})
