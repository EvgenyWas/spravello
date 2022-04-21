import { createElement } from "../templates/templates";
import { generateTodo } from "../index"

let arrayOfTodos = [];
const addBtn = document.querySelector("#add-button");
const TodoCreation = function (
  todoId,
  todoTitle,
  todoDesk,
  todoSelect,
  todoTime,
  isProgress){
  this.todoId = todoId;
  this.todoTitle = todoTitle;
  this.todoDesk = todoDesk;
  this.todoSelect = todoSelect;
  this.todoTime = todoTime;
  this.isProgress = isProgress;
};

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
    modalWindow.dataset.type = "windowModal";
    titleModal.dataset.type = "modalTitle";
    modalDescription.dataset.type = "descriptionModal";
    selectModal.dataset.type = "modalSelect";
    cancelBtn.dataset.type = "btnCancel";
    confirmBtn.dataset.type = "btnConfirm";

    // trying to add non click overlay (David)
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
    overlay.classList.remove("is-show"); // add by david (remove non click overlay)
  };

  if (dataset.type === "btnConfirm") {
    const title = target.parentNode.previousSibling.previousSibling;
    const desk = target.parentNode.previousSibling;
    const todoUser = target.previousSibling.previousSibling;
    const todoId = Date.now();
    const todoBox = document.getElementById("todo-tasks");
    overlay.classList.remove("is-show"); // add by david (remove non click overlay)
    if (title.value === "" || desk.value === "") return;
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
  };

  if (dataset.type === 'todoDeleteBtn') {
    let selectedTodoDelete = arrayOfTodos.findIndex((todo) => +todo.todoId === +target.closest(".task").dataset.id);
    target.closest(".task").remove();
    arrayOfTodos.splice(selectedTodoDelete, 1);
  };

  if (dataset.type === 'todoConversionBtn') {
    console.log(target.closest(".task").dataset.todoId);
    const selectedTodo = arrayOfTodos.findIndex((todo) => +todo.todoId === +target.closest(".task").dataset.id);
    const inprogress = document.querySelector('#inprogress-tasks');
    console.log(selectedTodo);

    arrayOfTodos[selectedTodo].isProgress = "inProgress";
    console.log(arrayOfTodos);
    target.closest(".task").remove();
    const targetTodo = arrayOfTodos[selectedTodo];
    inprogress.append(generateTodo(
      targetTodo.todoId,
      targetTodo.todoTitle,
      targetTodo.todoDesk,
      targetTodo.todoUser,
      targetTodo.todoTime,
      targetTodo.isProgress));
  };
});

// Function of an event for click on delete in todo
// function removeTodo(event) {
  
// }
// todoContainer.addEventListener("click", removeTodo);

// Fucntion of an event for click on move in todo
// function moveTodo(event) {
  
// }
// todoContainer.addEventListener("click", moveTodo);

export { addBtn };
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
