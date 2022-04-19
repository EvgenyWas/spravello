import { createElement } from './templates/templates.js'
import { myTime } from './services/worldTimeApi.js'
import { getUsersFromApi } from './services/getUsersFromApi'

// Function for generating modal task
const generateModalTask = () => {
    const modalWindow = createElement("div", "modal__window");
    const titleModal = createElement("input", "modal__title");
    const modalDescription = createElement("input", "modal__description");
    const modalOptions = createElement("div", "modal__options");
    const selectModal = createElement("select", "modal__list", "Select User");
    const cancelBtn = createElement("button", "modal__cancel", "Сancel");
    const confirmBtn = createElement("confirm", "modal__confirm", "Confirm");

    titleModal.placeholder = "Title";
    modalDescription.placeholder = "Description";
    titleModal.dataset.type = "modalTitle";
    modalDescription.dataset.type = "descriptionModal";
    selectModal.dataset.type = "modalSelect";
    cancelBtn.dataset.type = "btnCancel";
    confirmBtn.dataset.type = "btnConfirm";
    
    modalOptions.append(selectModal, cancelBtn, confirmBtn);
    modalWindow.append(titleModal, modalDescription, modalOptions);

    return modalWindow;
};

// Function for generate Todo
import { createElement } from "./templates/templates.js";

function generateTodo(todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
  const todoContainer = createElement("div", "container");
  const todoElementTitle = createElement("h4", "title_todo", todoTitle);
  const todoElementDescription = createElement("p", "description_todo", todoDesk);
  const todoElementUser = createElement("p", "user_todo", todoUser);
  const todoEditBtn = createElement("button", "edit_button", "Edit");
  const todoDeleteBtn = createElement("button", "delete_button", "Delete");
  const todoElementTime = createElement("span", "time_todo ", todoTime);
  const todoConversionBtn = createElement("button", "conversion_todo", "➣");

  container.append(
    todoElementTitle,
    todoElementDescription,
    todoElementUser,
    todoEditBtn,
    todoDeleteBtn,
    todoElementTime,
    todoConversionBtn
  );

  container.dataset.id = todoId;
  container.dataset.isProgress = isProgress;
  todoEditBtn.dataset.type = "todoEditBtn";
  todoDeleteBtn.dataset.type = "todoDeleteBtn";
  todoConversionBtn.dataset.type = "todoConversionBtn";

  return todoContainer;
};

// Launch time in header
setInterval(myTime, 1000);
document.addEventListener('DOMContentLoaded', getUsersFromApi);
