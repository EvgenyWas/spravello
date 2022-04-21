import { createElement } from "../templates/templates";
import { generateTodo } from "../index"

let arrayOfTodos = [];

const todoCreation = function (
  todoId,
  todoTitle,
  todoDesk,
  todoSelect,
  todoTime,
  isProgress
) {
  this.todoId = todoId;
  this.todoTitle = todoTitle;
  this.todoDesk = todoDesk;
  this.todoSelect = todoSelect;
  this.todoTime = todoTime;
  this.isProgress = isProgress;
};

const addBtn = document.querySelector("#add-button");
export { addBtn };

const generateModalTask = () => {
    const modalWindow = createElement("div", "modal__window");
    const titleModal = createElement("input", "modal__title");
    const modalDescription = createElement("input", "modal__description");
    const modalOptions = createElement("div", "modal__options");
    const selectModal = createElement("select", "modal__list", "Select User");
    const cancelBtn = createElement("button", "modal__cancel", "Сancel");
    const confirmBtn = createElement("button", "modal__confirm", "Confirm");
  
    titleModal.placeholder = "Title";
    modalDescription.placeholder = "Description";
    modalWindow.dataset.type = "windowModal"
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
  const { target } = event;
  const { dataset } = target;

  if (target === event.curentTarget) return;
  if (event.target.dataset.type === "btnConfirm") {
    target.parentNode.parentNode.remove();
    const title = event.target.parentNode.previousSibling.previousSibling;
    const desk = event.target.parentNode.previousSibling;
    const todoUser = event.target.previousSibling.previousSibling;
    if(title.value === "" || desk.value === "") {
        return
    }

    const todoId = Date.now();
    const todoBox = document.getElementById("todo-box");
    const todo = new todoCreation(
      todoId,
      title.value,
      desk.value,
      todoUser.value,
      new Date().toLocaleString("ru").slice(0, -3),
      "start"
    );
    todoBox.append(
      generateTodo(
        todoId,
        title.value,
        desk.value,
        todoUser.value,
        new Date().toLocaleString("ru").slice(0, -3),
        "start"
      )
    );
    arrayOfTodos.push(todo);
    title.value = "";
    desk.value = "";
  }
});

main.addEventListener("click", (event) => {
  const { target } = event;
  const { dataset } = target;

  if (target === event.curentTarget) return;
  if (dataset.type === "btnCancel") {
    target.parentNode.parentNode.remove();
  }
});

export { generateModalTask };

// const search = document.getElementById("seacrh-button");
// search.addEventListener("click", (event) => {
//   event.preventDefault();
// }); заглушка на серч

window.addEventListener("keydown", function (event) {
    const { target } = event;
    const { dataset } = target;
    const key = event.key;
    if (dataset.type === "btnConfirm") 
    if (key === "Enter") {
        console.log(123);
}
  }); // ток для модалки
  
//   document.addEventListener("keydown", function (event) {
//     const { target } = event;
//     const { dataset } = target;
    
//   if (target === event.curentTarget) return;
//    if (event.target.dataset.type === "windowModal") {
//         // windowModal.remove;
//       console.log(123);
//     }
//   });
