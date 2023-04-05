const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const countdown =  document.getElementById('countdown')
const year = document.getElementById('year')
const loading =  document.getElementById('loading')

const currentYear = new Date().getFullYear();

const newYearTime =  new Date(`January 01 ${currentYear + 1} 00:00:00`)

year.innerText = currentYear + 1

//update countdown
function updateCountdown () {
    const currentTime = new Date()

    const different = newYearTime - currentTime;
    // get sec : different / 1000 / 60
    // get min : different / 1000 / 60 /60
    // get hours : (different / 1000 / 60 / 60 ) % 24
    // get days : different / 1000 / 60 / 60 / 24 

    const d = Math.floor(different / 1000 / 60 / 60 / 24 ) 
    const h = Math.floor(different / 1000 / 60 / 60) % 24 
    const m = Math.floor(different / 1000 / 60) % 60
    const s = Math.floor(different / 1000) % 60

    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s

}

//show spinner
setTimeout(() => {
    loading.remove()
    countdown.style.display = "flex"
},1000)

setInterval(updateCountdown, 1000);

