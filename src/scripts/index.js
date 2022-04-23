import { createElement } from "./templates/templates";
import { myTime } from "./services/worldTimeApi";
import { getUsersFromApi } from "./services/getUsersFromApi";
import { addBtn } from "./components/todo.js";
import { generateModalTask, arrayOfTodos} from "./components/todo.js"

// Function for generating modal task


// Function for generate Todo
function generateTodo(todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
  const todoContainer = createElement("div", "task");
  const todoContainerHeader = createElement("div", "task__header");
  const todoContainerFooter = createElement("div", "task__footer");
  const todoElementTitle = createElement("h4", "task__title", todoTitle);
  const todoElementDescription = createElement("p","task__desc", todoDesk);
  const todoElementUser = createElement("p", "task__user", todoUser);
  const todoEditBtn = createElement("button", "task__btn-edit", "Edit");
  const todoDeleteBtn = createElement("button", "task__btn-delete", "Delete");
  const todoElementTime = createElement("span", "task__time", todoTime);
  const todoConversionBtn = createElement("button", "task__btn-conversion", "➣");

  todoContainerHeader.append(
    todoEditBtn,
    todoDeleteBtn,
    todoConversionBtn
  )

  todoContainerFooter.append(
    todoElementUser,
    todoElementTime
  )

  todoContainer.append(
    todoContainerHeader,
    todoElementTitle,
    todoElementDescription,
    todoContainerFooter
  );

  todoContainer.dataset.id = todoId;
  todoContainer.dataset.isProgress = isProgress;
  todoEditBtn.dataset.type = "todoEditBtn";
  todoDeleteBtn.dataset.type = "todoDeleteBtn";
  todoConversionBtn.dataset.type = "todoConversionBtn";

  todoContainer.className = (isProgress === "inProgress") ? "task task--inprogress" : "task";

  return todoContainer;
}

// Launch time in header
setInterval(myTime, 1000);

addBtn.addEventListener("click", () => {
  main.append(generateModalTask());
  getUsersFromApi();
});

export { generateTodo };