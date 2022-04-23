import { createElement } from "../templates/templates";
import { getUsersFromApi } from "../services/getUsersFromApi";
import { arrayOfTodos } from "./todo";

const generateModalTask = () => {
    const modalWindow = createElement("div", "modal__window");
    const titleModal = createElement("textarea", "modal__title");
    const modalDescription = createElement("textarea", "modal__description");
    const modalOptions = createElement("div", "modal__options");
    const selectModal = createElement("select", "modal__list", "Select User");
    const cancelBtn = createElement("button", "modal__cancel", "Сancel");
    const confirmBtn = createElement("button", "modal__confirm", "Confirm");
  
    titleModal.placeholder = "Title";
    modalDescription.placeholder = "Description";
    modalWindow.dataset.type = "windowModal";
    titleModal.dataset.type = "modalTitle";
    modalDescription.dataset.type = "descriptionModal";
    selectModal.dataset.type = "modalSelect";
    cancelBtn.dataset.type = "btnCancel";
    confirmBtn.dataset.type = "btnConfirm";
    confirmBtn.id = "confirmBtnId";
    cancelBtn.id = "cancelBtnId";
  
    const overlay = document.getElementById("overlay");
    overlay.classList.add("is-show");
  
    modalOptions.append(selectModal, cancelBtn, confirmBtn);
    modalWindow.append(titleModal, modalDescription, modalOptions);
      
    return modalWindow;
  };

  function generateTodo(todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
    const todoContainer = createElement("div", "task");
    const todoContainerHeader = createElement("div", "task__header");
    const todoContainerFooter = createElement("div", "task__footer");
    const todoElementTitle = createElement("h4", "task__title", todoTitle);
    const todoElementDescription = createElement("p","task__desc", todoDesk);
    const todoElementUser = createElement("p", "task__user", todoUser);
    const todoEditBtn = createElement("button", "task__btn-edit", "Edit");
    const todoDeleteBtn = createElement("button", "task__btn-delete", "Delete");
    const todoElementTime = createElement("span", "task__time", todoTime);
    const todoConversionBtn = createElement("button", "task__btn-conversion", "➣");
  
    todoContainerHeader.append(
      todoEditBtn,
      todoDeleteBtn,
      todoConversionBtn
    )
  
    todoContainerFooter.append(
      todoElementUser,
      todoElementTime
    )
  
    todoContainer.append(
      todoContainerHeader,
      todoElementTitle,
      todoElementDescription,
      todoContainerFooter
    );
  
    todoContainer.dataset.id = todoId;
    todoContainer.dataset.isProgress = isProgress;
    todoEditBtn.dataset.type = "todoEditBtn";
    todoDeleteBtn.dataset.type = "todoDeleteBtn";
    todoConversionBtn.dataset.type = "todoConversionBtn";
  
    todoContainer.className = (isProgress === "inProgress") ? "task task--inprogress" : "task";
  
    return todoContainer;
  }

  const addBtn = document.querySelector("#add-button");

  addBtn.addEventListener("click", () => {
    main.append(generateModalTask());
    getUsersFromApi();
  });

  export { generateTodo };
  export { generateModalTask };