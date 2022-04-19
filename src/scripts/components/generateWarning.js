import { createElement } from "../templates/templates.js";

function generateWarning() {
  const modalContainer = createElement("div", "modal-warning__container");
  const modalTitle = createElement("h3", "modal-warning__title", "Warning!");
  const modalButtons = createElement("div", "modal-warning__buttons");
  const modalCancelBtn = createElement("button", "modal-warning__cancel-btn", "Cancel");
  const modalConfirmBtn = createElement(
    "button",
    "modal-warning__confirm-btn",
    "Confirm"
  );

  modalContainer.append(modalTitle, modalButtons);
  modalButtons.append(modalCancelBtn, modalConfirmBtn);

  modalCancelBtn.dataset.type = "Cancel";
  modalConfirmBtn.dataset.type = "Confirm";

  return modalContainer;
};
