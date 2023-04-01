'use strict';

document.querySelector('.clickme').addEventListener('click', function(){
    document.querySelector('.headcon').textContent = "You've logged in";
    
    document.querySelector('.container').style.backgroundColor = 'rgb(36, 133, 0)';

    document.querySelector('body').style.backgroundColor = 'black';
})
