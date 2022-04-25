import { changeCount } from "./changeCount";
import { generateModalTask, generateTodo, generateWarning } from "./functionsForDom";
import { dateToLocaleString } from "../templates/tools";
import { getUsersFromApi } from "../services/getUsersFromApi"


let arrayOfTodos = [];
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

let editCounter = 0;
let selectedTodo;

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
      const titleId = document.getElementById("titleModalId");
      const descId = document.getElementById("modalDescriptionId");
      const selectId = document.getElementById("selectModalId");

      arrayOfTodos[selectedTodo].todoTitle = titleId.value;
      arrayOfTodos[selectedTodo].todoDesk = descId.value;
      arrayOfTodos[selectedTodo].todoUser = selectId.value;

      const taskTitle = event.target.parentNode.nextSibling;
      const taskDesk = event.target.parentNode.nextSibling.nextSibling;
      const taskUser = event.target.parentNode.nextSibling.nextSibling.nextSibling.firstElementChild;

      taskTitle.innerHTML = titleId.value;
      taskDesk.innerHTML = descId.value;
      taskUser.innerHTML = selectId.value;

      target.parentNode.parentNode.remove();
      
      return
    }
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

    // "[data-type = 'todoEditBtn']"
  }

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

export { arrayOfTodos };