import { myTime } from "./services/myTime";
import { getUsersFromApi } from "./services/getUsersFromApi";
import { LOCAL_STORAGE_API } from "./services/localStorageApi";
import { changeCount } from "./components/changeCount";
import { dragAndDrop } from "./components/todo";
import { toast } from "./components/toast";

const selectInHeader = document.getElementById('filter');

window.addEventListener("DOMContentLoaded", app);

function app() {
  LOCAL_STORAGE_API.addTasksFromStorageData();
  changeCount();
  getUsersFromApi(selectInHeader);
  dragAndDrop();
  toast.init();
};

// Launch time in header
setInterval(myTime, 1000);