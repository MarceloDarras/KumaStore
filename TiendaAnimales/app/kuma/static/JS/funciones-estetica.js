//Función reloj

const $tiempo=document.querySelector('.tiempo');

function relojDigital(){
    let f= new Date();
    let timeString= f.toLocaleTimeString();
    $tiempo.innerHTML=timeString;
}
setInterval(() => {
    relojDigital()
}, 1000);

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

})