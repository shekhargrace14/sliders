// https://randomapi.com/
// JYAQ-SBR6-IYDK-D5WT

// let api = "JYAQ-SBR6-IYDK-D5WT";
// let url = "https://dummyjson.com/users"

fetch("https://dummyjson.com/users")
// fetch("${url}")
.then(response => response.json())
.then((data) => {
    // console.log(data.users[2].lastName)
    // console.log(data.users)
    
    let carousel = document.querySelector(".carousel")
    data.users.map((value, index)=>{
        // console.log(value.address)
        carousel.insertAdjacentHTML("beforeend",`
        <div class="column card">
            <div class="img" >
                <img src=${value.image} alt="img" draggable="false">
            </div>
            <div class="info">
                <p>${value.lastName}</p>
                <p>${value.university}</p>
            </div>
        </div>
        `)
    })
    // let hideFirstElement = carousel.firstElementChild
    // let img = carousel.firstElementChild.firstElementChild
    // hideFirstElement.style.background = "red"
    // hideFirstElement.style.visibility = "hidden";

    // console.log(img, "hello") 
})


const carousel = document.querySelector(".carousel");

let isDragging = false, startX, startScrollLeft;
const dragStart = (e)=>{
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
}
const dragging = (e) =>{
    if(!isDragging)return // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    // console.log(e.pageX , "mousemove");
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);