import { createElement } from "../templates/templates";
import { generateTodo } from "../index";
import { changeCount } from "./changeCount";

let arrayOfTodos = [];
const addBtn = document.querySelector("#add-button");
const TodoCreation = function (todoId, todoTitle, todoDesk, todoUser, todoTime,isProgress){
  this.todoId = todoId;
  this.todoTitle = todoTitle;
  this.todoDesk = todoDesk;
  this.todoUser = todoUser;
  this.todoTime = todoTime;
  this.isProgress = isProgress;
};

const generateModalTask = () => {
  const modalWindow = createElement("div", "modal__window");
  const titleModal = createElement("textarea", "modal__title");
  const modalDescription = createElement("textarea", "modal__description");
  const modalOptions = createElement("div", "modal__options");
  const selectModal = createElement("select", "modal__list", "Select User");
  const cancelBtn = createElement("button", "modal__cancel", "Сancel");
  const confirmBtn = createElement("button", "modal__confirm", "Confirm");

  titleModal.placeholder = "Title";
  modalDescription.placeholder = "Description";
  modalWindow.dataset.type = "windowModal";
  titleModal.dataset.type = "modalTitle";
  modalDescription.dataset.type = "descriptionModal";
  selectModal.dataset.type = "modalSelect";
  cancelBtn.dataset.type = "btnCancel";
  confirmBtn.dataset.type = "btnConfirm";
  confirmBtn.id = "confirmBtnId"
  cancelBtn.id = "cancelBtnId"

  const overlay = document.getElementById("overlay");
  overlay.classList.add("is-show");

  modalOptions.append(selectModal, cancelBtn, confirmBtn);
  modalWindow.append(titleModal, modalDescription, modalOptions);
    
  return modalWindow;
};

main.addEventListener("click", (event) => {
  const { target } = event;
  const { dataset } = target;
  if (target === event.curentTarget) return;

  if (dataset.type === "btnCancel") {
    target.parentNode.parentNode.remove(); 
    overlay.classList.remove("is-show");
  };

  if (dataset.type === "btnConfirm") {
    const title = target.parentNode.previousSibling.previousSibling;
    const desk = target.parentNode.previousSibling;
    const todoUser = target.previousSibling.previousSibling;
    const todoId = Date.now();
    const todoBox = document.getElementById("todo-tasks");
    if (title.value === "" || desk.value === "") return;
    overlay.classList.remove("is-show");
    target.parentNode.parentNode.remove();

    const todo = new TodoCreation(
      todoId,
      title.value,
      desk.value,
      todoUser.value,
      new Date().toLocaleString("ru").slice(0, -3),
      "start"
    );

    todoBox.append(generateTodo(
      todoId,
      title.value,
      desk.value,
      todoUser.value,
      new Date().toLocaleString("ru").slice(0, -3),
      "start"));
    
    arrayOfTodos.push(todo);
    title.value = "";
    desk.value = "";

    changeCount();
  };

  if (dataset.type === 'todoDeleteBtn') {
    let selectedTodoDelete = arrayOfTodos.findIndex((todo) => +todo.todoId === +target.closest(".task").dataset.id);
    target.closest(".task").remove();
    arrayOfTodos.splice(selectedTodoDelete, 1);

    changeCount();
  };

  if (dataset.type === 'todoConversionBtn') {
    const selectedTodo = arrayOfTodos.findIndex((todo) => +todo.todoId === +target.closest(".task").dataset.id);
    const inprogress = document.querySelector('#inprogress-tasks');

    arrayOfTodos[selectedTodo].isProgress = "inProgress";
    target.closest(".task").remove();
    const targetTodo = arrayOfTodos[selectedTodo];
    inprogress.append(generateTodo(
      targetTodo.todoId,
      targetTodo.todoTitle,
      targetTodo.todoDesk,
      targetTodo.todoUser,
      targetTodo.todoTime,
      targetTodo.isProgress)) ;
  };

  changeCount();
});

export { addBtn, arrayOfTodos };
export { generateModalTask };

// const search = document.getElementById("seacrh-button");
// search.addEventListener("click", (event) => {
//   event.preventDefault();
// }); заглушка на серч

document.addEventListener("keydown", (event) => {
  const enterButton = document.getElementById("confirmBtnId");
  if (!enterButton) return
  if (event.key == "Enter") {
    enterButton.click()
  }
})

document.addEventListener("keydown", (event) => {
  const escapeButton = document.getElementById("cancelBtnId");
  if (!escapeButton) return
  if (event.key == "Escape") {
    escapeButton.click()
  }
})