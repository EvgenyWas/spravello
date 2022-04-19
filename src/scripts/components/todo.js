import { generateTodo } from "../index.js"

let  arrayOfTodos = [];

const todoCreation = function (todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
    this.todoId = todoId;
    this.todoTitle = todoTitle;
    this.todoDesk = todoDesk;
    this.todoUser = todoUser;
    this.todoTime = todoTime;
    this.isProgress = isProgress;
};

const addBtn = document.querySelector("#add-button");

addBtn.addEventListener("click", (event) => {
    if (titleModal.value === " ")
        if (modalDescription.value === " ")
        return

    const todoId = Date.now();
    const todo = new todoCreation(todoId, titleModal.value, modalDescription.value, selectModal.select, new Date().toString(), "start");
    main.append(generateTodo(todoId, titleModal.value, modalDescription.value, selectModal.select, new Date().toString(), "start"));
    todo.push(arrayOfTodos);
})

const confirmBtn = document.querySelector("btnConfirm");

confirmBtn.addEventListener("click", event => {
    if(event.target === confirmBtn) {
        addBtn()
    }
})


window.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Enter") {
        addBtn.click();
    }
})

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Escape") {
        modalWindow.close();
        modalWindow.remove;
    }
});

const generateTodo = () => {
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

    modalOptions.append(selectModal, cancelBtn, confirmBtn);
    modalWindow.append(titleModal, modalDescription, modalOptions);

    return modalWindow;
};

main.addEventListener("click", (event) => {
    if(event.target.dataset.type === "btnCancel") {
        modalWindow.remove()
    }
});

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