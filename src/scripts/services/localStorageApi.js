import { generateTodo } from "../components/functionsForDom";
import { arrayOfTodos } from "../components/todo";

const LOCAL_STORAGE_API = {
  key: {
    tasks: "tasks-data",
  },
  lists: {
    todo: "start",
    inprogress: "inProgress",
    done: "done",
  },
  getStorageData() {
    let data = JSON.parse(localStorage.getItem(this.key.tasks));
    return data ? data : [];
  },
  setStorageData(data) {
    localStorage.setItem(this.key.tasks, JSON.stringify(data));
  },
  addTasksFromStorageData() {
    const listTodo = document.getElementById('todo-tasks');
    const listInProgress = document.getElementById('inprogress-tasks');
    const listDone = document.getElementById('done-tasks');
    let storageData = this.getStorageData();
    let tasksInTodo = storageData.filter(task => task.isProgress === 'start');
    let tasksInInprogress = storageData.filter(task => task.isProgress === 'inProgress');
    let tasksInDone = storageData.filter(task => task.isProgress === 'done');

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

    appendToList(tasksInTodo, listTodo);
    appendToList(tasksInInprogress, listInProgress);
    appendToList(tasksInDone, listDone);
  },
};

export { LOCAL_STORAGE_API };