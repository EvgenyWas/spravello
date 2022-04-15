function userTime() {
    (async function () {
        var data = await fetch('https://worldtimeapi.org/api/timezone/Europe/Minsk');
        const newFetch = await data.json();
        root.innerText = (newFetch.datetime.slice(11, -16))
    })()
};
userTime()
setInterval(userTime, 1000)

export { userTime }
