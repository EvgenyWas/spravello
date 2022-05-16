import { generateTodo } from '../components/functionsForDom';
import { arrayOfTodos } from '../components/todo';

// Function for time of generateTodo
function dateToLocaleString() {
  let time = new Date();
  let newTime = time.toLocaleString("ru").slice(0, -3);

  return newTime;
};

// Function for add a todo in defently list
function addTodo(list, node) {
  list.forEach((todo) =>
    node.append(generateTodo(
      todo.todoId,
      todo.todoTitle,
      todo.todoDesk,
      todo.todoUser,
      todo.todoTime,
      todo.isProgress
      )
    )
  );
};

// Function for add a todo in defently array
function appendToList(arr, node) {
  arr.forEach(task => {
    node.append(generateTodo(
      task.todoId,
      task.todoTitle,
      task.todoDesk,
      task.todoUser,
      task.todoTime,
      task.isProgress));
      arrayOfTodos.push(task);
  });
};

export { appendToList, addTodo, dateToLocaleString };