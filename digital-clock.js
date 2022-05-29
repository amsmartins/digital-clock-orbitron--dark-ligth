setInterval( () => {
    const clock = document.querySelector('.display')
let time = new Date()
// clock.textContent = time  ~~> HORA COMPLETA COM DADOS LOCAL
let sec = time.getSeconds()
let min = time.getMinutes()
let hr = time.getHours()
// alert(hr + "hr " + min + "min " + sec + "sec ") ~~> POPUP DE HORA CERTA
let day = 'AM'

if(hr > 12){
    day = 'PM'
    hr = hr - 12
}
if(hr == 0){
    hr = 12
}
if(sec < 10){
    sec = '0' + sec
}
if(min < 10){
    min = '0' + min
}
if(hr < 10){
    hr = '0' + hr
}

clock.textContent = hr + ':' + min + ':' + sec + ' ' + day

})


function tema(){
    var claro = document.body
    claro.classList.toggle('light')
    
    }