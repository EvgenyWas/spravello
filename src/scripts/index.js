import { createElement } from "./templates/templates";
import { myTime } from "./services/worldTimeApi";
import { getUsersFromApi } from "./services/getUsersFromApi";
import { addBtn, generateModalTask, arrayOfTodos} from "./components/todo.js"
import { generateTodo } from "./components/functionsForDom";
import { LOCAL_STORAGE_API } from "./services/localStorageApi";
import { changeCount } from "./components/changeCount";

window.addEventListener("DOMContentLoaded", app);

function app() {
    LOCAL_STORAGE_API.addTasksFromStorageData();
    changeCount();
};

// Launch time in header
setInterval(myTime, 1000);