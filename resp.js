burger = document.querySelector('.burger')
navbar = document.getElementById('a1')
navList = document.querySelector('.nav-list')
rightNav = document.getElementById('a3')

burger.addEventListener("click", ()=>{
    console.log(rightNav)
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
    
})
