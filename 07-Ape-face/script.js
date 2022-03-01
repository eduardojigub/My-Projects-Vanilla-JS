const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const earsFace = document.querySelector('.ears');
const mouthFace = document.querySelector('.mouth');


// add event listener

closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')){
        openFace.classList.add('active')
        closedFace.classList.remove('active')
    }
});

openFace.addEventListener('click', () => {
    if(earsFace.classList.contains('ears')){
        earsFace.classList.add('active')
        openFace.classList.remove('active')
    }
});

earsFace.addEventListener('click', () => {
    if(mouthFace.classList.contains('mouth')){
        mouthFace.classList.add('active')
        earsFace.classList.remove('active')
    }
});

mouthFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active')
        mouthFace.classList.remove('active')
    }
});


