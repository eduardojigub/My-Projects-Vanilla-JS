const img = document.getElementById('img');

function turnRed() {
    return img.src = './img/vermelho.png';
} 
function turnYellow() {
    return img.src = './img/amarelo.png';
} 
function turnGreen() {
    return img.src = './img/verde.png';
} 

const changeTrafficLight = ( e ) => {
    if (e.target.id == 'red') {
     turnRed()
    } else {
     if (e.target.id == 'yellow') {
         turnYellow()
     } else {
         if (e.target.id == 'green'){
             turnGreen()
             }
         }         
         }
     }

const buttons = document.getElementById( 'buttons' ).addEventListener("click", changeTrafficLight)