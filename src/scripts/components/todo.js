import { changeCount } from "./changeCount";
import {
  generateModalTask,
  generateTodo,
  generateWarning,
} from "./functionsForDom";
import { dateToLocaleString } from "../templates/tools";
import { LOCAL_STORAGE_API } from "../services/localStorageApi";

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

main.addEventListener("click", (event) => {
  const { target } = event;
  const { dataset } = target;
  if (target === event.currentTarget) return;

  if (dataset.type === "btnCancel") {
    target.parentNode.parentNode.remove();
    overlay.classList.remove("is-show");
  }

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
    LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
  }

  if (dataset.type === "todoDeleteBtn") {
    let selectedTodoDelete = arrayOfTodos.findIndex(
      (todo) => +todo.todoId === +target.closest(".task").dataset.id
    );
    target.closest(".task").remove();
    arrayOfTodos.splice(selectedTodoDelete, 1);

    changeCount();
    LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
  }

  if (
    dataset.type === "todoConversionBtn" ||
    dataset.type === "todoBackBtn" ||
    dataset.type === "todoCompleteBtn"
  ) {
    const selectedTodo = arrayOfTodos.findIndex(
      (todo) => +todo.todoId === +target.closest(".task").dataset.id
    );
    const todo = document.querySelector("#todo-tasks");
    const done = document.querySelector("#done-tasks");
    const inprogress = document.querySelector("#inprogress-tasks");
    target.closest(".task").remove();
    const targetTodo = arrayOfTodos[selectedTodo];
    function swapTodo(unit, node) {
      targetTodo.isProgress = unit;
      node.append(
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
    // error ???
    if (dataset.type === "todoConversionBtn") {
      const counter = arrayOfTodos.filter(
        (e) => e.isProgress === "inProgress"
      ).length;

      if (counter < 2) {
        swapTodo("inProgress", inprogress);
      } else {
        main.append(generateWarning());
        if (dataset.type === "CancelWarning") {
          target.parentNode.parentNode.remove();
          return;
        } else if (dataset.type === "ConfirmWarning") {
          target.parentNode.parentNode.remove();
          swapTodo("inProgress", inprogress);
        }
      }
    }

    if (dataset.type === "todoBackBtn") swapTodo("start", todo);
    if (dataset.type === "todoCompleteBtn") swapTodo("done", done);
    changeCount();
  }
  // if (event.target.dataset.type === "ConfirmWarning") {
  //   const done = document.querySelector("#done-tasks");
  //   done.innerHTML = "";
  //   overlay.classList.remove("is-show");
  //   document.querySelector("#modalContainer").remove();
  //   arrayOfTodos = arrayOfTodos.filter((todo) => todo.isProgress !== "done");
  // }

  if (event.target.dataset.type === "CancelWarning") {
    document.querySelector("#modalContainer").remove();
    overlay.classList.remove("is-show");
  }

  changeCount();
  LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
});

document.addEventListener("keydown", (event) => {
  const enterButton = document.getElementById("confirmBtnId");
  if (!enterButton) return;
  if (event.key == "Enter") {
    enterButton.click();
  }
});

document.addEventListener("keydown", (event) => {
  const enterBtn = document.getElementById("ConfirmWarningId");
  if (!enterBtn) return;
  if (event.key == "Enter") {
    enterBtn.click();
  }
});

document.addEventListener("keydown", (event) => {
  const escapeButton = document.getElementById("cancelBtnId");
  if (!escapeButton) return;
  if (event.key == "Escape") {
    escapeButton.click();
  }
});
document.addEventListener("keydown", (event) => {
  const escapeBtn = document.getElementById("CancelWarningId");
  if (!escapeBtn) return;
  if (event.key == "Escape") {
    escapeBtn.click();
  }
});

const deleteBtn = document.querySelector("#deleteall-button");
deleteBtn.addEventListener("click", (event) => {
  main.append(generateWarning());
});

// Filter in header
const filterButton = document.getElementById("filter-button");

filterButton.addEventListener("click", (event) => {
  const select = document.getElementById("filter");
  const listTodo = document.getElementById("todo-tasks");
  const listInProgress = document.getElementById("inprogress-tasks");
  const listDone = document.getElementById("done-tasks");

  let filteredArrayTodo = arrayOfTodos.filter(
    (todo) => todo.todoUser === select.value && todo.isProgress === "start");
  let filteredArrayInProgress = arrayOfTodos.filter(
    (todo) => todo.todoUser === select.value && todo.isProgress === "inProgress");
  let filteredArrayDone = arrayOfTodos.filter(
    (todo) => todo.todoUser === select.value && todo.isProgress === "done");

  listTodo.innerHTML = "";
  listInProgress.innerHTML = "";
  listDone.innerHTML = "";

  function addTodo(list, node) {
    list.forEach(todo => node.append(generateTodo(todo.todoId, todo.todoTitle, todo.todoDesk, todo.todoUser, todo.todoTime, todo.isProgress)));
  };

  addTodo(filteredArrayTodo, listTodo);
  addTodo(filteredArrayInProgress, listInProgress);
  addTodo(filteredArrayDone, listDone);
});

export { arrayOfTodos };