import { changeCount } from "./changeCount";
import {
  generateModalTask,
  generateTodo,
  generateWarning,
} from "./functionsForDom";
import { dateToLocaleString } from "../templates/tools";
import { getUsersFromApi } from "../services/getUsersFromApi"
import { LOCAL_STORAGE_API } from "../services/localStorageApi";
// import { dragAndDrop } from "./DragNdrop"


let arrayOfTodos = [];
let editCounter = 0;
let warningCounter = 0;
const moveCounter = arrayOfTodos.filter((e) => e.isProgress === "inProgress").length;
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
      LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
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
    // if (dataset.type === "todoConversionBtn") {
    //   if (moveCounter < 2) {
    //     swapTodo("inProgress", inprogress);
    //   } else {
    //     main.append(generateWarning());
    //     // if (dataset.type === "CancelWarning") {
    //     //   target.parentNode.parentNode.remove();
    //     //   return;
    //     // } else if (dataset.type === "ConfirmWarning") {
    //     //   target.parentNode.parentNode.remove();
    //     //   swapTodo("inProgress", inprogress);
    //     // }
    //   }};
    if (dataset.type === "todoConversionBtn") swapTodo("inProgress", inprogress);

    if (dataset.type === "todoBackBtn") swapTodo("start", todo);
    if (dataset.type === "todoCompleteBtn") swapTodo("done", done);
    changeCount();
  }
  if (event.target.dataset.type === "ConfirmWarning") {
    const done = document.querySelector("#done-tasks");
    overlay.classList.remove("is-show");
    document.querySelector("#modalContainer").remove();
    
    if (warningCounter) {
      moveCounter = 0;
      document.querySelector("[data-type = 'todoConversionBtn']").click();
      document.querySelector("#modalContainer").remove();
      return;
    }

    done.innerHTML = "";
    arrayOfTodos = arrayOfTodos.filter((todo) => todo.isProgress !== "done");
  }

  if (dataset.type === "CancelWarning") {
    document.querySelector("#modalContainer").remove();
    overlay.classList.remove("is-show");
    moveCounter = 0;
  };

  if (dataset.type === "todoEditBtn") {
    editCounter = 1;
    selectedTodo = arrayOfTodos.findIndex(
      (todo) => +todo.todoId === +target.closest(".task").dataset.id
    );
    main.append(generateModalTask(arrayOfTodos[selectedTodo].todoTitle, arrayOfTodos[selectedTodo].todoDesk)) 
    const userOpt = document.querySelector(".modal__list");
    getUsersFromApi(userOpt);
  };

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

const addBtn = document.querySelector("#add-button");

addBtn.addEventListener("click", () => {
  main.append(generateModalTask());
  const userOpt = document.querySelector(".modal__list");
  getUsersFromApi(userOpt);
});

let dragged;

const dragAndDrop = () => {
const todoContainerFirst = document.querySelector(".todo__container");
const todoContainerInProgress = document.querySelector(".inprogress__container");
const todoContainerDone = document.querySelector(".done__container");

const dragStart = function (event) {
    dragged = event.target;
    console.log(dragged);
    console.log("start");
    event.dataTransfer.setData("id", event.target.dataset.id)
}

const dragEnd = function () {
    console.log("end");
}

const dragOver = function (event) {
    event.preventDefault();
    console.log("over");
}

const dragEnter = function (event) {
    event.preventDefault();
    console.log("enter");
}

const dragLeave = function (event) {
    console.log("leave");
}

const dragDrop = function (event) {
    this.childNodes[3].append(dragged)

    let taskId = event.dataTransfer.getData("id");
    console.log(taskId);

    let droppedTask = arrayOfTodos.filter(todo => +todo.todoId === +taskId);
    console.log(droppedTask);

    console.log(event.target.parentNode.className);
    console.log(event.target.closest(".done"));
    if (event.target.closest(".inprogress")) {
        console.log(event.target);
        droppedTask[0].isProgress = "inProgress";
        dragged.className = "task task--inprogress";
        }
    if (event.target.closest(".done")) {
        console.log(event.target);
        droppedTask[0].isProgress = "done";
        dragged.className = "task task--done";
        }
    if (event.target.closest(".todo")) {
            console.log(event.target);
            droppedTask[0].isProgress = "start";
            dragged.className = "task task--todo";
            }

        arrayOfTodos = arrayOfTodos.filter(todo => +todo.todoId !== +taskId);
        arrayOfTodos.push(droppedTask[0]);
        console.log(arrayOfTodos);

changeCount()
LOCAL_STORAGE_API.setStorageData(arrayOfTodos)
        
}

todoContainerFirst.addEventListener("dragstart", dragStart);
todoContainerFirst.addEventListener("dragend", dragEnd);
todoContainerFirst.addEventListener("dragover", dragOver);
todoContainerFirst.addEventListener("dragenter", dragEnter);
todoContainerFirst.addEventListener("dragleave", dragLeave);
todoContainerFirst.addEventListener("drop", dragDrop);

todoContainerInProgress.addEventListener("dragstart", dragStart);
todoContainerInProgress.addEventListener("dragend", dragEnd);
todoContainerInProgress.addEventListener("dragover", dragOver);
todoContainerInProgress.addEventListener("dragenter", dragEnter);
todoContainerInProgress.addEventListener("dragleave", dragLeave);
todoContainerInProgress.addEventListener("drop", dragDrop);

todoContainerDone.addEventListener("dragstart", dragStart);
todoContainerDone.addEventListener("dragend", dragEnd);
todoContainerDone.addEventListener("dragover", dragOver);
todoContainerDone.addEventListener("dragenter", dragEnter);
todoContainerDone.addEventListener("dragleave", dragLeave);
todoContainerDone.addEventListener("drop", dragDrop);

}

export { dragAndDrop };
export { arrayOfTodos };