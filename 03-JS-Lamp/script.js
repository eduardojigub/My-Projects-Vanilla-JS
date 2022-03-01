const ligar = document.querySelector('.turnON')
const desligar = document.querySelector('.turnOFF')
const lamp  = document.querySelector('.lamp')


const lampON = () => {
    lamp.src = './img/lamp-on.jpg';
}

const lampOFF = () => {
    lamp.src = './img/lamp-off.jpg';
}

const lampBroke = () => {
    lamp.src = './img/lamp-broke.jpg'
}

ligar.addEventListener('click', lampON )
desligar.addEventListener('click', lampOFF)
lamp.addEventListener('mouseover', lampON)
lamp.addEventListener('mouseleave', lampOFF)
lamp.addEventListener('dblclick', lampBroke)