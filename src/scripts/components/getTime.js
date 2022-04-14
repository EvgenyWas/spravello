function date() {
    let time = new Date();
    let newTime = time.toLocaleString("ru").slice(0, -3);

    return newTime;
}
date()
