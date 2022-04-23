function getUsersFromApi() {
  return new Promise((response) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => response(users));
  }).then((users) => pushUsersToSelect(users));
}

function pushUsersToSelect(users) {
  users.forEach((user) => {
    const userOpt = document.querySelector(".modal__list");
    const option = document.createElement("option");
    option.className = "modal__item";
    option.innerText = user.username;
    userOpt.append(option);
  });
}

export { getUsersFromApi };