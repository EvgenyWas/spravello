import { createElement } from "./templates/templates";
import { myTime } from "./services/worldTimeApi";
import { getUsersFromApi } from "./services/getUsersFromApi";
import { addBtn } from "./components/todo.js";
import { generateModalTask } from "./components/todo.js"

// Function for generating modal task


// Function for generate Todo
function generateTodo(
  todoId,
  todoTitle,
  todoDesk,
  todoUser,
  todoTime,
  isProgress
) {
  const todoContainer = createElement("div", "container");
  const todoElementTitle = createElement("h4", "title_todo", todoTitle);
  const todoElementDescription = createElement("p","description_todo", todoDesk);
  const todoElementUser = createElement("p", "user_todo", todoUser);
  const todoEditBtn = createElement("button", "edit_button", "Edit");
  const todoDeleteBtn = createElement("button", "delete_button", "Delete");
  const todoElementTime = createElement("span", "time_todo ", todoTime);
  const todoConversionBtn = createElement("button", "conversion_todo", "➣");

  todoContainer.append(
    todoElementTitle,
    todoElementDescription,
    todoElementUser,
    todoEditBtn,
    todoDeleteBtn,
    todoElementTime,
    todoConversionBtn
  );

  todoContainer.dataset.id = todoId;
  todoContainer.dataset.isProgress = isProgress;
  todoEditBtn.dataset.type = "todoEditBtn";
  todoDeleteBtn.dataset.type = "todoDeleteBtn";
  todoConversionBtn.dataset.type = "todoConversionBtn";

  return todoContainer;
}

// Launch time in header
setInterval(myTime, 1000);
document.addEventListener("DOMContentLoaded", getUsersFromApi);

const box = document.querySelector("#todo-box");

addBtn.addEventListener("click", () => {
  main.append(generateModalTask());
  getUsersFromApi();
});

export { generateTodo };