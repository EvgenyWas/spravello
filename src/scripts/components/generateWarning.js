import { createElement } from "../templates/templates.js";

function generateWarning() {
  const modalContainer = createElement("div", "modal_container");
  const modalTitle = createElement("h3", "modal_title", "Warning!");
  const modalButtons = createElement("div", "modal_buttons");
  const modalCancelBtn = createElement("button", "modal_cancel_btn", "Cancel");
  const modalConfirmBtn = createElement(
    "button",
    "modal_confirm_btn",
    "Confirm"
  );

  modalContainer.append(modalTitle, modalButtons);
  modalButtons.append(modalCancelBtn, modalConfirmBtn);

  modalCancelBtn.dataset.type = "Cancel";
  modalConfirmBtn.dataset.type = "Confirm";

  return modalContainer;
};
