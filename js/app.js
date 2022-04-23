setInterval(setReloj,1000)
const punteroHora=document.querySelector('[info-puntero-hora]')
const punteroMinuto=document.querySelector('[info-puntero-minuto]')
const punteroSegundo=document.querySelector('[info-puntero-segundo]')

function setReloj() {
    const fechaActual=new Date()
    const ratioSegundos=fechaActual.getSeconds() / 60
    const ratioMinutos=(ratioSegundos + fechaActual.getMinutes()) / 60
    const ratioHoras=(ratioMinutos + fechaActual.getHours()) / 12
    setRotacion(punteroSegundo,ratioSegundos)
    setRotacion(punteroMinuto,ratioMinutos)
    setRotacion(punteroHora,ratioHoras)
}

function setRotacion(element,radioRotacion){
    element.style.setProperty('--rotacion',radioRotacion*360)
}

setReloj()