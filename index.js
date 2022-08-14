let minute = document.querySelector('.minute-rotate')
let hour = document.querySelector('.hour-rotate')
let second = document.querySelector('.second-rotate')
function getTime () {
 let date = new Date()
 let currentSecond = date.getSeconds()
 let currentMinute = date.getMinutes()
 let currentHour = date.getHours()
 second.style.transform = `rotate(${0 + currentSecond * 6}deg)`
 minute.style.transform = `rotate(${0 + currentMinute*6}deg)`
 hour.style.transform = `rotate(${90 + currentHour*30}deg)`
 console.log(`rotate(${0 + currentMinute * 6}deg)`)
 setTimeout(getTime, 1000)
}
getTime()