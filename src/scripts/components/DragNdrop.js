import { generateTodo } from "./functionsForDom";
import { arrayOfTodos } from "./todo";
import { changeCount } from "./changeCount";

// let dragged;

// const dragAndDrop = () => {
// const todoContainerFirst = document.querySelector(".todo__container");
// const todoContainerInProgress = document.querySelector(".inprogress__container");
// const todoContainerDone = document.querySelector(".done__container");

// const dragStart = function (event) {
//     dragged = event.target;
//     console.log(dragged);
//     console.log("start");
//     event.dataTransfer.setData("id", event.target.dataset.id)
// }

// const dragEnd = function () {
//     console.log("end");
// }

// const dragOver = function (event) {
//     event.preventDefault();
//     console.log("over");
// }

// const dragEnter = function (event) {
//     event.preventDefault();
//     console.log("enter");
// }

// const dragLeave = function (event) {
//     console.log("leave");
// }

// const dragDrop = function (event) {
//     this.childNodes[3].append(dragged)

//     let taskId = event.dataTransfer.getData("id");
//     console.log(taskId);

//     let droppedTask = arrayOfTodos.filter(todo => +todo.todoId === +taskId);
//     console.log(droppedTask);

//     console.log(event.target.parentNode.className);
//     if (event.target.parentNode.className === "inprogress__tasks") {
//         console.log(event.target);
//         droppedTask.isProgress = "inProgress";
//         dragged.className = "task task--inprogress";
//         }
//     if (event.target.parentElement.className === "done__container") {
//         console.log(event.target);
//         droppedTask.isProgress = "done";
//         dragged.style.background = "purple";
//         }
//     if (event.target.parentElement.className === "todo__container") {
//             console.log(event.target);
//             droppedTask.isProgress = "start";
//             dragged.style.background = "purple";
//             }

//         // arrayOfTodos = arrayOfTodos.filter(todo => +todo.todoId !== +taskId).push(droppedTask);

// changeCount()
        
// }

// todoContainerFirst.addEventListener("dragstart", dragStart);
// todoContainerFirst.addEventListener("dragend", dragEnd);
// todoContainerFirst.addEventListener("dragover", dragOver);
// todoContainerFirst.addEventListener("dragenter", dragEnter);
// todoContainerFirst.addEventListener("dragleave", dragLeave);
// todoContainerFirst.addEventListener("drop", dragDrop);

// todoContainerInProgress.addEventListener("dragstart", dragStart);
// todoContainerInProgress.addEventListener("dragend", dragEnd);
// todoContainerInProgress.addEventListener("dragover", dragOver);
// todoContainerInProgress.addEventListener("dragenter", dragEnter);
// todoContainerInProgress.addEventListener("dragleave", dragLeave);
// todoContainerInProgress.addEventListener("drop", dragDrop);

// todoContainerDone.addEventListener("dragstart", dragStart);
// todoContainerDone.addEventListener("dragend", dragEnd);
// todoContainerDone.addEventListener("dragover", dragOver);
// todoContainerDone.addEventListener("dragenter", dragEnter);
// todoContainerDone.addEventListener("dragleave", dragLeave);
// todoContainerDone.addEventListener("drop", dragDrop);

// }
// dragAndDrop()
// export { dragAndDrop }