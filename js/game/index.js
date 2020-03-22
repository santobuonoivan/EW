//const fps = 10;
const configTeclado = { prevent_repeat : true };
const eventTeclado = new window.keypress.Listener(this,configTeclado);

/*
eventTeclado.simple_combo('a', pulsaA );
eventTeclado.sequence_combo('up down a b', ataqueEspecial );

//bucle principal del juego

function principal() {
    console.log('asdasd');
}*/
//setInterval(principal, 1000/fps);


let miCanvas;

function inicializar() {
    miCanvas = document.getElementById('canvas');
    miCanvas.addEventListener('mousedown',clickRaton,false);
    miCanvas.addEventListener('mouseup',sueltoRaton,false);
    miCanvas.addEventListener('mousemove',posicionRaton,false);
}

const clickRaton = (e) => console.log('Pulsado raton');
const sueltoRaton = (e) => console.log('Suelto raton');
const posicionRaton = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log('x: '+x+' - y: '+y);
};