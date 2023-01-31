//Nav Normal
const button_display = document.getElementById('button_more');
const detail_nav = document.getElementById('detail_nav');
const icon_nav = document.getElementById('icon_nav');
const menu_nav = document.getElementById('menu_nav');
const icon_display = document.getElementById('icon_display');
const links_nav = document.getElementById('links_nav');
const svg_icon = document.getElementById('svg_icon');

button_display.addEventListener('click',() =>{
    detail_nav.classList.toggle('lg:hidden');
    changeClassList(icon_nav, 'bx-plus', 'bx-minus')
})

//Nav Mobile
menu_nav.addEventListener('click',() =>{
    svg_icon.children[0].children[0].classList.toggle('fill-white');
    menu_nav.classList.toggle('text-white');
    changeClassList(icon_display, 'bxs-down-arrow', 'bxs-up-arrow')
    changeClassList(detail_nav, '-top-[200vh]', 'top-[28.7rem]');
    changeClassList(links_nav, '-translate-y-full', '-translate-y-0')
});

function changeClassList(element, currenteValue, newValue){
    element.style.transitionDuration = '300ms ease-in-out'
    element.classList.value.includes(currenteValue) ? 
    element.classList.replace(currenteValue,newValue) :
    element.classList.replace(newValue,currenteValue)
}