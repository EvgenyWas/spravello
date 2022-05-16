function myTime() {
  document.querySelector("#time").innerHTML = new Date().toLocaleString("ru", {
    timeZone: "Europe/Minsk",
    timeStyle: "short",
    hourCycle: "h23",
  });
};

export { myTime };