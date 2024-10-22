burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')


burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-res');
    navList.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');
})
// let currentState = 0;
// let slides = document.querySelectorAll(".slide");
// let prevBtn=document.querySelector(".prev");
// let nextBtn=document.querySelector(".next");

// nextBtn.addEventListener("click",function(){
//     let nextSlide=(currentState+1)%slides.length;
//     slides[currentState].style.display="none";
//     slides[nextSlide].style.display = "block";
//     currentState=nextSlide;
// })
// prevBtn.addEventListener("click",function(){
//     let prevSlide=currentState==0?slides.length-1:currentState-1
//     slides[currentState].style.display="none";
//     slides[prevSlide].style.display="block";
//     currentState=prevSlide;
// })