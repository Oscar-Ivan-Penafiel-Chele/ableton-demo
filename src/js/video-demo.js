try {
    const overlay = document.getElementById('overlay__video');
    const iframe = document.getElementById('video');
    const overlay_charging = document.getElementById('overlay__charging');

    overlay.addEventListener('click', () => {
        overlay.style.display = "none";
        overlay_charging.classList.replace('hidden','block');
        iframe.setAttribute('src', iframe.getAttribute('src') + "?autoplay=1")
        displayOverlayCharging(iframe, overlay_charging);
    });  
} catch (error) {}


function displayOverlayCharging(iframe, overlay_charging){
    iframe.addEventListener('load', () =>{
        overlay_charging.classList.replace('block','hidden');
    });
}