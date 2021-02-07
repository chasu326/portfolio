'use strict';

{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
    const link = document.getElementById('link')

    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
      
    });

    
    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
        
      });

    link.addEventListener('click' , () => {
       overlay .classList.remove('show');
       open.classList.remove('hide');
    });
}


