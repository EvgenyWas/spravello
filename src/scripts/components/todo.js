import { changeCount } from "./changeCount";
import { generateModalTask, generateTodo, generateWarning } from "./functionsForDom";
import { dateToLocaleString } from "../templates/tools";
import { getUsersFromApi } from "../services/getUsersFromApi"


let arrayOfTodos = [];
let editCounter = 0;
let selectedTodo;
const TodoCreation = function (
  todoId,
  todoTitle,
  todoDesk,
  todoUser,
  todoTime,
  isProgress
) {
  this.todoId = todoId;
  this.todoTitle = todoTitle;
  this.todoDesk = todoDesk;
  this.todoUser = todoUser;
  this.todoTime = todoTime;
  this.isProgress = isProgress;
};

main.addEventListener("click", (event) => {
  const { target } = event;
  const { dataset } = target;
  if (target === event.curentTarget) return;

  if (dataset.type === "btnCancel") {
    target.parentNode.parentNode.remove();
    overlay.classList.remove("is-show");
    editCounter = 0;
  }

  if (dataset.type === "btnConfirm") {
    const title = target.parentNode.previousSibling.previousSibling;
    const desk = target.parentNode.previousSibling;
    const todoUser = target.previousSibling.previousSibling;
    const todoId = Date.now();
    const todoBox = document.getElementById("todo-tasks");
    if (title.value === "" || desk.value === "") return;

    overlay.classList.remove("is-show");

    if (editCounter) {
      editCounter = 0;
      const titleId = document.querySelector("[data-type = 'modalTitle']");
      const descId = document.querySelector("[data-type = 'descriptionModal']");
      const selectId = document.querySelector("[data-type = 'modalSelect']");
      const taskTitle = document.getElementById("todoTitle");
      const taskDesk = document.getElementById("todoDesc");
      const taskUser = document.getElementById("todoUser");

      arrayOfTodos[selectedTodo].todoTitle = titleId.value;
      arrayOfTodos[selectedTodo].todoDesk = descId.value;
      arrayOfTodos[selectedTodo].todoUser = selectId.value;
      taskTitle.innerText = titleId.value;
      taskDesk.innerText = descId.value;
      taskUser.innerText = selectId.value;

      target.parentNode.parentNode.remove();
      return;
    };

    target.parentNode.parentNode.remove();

    const todo = new TodoCreation(
      todoId,
      title.value,
      desk.value,
      todoUser.value,
      dateToLocaleString(),
      "start"
    );

    todoBox.append(
      generateTodo(
        todoId,
        title.value,
        desk.value,
        todoUser.value,
        dateToLocaleString(),
        "start"
      )
    );

    arrayOfTodos.push(todo);
    title.value = "";
    desk.value = "";

    changeCount();
  }

  if (dataset.type === "todoDeleteBtn") {
    let selectedTodoDelete = arrayOfTodos.findIndex(
      (todo) => +todo.todoId === +target.closest(".task").dataset.id
    );
    target.closest(".task").remove();
    arrayOfTodos.splice(selectedTodoDelete, 1);

    changeCount();
  }

  if (dataset.type === "todoConversionBtn") {
    const selectedTodo = arrayOfTodos.findIndex(
      (todo) => +todo.todoId === +target.closest(".task").dataset.id
    );
    const inprogress = document.querySelector("#inprogress-tasks");

    arrayOfTodos[selectedTodo].isProgress = "inProgress";
    target.closest(".task").remove();
    const targetTodo = arrayOfTodos[selectedTodo];
    inprogress.append(
      generateTodo(
        targetTodo.todoId,
        targetTodo.todoTitle,
        targetTodo.todoDesk,
        targetTodo.todoUser,
        targetTodo.todoTime,
        targetTodo.isProgress
      )
    );
  }

  if (dataset.type === "todoEditBtn") {
    editCounter = 1;
    selectedTodo = arrayOfTodos.findIndex(
      (todo) => +todo.todoId === +target.closest(".task").dataset.id
    );
    main.append(generateModalTask(arrayOfTodos[selectedTodo].todoTitle, arrayOfTodos[selectedTodo].todoDesk)) 
    getUsersFromApi();
  };

  changeCount();
});

document.addEventListener("keydown", (event) => {
  const enterButton = document.getElementById("confirmBtnId");
  if (!enterButton) return;
  if (event.key == "Enter") {
    enterButton.click();
  }
});

document.addEventListener("keydown", (event) => {
  const escapeButton = document.getElementById("cancelBtnId");
  if (!escapeButton) return;
  if (event.key == "Escape") {
    escapeButton.click();
  }
});

const addBtn = document.querySelector("#add-button");

addBtn.addEventListener("click", () => {
  main.append(generateModalTask());
  getUsersFromApi();
});

export { arrayOfTodos };