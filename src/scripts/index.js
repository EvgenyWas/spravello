import { myTime } from "./services/worldTimeApi";
import { getUsersFromApi } from "./services/getUsersFromApi";
import { LOCAL_STORAGE_API } from "./services/localStorageApi";
import { changeCount } from "./components/changeCount";

const selectInHeader = document.getElementById('filter');

window.addEventListener("DOMContentLoaded", app);

function app() {
  LOCAL_STORAGE_API.addTasksFromStorageData();
  changeCount();
  getUsersFromApi(selectInHeader);
};

// Launch time in header
setInterval(myTime, 1000);