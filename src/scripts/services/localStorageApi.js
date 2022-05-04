import { generateTodo } from "../components/functionsForDom";
import { arrayOfTodos } from "../components/todo";
import { appendToList } from "../templates/utils";

const LOCAL_STORAGE_API = {
  key: {
    tasks: "tasks-data",
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

   

    appendToList(tasksInTodo, listTodo);
    appendToList(tasksInInprogress, listInProgress);
    appendToList(tasksInDone, listDone);
  },
};

export { LOCAL_STORAGE_API };
