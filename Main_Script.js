function clock(){
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10)
        hours = "0" + hours;
    if(mins < 10)
        mins = "0" + mins;
    if(seconds < 10)
        seconds = "0" + seconds;

    document.getElementById("Clock").innerText = hours + ":" + mins + ":" + seconds;
    setTimeout(function(){clock()}, 1000);
}
