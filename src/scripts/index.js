import { createElement } from "./templates/templates";
import { myTime } from "./services/worldTimeApi";
import { getUsersFromApi } from "./services/getUsersFromApi";
import { addBtn, generateModalTask, arrayOfTodos } from "./components/todo.js";
import { generateTodo } from "./components/functionsForDom";

// Launch time in header
setInterval(myTime, 1000);

const filterButton = document.getElementById("filter-button");

filterButton.addEventListener("click", (event) => {
  const select = document.getElementById("Filter");
  const listTodo = document.getElementById("todo-tasks");
  const listInProgress = document.getElementById("inprogress-tasks");
  const listDone = document.getElementById("done-tasks");

  let filteredArrayTodo = arrayOfTodos.filter(
    (todo) => todo.todoUser === select.value && todo.isProgress === "start"
  );
  let filteredArrayInProgress = arrayOfTodos.filter(
    (todo) => todo.todoUser === select.value && todo.isProgress === "inProgress"
  );
  let filteredArrayDone = arrayOfTodos.filter(
    (todo) => todo.todoUser === select.value && todo.isProgress === "done"
  );

  listTodo.innerHTML = "";
  filteredArrayTodo.forEach((todo) => {
    listTodo.append(
      generateTodo(
        todo.todoId,
        todo.todoTitle,
        todo.todoDesk,
        todo.todoUser,
        todo.todoTime,
        todo.isProgress
      )
    );
  });

  listInProgress.innerHTML = "";
  filteredArrayInProgress.forEach((todo) => {
    listInProgress.append(
      generateTodo(
        todo.todoId,
        todo.todoTitle,
        todo.todoDesk,
        todo.todoUser,
        todo.todoTime,
        todo.isProgress
      )
    );
  });

  listDone.innerHTML = "";
  filteredArrayDone.forEach((todo) => {
    listDone.append(
      generateTodo(
        todo.todoId,
        todo.todoTitle,
        todo.todoDesk,
        todo.todoUser,
        todo.todoTime,
        todo.isProgress
      )
    );
  });
});
