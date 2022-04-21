function getUsersFromApi() {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
        .then(res => res.json())
        .then(users => {
            users.forEach(user => {
                const option = document.createElement("option");
                // const box = document.getElementById("todo-box")
                option.className = "modal__item"
                option.value = user.username;
                option.innerText = user.username;
                // box.append(option)
                console.log(option);
            })
        })
}
export { getUsersFromApi }


// main.addEventListener("click", (event) => {
//     const { target } = event;
//     const { dataset } = target;
    
//     if (target === event.curentTarget) return;
//     if(event.target.dataset.type === "optionModal") {
//         const getUsersFromApi = () => {
//             return new Promise((response) => {
//                 fetch("https://jsonplaceholder.typicode.com/users")
//                     .then(response => response.json())
//                     .then(users => response(users))
//             })
//         }
//         getUsersFromApi().then(users => {
//             users.forEach(user => {
//                 main.append(user.name)
//             })
//         })

//     }
// })