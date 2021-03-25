setInterval(setclock,1000)

const second =document.querySelector('#seconds')
const minute =document.querySelector('#minutes')
const hours = document.querySelector('#hours')
const base = document.querySelector('.clockcontainer')

function setclock (){
const currentDate = new Date();
const secondsRatio = currentDate.getSeconds()/60
const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
const hoursRatio = (minutesRatio +currentDate.getHours())/12;
// console.log(today);
// console.log(secondsratio);
// console.log(minutesratio);
// console.log(hoursratio);
base.style.width = '375px'
base.style.height = '375px'
base.style.backgroundColor= 'white'
base.style.borderRadius = '50%'

setRotation(minute, minutesRatio)
setRotation(second, secondsRatio)
setRotation(hours, hoursRatio)
// console.log(currentDate);
}

function setRotation (element, rotationRatio ){
    element.style.setProperty('--rotation', rotationRatio*360)
 
}

setclock()
console.log(minute);
console.log(second);
console.log(hours);

