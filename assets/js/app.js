let menuList = document.querySelector('.menu-list');
let menuToggle = document.querySelector('.menu-toggle');
let menuItems = document.querySelectorAll('.menu-link')

menuItems.forEach( menuItem => {
    menuItem.addEventListener('click', e => {
        e.preventDefault()
        scrollOrLoadPage(e.target)
    })
})

menuToggle.addEventListener('click', e =>{
    let menuBtn = e.target;
    if(e.target.classList.contains('menu-toggle--item'))
    {
        menuBtn = e.target.parentElement;
    }
    toggleMenu(menuBtn)
})
function scrollOrLoadPage(target){
    if(window.innerWidth <= 700){
        toggleMenu(menuToggle)
    }

    let sec = document.getElementById(target.getAttribute("href").slice(1))

    if(sec != null){
        let secTop = sec.getBoundingClientRect().y 

        window.scrollBy({
            top: secTop,
            left: 0,
            behavior: "smooth",
          });
    }
}
function toggleMenu(menuBtn){
    if(menuBtn.classList.contains('close-menu--toggle')){
        hideMenu(menuBtn);
    }else{
        showMenu(menuBtn);
    }
}
function showMenu(menuBtn){
    menuList.classList.add('show-menu')
    menuBtn.classList.add('close-menu--toggle');

}
function hideMenu(menuBtn){
    menuList.classList.remove('show-menu')
    menuBtn.classList.remove('close-menu--toggle');
}