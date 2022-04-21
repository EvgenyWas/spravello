import { title } from "process";
import { generateTodo } from "../index"
import { getUsersFromApi  } from "../services/getUsersFromApi"

let  arrayOfTodos = [];

const todoCreation = function (todoId, todoTitle, todoDesk, todoSelect, todoTime, isProgress) {
    this.todoId = todoId;
    this.todoTitle = todoTitle;
    this.todoDesk = todoDesk;
    this.todoSelect = todoSelect;
    this.todoTime = todoTime;
    this.isProgress = isProgress;
};

const addBtn = document.querySelector("#add-button");
export { addBtn }


window.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Enter") {
        addBtn.click();
    }
}); // ток для модалки

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Escape") {
        // modalWindow.close();
        // modalWindow.remove;
        console.log(123);
    }
});


const generateModalTask = () => {
    const modalWindow = createElement("div", "modal__window");
    const titleModal = createElement("input", "modal__title");
    const modalDescription = createElement("input", "modal__description");
    const modalOptions = createElement("div", "modal__options");
    const selectModal = createElement("select", "modal__list", "Select User");
    const cancelBtn = createElement("button", "modal__cancel", "Cancel");
    const confirmBtn = createElement("button", "modal__confirm", "Confirm");
    const optionModal = createElement("option", "option_menu", "Option");

    getUsersFromApi()

    modalWindow.dataset.type = "windowModal"
    titleModal.placeholder = "Title";
    modalDescription.placeholder = "Description";
    titleModal.dataset.type = "modalTitle";
    modalDescription.dataset.type = "descriptionModal";
    selectModal.dataset.type = "modalSelect";
    cancelBtn.dataset.type = "btnCancel";
    confirmBtn.dataset.type = "btnConfirm";
    optionModal.dataset.type = "modalOption";

    modalOptions.append(selectModal, cancelBtn, confirmBtn);
    modalWindow.append(titleModal, modalDescription, modalOptions);
    selectModal.append(optionModal);

    return modalWindow;
};

export { generateModalTask }

main.addEventListener("click", (event) => {
    const { target } = event;
    const { dataset } = target;
    
    if (target === event.curentTarget) return;
    if(event.target.dataset.type === "btnConfirm") {
        const title = event.target.parentNode.previousSibling.previousSibling
        const desk = event.target.parentNode.previousSibling
        const modalSelect = event.target.parentNode.previousSibling  

    const todoId = Date.now();
    const todoBox = document.getElementById("todo-box");
    const todo = new todoCreation(todoId, title.value, desk.value, modalSelect.option, new Date().toLocaleString("ru").slice(0, -3), "start");
    todoBox.append(generateTodo(todoId, title.value, desk.value, modalSelect.option, new Date().toLocaleString("ru").slice(0, -3), "start"));
    arrayOfTodos.push(todo);
    title.value = " ";
    desk.value = " ";
    }
    })

    main.addEventListener("click", (event) => {
        const { target } = event;
        const { dataset } = target;
        
        if (target === event.curentTarget) return;
        if(event.target.dataset.type === "btnCancel") {
            target.parentNode.parentNode.remove();
        }
        })

        main.addEventListener("click", (event) => {
            const { target } = event;
            const { dataset } = target;
            
            if (target === event.curentTarget) return;
            if(event.target.dataset.type === "optionModal") {
                getUsersFromApi()
            }
        })

        const search = document.getElementById("seacrh-button");
        search.addEventListener("click", (event) => {
            event.preventDefault();
        })