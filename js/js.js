const toggleButton = document.querySelector(".toggle-button");

const navbarLinks= document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () =>{
    navbarLinks.classList.toggle("active");
})

// slider
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
// image

nextBtn.addEventListener("click",()=>{

    slides[slideNumber].classList.remove("active");
    slideIcons[slideNumber].classList.remove("active");

    slideNumber++;
    if(slideNumber>(numberOfSlides-1)){
        slideNumber = 0;
    }
    
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

document.querySelectorAll(".slide-icon").forEach((item, index) => { // here
    item.addEventListener('click', arrow => {
        slides[slideNumber].classList.remove("active");
        slideIcons[slideNumber].classList.remove("active");

        slideNumber=index;

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    
})})

// product-add-input
const decreaseBtn = document.querySelectorAll(".decrease");
const productAddInputArea = document.querySelectorAll(".product-add-input-area");
const toAddBtn = document.querySelectorAll(".toAdd");

// add btn
for(var i = 0; i< toAddBtn.length; i++){
    var btn = toAddBtn[i];
    btn.addEventListener("click",function(e){

        var btnClicked = e.target;
        var input = btnClicked.parentElement.children[1];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue;
    })
}

// decrease btn
for(var i = 0; i< decreaseBtn.length; i++){
    var btn = decreaseBtn[i];
    btn.addEventListener("click",function(e){

        var btnClicked = e.target;
        var input = btnClicked.parentElement.children[1];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) - 1;
        if(newValue >=0){
            input.value = newValue;
        }
        else{
            newValue =0;
        }
    })
}

// console.log(decreaseBtn)
// console.log(toAddBtn)

// toAddBtn.addEventListener("click", function(){
//     i+=1;
//     productAddInputArea.innerHTML=i;
// });

const counters = document.querySelectorAll('.circle-value');
console.log(counters);
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});





