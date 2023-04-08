'use script';
// const openCanvas = document.querySelector('.canvasOpen');
const openCanvas = document.querySelectorAll('.canvasOpen');
const closeCanvas = document.querySelector('.canvasClose');
const offCanvas = document.querySelector('.offcanvas');
const overlay = document.querySelector('.overlay');

for(let i = 0; i < openCanvas.length; i++){
    openCanvas[i].addEventListener('click', function(){
        offCanvas.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

// //open canvas event
// openCanvas.addEventListener('click', function(){
//     offCanvas.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// });

//close canvas function
const collapseCanvas = function(){
    offCanvas.classList.add('hidden');
    overlay.classList.add('hidden');
}

//close canvas events
closeCanvas.addEventListener('click', collapseCanvas);
overlay.addEventListener('click', collapseCanvas);

//close canvas escape key
document.addEventListener('keydown', function(event){
    if(event.key == 'Escape'){
        if(!offCanvas.classList.contains('hidden')){
            collapseCanvas();
        }
    }
});

