function getUsersFromApi() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {
            users.forEach(user => {
                const option = document.createElement("option");
                option.className = "modal__item"
                option.value = user.username;
                option.innerText = user.username;
                selectModal.append(option)
            })
        })
}
export { getUsersFromApi }