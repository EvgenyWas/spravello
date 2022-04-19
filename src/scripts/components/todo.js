let  arrayOfTodos = [];

const todoCreation = function (todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
    this.todoId = todoId;
    this.todoTitle = todoTitle;
    this.todoDesk = todoDesk;
    this.todoUser = todoUser;
    this.todoTime = todoTime;
    this.isProgress = isProgress;
};

add_button.addEventListener("click", (event) => {
    if (input.value === " ")
        return

    const todoId = Date.now();
    const todo = new todoCreation(todoId, input.value, input.value, input.select, new Date().toString(), start);
    main.append(generateModalTask(todoId, input.value, input.value, input.select, new Date().toString(), start));
})


window.addEventListener('keydown', event => {
    if (event.keyCode === 13) addBtn.click()
})


const generateModalTask = (todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress = start) => {
    const modalWindow = createElement("div", "modal__window");
    const titleModal = createElement("input", "modal__title");
    const modalDescription = createElement("input", "modal__description");
    const modalOptions = createElement("div", "modal__options");
    const selectModal = createElement("select", "modal__list", "Select User");
    const cancelBtn = createElement("button", "modal__cancel", "Cancel");
    const confirmBtn = createElement("confirm", "modal__confirm", "Confirm");

    titleModal.placeholder = "Title";
    modalDescription.placeholder = "Description";
    titleModal.dataset.type = "modalTitle";
    modalDescription.dataset.type = "descriptionModal";
    selectModal.dataset.type = "modalSelect";
    cancelBtn.dataset.type = "btnCancel";
    confirmBtn.dataset.type = "btnConfirm";

main.addEventListener("click", (event) => {
    if(event.target === cancelBtn) {
        modalWindow.remove()
    }
})

    modalOptions.append(selectModal, cancelBtn, confirmBtn);
    modalWindow.append(titleModal, modalDescription, modalOptions);

    return modalWindow;
};

function getUsersFromApi() {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
        .then(res => res.json())
        .then(users => {
            users.forEach(user => {
                const option = document.createElement("option");
                option.className = "modal__item"
                option.value = user.username;
                option.innerText = user.username;
                timeButton.append(option)
            })
        })
}
getUsersFromApi()