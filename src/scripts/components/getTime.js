const time = document.querySelector("time");
time.className = "time"

let myTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString("Europe/Minsk", {
        timeZone: "Europe/Minsk",
        timeStyle: "short",
        hourCycle: "h24"
    })
}

myTime();
setInterval(myTime, 1000);