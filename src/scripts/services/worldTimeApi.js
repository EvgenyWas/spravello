function myTime() {
  document.getElementById("time").innerHTML = new Date().toLocaleString("ru", {
    timeZone: "Europe/Minsk",
    timeStyle: "short",
    hourCycle: "h24",
  });
};

export { myTime };
