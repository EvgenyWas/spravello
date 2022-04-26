function getUsersFromApi(node) {
  return new Promise((response) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => response(users));
  }).then((users) => pushUsersToSelect(users, node));
}

function pushUsersToSelect(users, node) {
  users.forEach((user) => {
    const option = document.createElement("option");
    option.className = "user";
    option.innerText = user.username;
    node.append(option);
  });
}

export { getUsersFromApi };