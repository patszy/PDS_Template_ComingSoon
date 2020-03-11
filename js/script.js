function showTime(d = "00", h = "00", m = "00", s = "00"){
    document.getElementsByClassName("time__days")[0].innerHTML = d;
    document.getElementsByClassName("time__hours")[0].innerHTML = h;
    document.getElementsByClassName("time__minutes")[0].innerHTML = m;
    document.getElementsByClassName("time__seconds")[0].innerHTML = s;
}

function counter(){
    let today = new Date();
    let future = new Date(today.getFullYear()+1, 0, 1, 00, 00, 00);
    let count = future.getTime() - today.getTime();

    let days = Math.floor(count / (1000 * 60 * 60 *24));
    let hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((count % (1000 * 60)) / 1000);

    if(days < 10) days = "0" + days;
    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    showTime(days, hours, minutes, seconds);
}

window.onload = function() {
    counter();

    let int = setInterval(function() {
        counter();
    }, 1000);
}