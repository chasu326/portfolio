'use strict';

{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
    const link = document.getElementById('link')

    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
      link .classList.add('show');
    });

    
    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
        link.classList.remove('hide');
      });

  
}


