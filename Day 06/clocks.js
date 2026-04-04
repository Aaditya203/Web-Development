function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    return `${hours}:${minutes}:${seconds}`;
}

setInterval(()=>{
    let now = new Date();
    console.log(formatTime(now));
},1000)