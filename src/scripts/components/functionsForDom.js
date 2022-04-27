import { createElement } from "../templates/templates";
import { getUsersFromApi } from "../services/getUsersFromApi";
import { arrayOfTodos } from "./todo";

const generateModalTask = (title = "", desc = "") => {
  const modalWindow = createElement("div", "modal__window");
  const titleModal = createElement("textarea", "modal__title", title);
  const modalDescription = createElement(
    "textarea",
    "modal__description",
    desc
  );
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

function generateTodo(
  todoId,
  todoTitle,
  todoDesk,
  todoUser,
  todoTime,
  isProgress
) {
  const todoContainer = createElement("div", "task");
  const todoContainerHeader = createElement("div", "task__header");
  const todoContainerFooter = createElement("div", "task__footer");
  const todoElementTitle = createElement("h4", "task__title", todoTitle);
  const todoElementDescription = createElement("p", "task__desc", todoDesk);
  const todoElementUser = createElement("p", "task__user", todoUser);
  const todoEditBtn = createElement("button", "task__btn-edit", "Edit");
  const todoDeleteBtn = createElement("button", "task__btn-delete", "Delete");
  const todoElementTime = createElement("span", "task__time", todoTime);
  const todoConversionBtn = createElement(
    "button",
    "task__btn-conversion",
    "➣"
  );
  const todoBackBtn = createElement("button", "task__btn-back", "Back");
  const todoCompleteBtn = createElement(
    "button",
    "task__btn-complete",
    "Complete"
  );

  todoContainerHeader.append(
    todoEditBtn,
    todoDeleteBtn,
    todoConversionBtn,
    todoBackBtn,
    todoCompleteBtn
  );
  todoContainerFooter.append(todoElementUser, todoElementTime);
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
  todoBackBtn.dataset.type = "todoBackBtn";
  todoCompleteBtn.dataset.type = "todoCompleteBtn";
  todoEditBtn.id = "todoEditBtnId";
  todoContainer.id = "editTodoTask";
  todoElementTitle.id = "todoTitle";
  todoElementDescription.id = "todoDesc";
  todoElementUser.id = "todoUser";

  todoContainer.className =
    isProgress === "inProgress" ? "task task--inprogress" : "task";
  return todoContainer;
}

function generateWarning({ onConfirm, onCancel }) {
  const modalContainer = createElement("div", "modal-warning__container");
  const modalTitle = createElement("h3", "modal-warning__title", "Warning!");
  const modalButtons = createElement("div", "modal-warning__buttons");
  const modalCancelBtn = createElement(
    "button",
    "modal-warning__cancel__btn",
    "Cancel"
  );
  const modalConfirmBtn = createElement(
    "button",
    "modal-warning__confirm-btn",
    "Confirm"
  );

  modalContainer.append(modalTitle, modalButtons);
  modalButtons.append(modalCancelBtn, modalConfirmBtn);
  const overlay = document.getElementById("overlay");

  modalCancelBtn.dataset.type = "cancelWarning";
  modalConfirmBtn.dataset.type = "confirmWarning";
  modalConfirmBtn.id = "confirmWarningId";
  modalCancelBtn.id = "cancelWarningId";
  modalContainer.id = "modalContainer";
  modalCancelBtn.addEventListener("click", () => {
    onCancel();
    document.querySelector("#modalContainer").remove();
    overlay.classList.remove("is-show");
  });

  modalConfirmBtn.addEventListener("click", () => {
    onConfirm();
    document.querySelector("#modalContainer").remove();

    overlay.classList.remove("is-show");
  });
  overlay.classList.add("is-show");

  return modalContainer;
}

export { generateTodo, generateModalTask, generateWarning };
