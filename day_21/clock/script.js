let timeContainer = document.getElementById("time-container");
let dateContainer = document.getElementById("date-container");
let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

const generateTime = () =>{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let milliSec = date.getMilliseconds();

    timeContainer.innerHTML = `${hour %12 || 12}:: ${min} :: ${sec} <span id="mili-sec"> ${milliSec} </span>`

    dateContainer.innerHTML = `${date.getDate()} / ${months[date.getMonth()]} / ${date.getFullYear()}`
}
 setInterval(()=>{
    ganarateTime()
 },1)