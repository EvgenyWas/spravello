import { createElement } from "./templates/templates";
import { myTime } from "./services/worldTimeApi";
import { getUsersFromApi } from "./services/getUsersFromApi";
import { addBtn, generateModalTask, arrayOfTodos} from "./components/todo.js"
import { generateTodo } from "./components/functionsForDom";

// Launch time in header
setInterval(myTime, 1000);