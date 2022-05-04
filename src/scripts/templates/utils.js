function dateToLocaleString() {
  let time = new Date();
  let newTime = time.toLocaleString("ru").slice(0, -3);

  return newTime;
};

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

const appendToList = (arr, node) => {
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

export { appendToList };
export { addTodo };
export { swapTodo };
export { dateToLocaleString };