let lastscroll = 0;
const navbar = document.getElementById('header');
window.addEventListener('scroll',()=>{
    const currentscroll = window.scrollY
    if(currentscroll>lastscroll){
        navbar.classList.add('hidden')
    }
    else{
        navbar.classList.remove('hidden')
    }
    lastscroll = currentscroll
})
let width = window.innerWidth
const navbutton = document.getElementById('nav-button')
const navlist = document.getElementById('navlist')
navlist.addEventListener('click',()=>{
    if(width<=700)
    navlist.classList.toggle('showmenu')
})
navbutton.addEventListener('click',()=>{
    if(width<=700)
    navlist.classList.toggle('showmenu')
})