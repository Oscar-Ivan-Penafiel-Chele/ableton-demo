const button_display = document.getElementById('button_more');
const detail_nav = document.getElementById('detail_nav');
const icon_nav = document.getElementById('icon_nav');

button_display.addEventListener('click',() =>{
    let classListNav = icon_nav.classList.value; 
    detail_nav.classList.toggle('hidden');
    
    classListNav.includes('bx-plus') ? 
    icon_nav.classList.replace('bx-plus','bx-minus') :
    icon_nav.classList.replace('bx-minus','bx-plus');
})