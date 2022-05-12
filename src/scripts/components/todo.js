import { changeCount } from "./changeCount";
import { generateModalTask, generateTodo, generateWarning } from "./functionsForDom";
import { dateToLocaleString, addTodo } from "../templates/utils";
import { getUsersFromApi } from "../services/getUsersFromApi";
import { LOCAL_STORAGE_API } from "../services/localStorageApi";

let arrayOfTodos = [];
let editCounter = 0;
let selectedTodo;
const TodoCreation = function (todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
  this.todoId = todoId;
  this.todoTitle = todoTitle;
  this.todoDesk = todoDesk;
  this.todoUser = todoUser;
  this.todoTime = todoTime;
  this.isProgress = isProgress;
};

// delegated events for todo via main
main.addEventListener("click", (event) => {
  const { target } = event;
  const { dataset } = target;
  if (target === event.currentTarget) return;

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
    overlay.classList.remove("is-show");
    if (title.value === "" || desk.value === "") return;

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
      LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
      return;
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
    LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
  }

  if (dataset.type === "todoDeleteBtn") {
    let selectedTodoDelete = arrayOfTodos.findIndex(
      (todo) => +todo.todoId === +target.closest(".task").dataset.id);
    
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
      (todo) => +todo.todoId === +target.closest(".task").dataset.id);
    const todo = document.querySelector("#todo-tasks");
    const done = document.querySelector("#done-tasks");
    const inprogress = document.querySelector("#inprogress-tasks");
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
      target.closest(".task").remove();
    };

    if (dataset.type === "todoConversionBtn") {
      if (document.getElementById("inprogress-tasks").childElementCount < 6) {
        swapTodo("inProgress", inprogress);
      } else {
        main.append(
          generateWarning({
            onConfirm: () => swapTodo("inProgress", inprogress),
            onCancel: () => {return},
          })
        );
      }
    }

    if (dataset.type === "todoBackBtn") swapTodo("start", todo);

    if (dataset.type === "todoCompleteBtn") swapTodo("done", done);

    changeCount();
    LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
  }

  if (dataset.type === "todoEditBtnId") {
    editCounter = 1;
    selectedTodo = arrayOfTodos.findIndex(
      (todo) => +todo.todoId === +target.closest(".task").dataset.id);

    main.append(generateModalTask(
      arrayOfTodos[selectedTodo].todoTitle,
      arrayOfTodos[selectedTodo].todoDesk));

    const userOpt = document.querySelector(".modal__list");
    getUsersFromApi(userOpt);
  };

  changeCount();
  LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
});

// Button Delete all
const deleteBtn = document.querySelector("#deleteall-button");
deleteBtn.addEventListener("click", () => {
  main.append(
    generateWarning({
      onConfirm: () => {
        const done = document.querySelector("#done-tasks");
        done.innerHTML = "";
        arrayOfTodos = arrayOfTodos.filter(
          (todo) => todo.isProgress !== "done"
        );
      },
      onCancel: () => {},
    })
  );
});

// Listeners for keydowns Enter and Escapes for modal winwdows
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

document.addEventListener("keydown", (event) => {
  const escapeBtn = document.getElementById("cancelWarningId");
  if (!escapeBtn) return;

  if (event.key == "Escape") {
    escapeBtn.click();
  }
});

document.addEventListener("keydown", (event) => {
  const enterBtn = document.getElementById("confirmWarningId");
  if (!enterBtn) return;

  if (event.key == "Enter") {
    enterBtn.click();
  }
});

// Filter in header
const filterButton = document.getElementById("filter-button");

filterButton.addEventListener("click", () => {
  const select = document.getElementById("filter");
  const listTodo = document.getElementById("todo-tasks");
  const listInProgress = document.getElementById("inprogress-tasks");
  const listDone = document.getElementById("done-tasks");

  listTodo.innerHTML = "";
  listInProgress.innerHTML = "";
  listDone.innerHTML = "";

  if (select.value === 'All') {
    let tasksInTodo = arrayOfTodos.filter(task => task.isProgress === 'start');
    let tasksInInprogress = arrayOfTodos.filter(task => task.isProgress === 'inProgress');
    let tasksInDone = arrayOfTodos.filter(task => task.isProgress === 'done');

    addTodo(tasksInTodo, listTodo);
    addTodo(tasksInInprogress, listInProgress);
    addTodo(tasksInDone, listDone);
    return;
  };

  let filteredArrayTodo = arrayOfTodos.filter((todo) => todo.todoUser === select.value && todo.isProgress === "start");
  let filteredArrayInProgress = arrayOfTodos.filter((todo) => todo.todoUser === select.value && todo.isProgress === "inProgress");
  let filteredArrayDone = arrayOfTodos.filter((todo) => todo.todoUser === select.value && todo.isProgress === "done");

  

  addTodo(filteredArrayTodo, listTodo);
  addTodo(filteredArrayInProgress, listInProgress);
  addTodo(filteredArrayDone, listDone);
});

const addBtn = document.querySelector("#add-button");

addBtn.addEventListener("click", () => {
  main.append(generateModalTask());
  const userOpt = document.querySelector(".modal__list");
  getUsersFromApi(userOpt);
});

// Drag&Drop
let dragged;

const dragAndDrop = () => {
  const todoContainerFirst = document.querySelector(".todo__container");
  const todoContainerInProgress = document.querySelector(".inprogress__container");
  const todoContainerDone = document.querySelector(".done__container");

  const dragStart = function (event) {
    dragged = event.target;
    event.dataTransfer.setData("id", event.target.dataset.id)
  };

  const dragOver = function (event) {
    event.preventDefault();
  };

  const dragEnter = function (event) {
    event.preventDefault();
  };

  const dragDrop = function (event) {
    this.childNodes[3].append(dragged)
    let taskId = event.dataTransfer.getData("id");
    let droppedTask = arrayOfTodos.filter(todo => +todo.todoId === +taskId);

    const todoContainerHeader = dragged.childNodes[1];
    const todoDeleteBtn = dragged.querySelector("[data-type = 'todoDeleteBtn']");
    const todoEditBtn = dragged.querySelector("[data-type = 'todoEditBtnId']");
    const todoConversionBtn = dragged.querySelector("[data-type = 'todoConversionBtn']");
    const todoCompleteBtn = dragged.querySelector("[data-type = 'todoCompleteBtn']");
    const todoBackBtn = dragged.querySelector("[data-type = 'todoBackBtn']");
    const todoElementTitle = dragged.querySelector('#todoTitle');

    if (event.target.closest(".inprogress")) {
      droppedTask[0].isProgress = "inProgress";
      dragged.className = "task task--inprogress";

      todoEditBtn.hidden = true;
      todoConversionBtn.hidden = true;
      todoDeleteBtn.hidden = true; 

      todoContainerHeader.className = "task__header task__header--inprogress";
      todoBackBtn.hidden = false;
      todoCompleteBtn.hidden = false;
    }

    if (event.target.closest(".done")) {
      droppedTask[0].isProgress = "done";
      dragged.className = "task task--done";

      todoContainerHeader.className = "task__header task__header--done"
      todoDeleteBtn.className ="task__btn-delete task__btn-delete--header";
      todoEditBtn.hidden = true;
      todoConversionBtn.hidden = true;
      todoCompleteBtn.hidden = true;
      todoBackBtn.hidden = true;

      todoDeleteBtn.hidden = false;
      todoContainerHeader.append(todoBackBtn, todoCompleteBtn);
    }

    if (event.target.closest(".todo")) {
      droppedTask[0].isProgress = "start";
      dragged.className = "task task--todo";

      todoCompleteBtn.hidden = true;
      todoBackBtn.hidden = true;

      todoContainerHeader.className = "task__header task__header--todo";
      todoEditBtn.className ="task__btn-edit";
      todoDeleteBtn.className ="task__btn-delete";
      todoConversionBtn.className ="task__btn-conversion";
      todoEditBtn.hidden = false;
      todoDeleteBtn.hidden = false;
      todoConversionBtn.hidden = false;
    }

    arrayOfTodos = arrayOfTodos.filter(todo => +todo.todoId !== +taskId);
    arrayOfTodos.push(droppedTask[0]);

    changeCount()
    LOCAL_STORAGE_API.setStorageData(arrayOfTodos)      
  };

  todoContainerFirst.addEventListener("dragstart", dragStart);
  todoContainerFirst.addEventListener("dragover", dragOver);
  todoContainerFirst.addEventListener("dragenter", dragEnter);
  todoContainerFirst.addEventListener("drop", dragDrop);

  todoContainerInProgress.addEventListener("dragstart", dragStart);
  todoContainerInProgress.addEventListener("dragover", dragOver);
  todoContainerInProgress.addEventListener("dragenter", dragEnter);
  todoContainerInProgress.addEventListener("drop", dragDrop);

  todoContainerDone.addEventListener("dragstart", dragStart);
  todoContainerDone.addEventListener("dragover", dragOver);
  todoContainerDone.addEventListener("dragenter", dragEnter);
  todoContainerDone.addEventListener("drop", dragDrop);
};

export { arrayOfTodos, dragAndDrop };