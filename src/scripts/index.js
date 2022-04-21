import { createElement } from './templates/templates.js'
import { myTime } from './services/worldTimeApi.js'
import { getUsersFromApi } from './services/getUsersFromApi'
import { addBtn } from './components/todo.js';

// Function for generating modal task
const generateModalTask = () => {
    const modalWindow = createElement("div", "modal__window");
    const titleModal = createElement("input", "modal__title");
    const modalDescription = createElement("input", "modal__description");
    const modalOptions = createElement("div", "modal__options");
    const selectModal = createElement("select", "modal__list", "Select User");
    const cancelBtn = createElement("button", "modal__cancel", "Сancel");
    const confirmBtn = createElement("button", "modal__confirm", "Confirm");
    const optionModal = createElement("option", "option_menu", "Option")

    getUsersFromApi()

    titleModal.placeholder = "Title";
    modalDescription.placeholder = "Description";
    titleModal.dataset.type = "modalTitle";
    modalDescription.dataset.type = "descriptionModal";
    selectModal.dataset.type = "modalSelect";
    cancelBtn.dataset.type = "btnCancel";
    confirmBtn.dataset.type = "btnConfirm";
    optionModal.dataset.type = "modalOption";
    
    modalOptions.append(selectModal, cancelBtn, confirmBtn);
    modalWindow.append(titleModal, modalDescription, modalOptions);
    selectModal.append(optionModal);

    return modalWindow;
};

// Function for generate Todo
function generateTodo(todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
  const todoContainer = createElement("div", "container");
  const todoElementTitle = createElement("h4", "title_todo", todoTitle);
  const todoElementDescription = createElement("p", "description_todo", todoDesk);
  const todoElementUser = createElement("p", "user_todo", todoUser);
  const todoEditBtn = createElement("button", "edit_button", "Edit");
  const todoDeleteBtn = createElement("button", "delete_button", "Delete");
  const todoElementTime = createElement("span", "time_todo ", todoTime);
  const todoConversionBtn = createElement("button", "conversion_todo", "➣");
  const todoSelectModal = createElement("select", "modal__list", "Select User");
  const todoOptionModal = createElement("option", "option_menu", "Option")

  todoContainer.append(
    todoElementTitle,
    todoElementDescription,
    todoElementUser,
    todoEditBtn,
    todoDeleteBtn,
    todoElementTime,
    todoConversionBtn,
    todoSelectModal,
    todoOptionModal
  );

  todoSelectModal.append(todoOptionModal)


todoContainer.dataset.id = todoId;
todoContainer.dataset.isProgress = isProgress;
  todoEditBtn.dataset.type = "todoEditBtn";
  todoDeleteBtn.dataset.type = "todoDeleteBtn";
  todoConversionBtn.dataset.type = "todoConversionBtn";
  todoSelectModal.dataset.type = "todoSelectModal";

  return todoContainer;
};

export { generateTodo }

// Launch time in header
setInterval(myTime, 1000);
document.addEventListener('DOMContentLoaded', getUsersFromApi);

const box = document.querySelector("#todo-box");

addBtn.addEventListener("click", () => {
  main.append(generateModalTask());
  });

  

//   main.addEventListener("click", (event) => {
//     const { target } = event;
//     const { dataset } = target;
    
//     if (target === event.curentTarget) return;
//     if(event.target.dataset.type === "todoSelectModal") {
//             return new Promise((response) => {
//                 fetch("https://jsonplaceholder.typicode.com/users")
//                     .then(response => response.json())
//                     .then(users => response(users))
//             })
//         getUsersFromApi().then(users => {
//             users.forEach(user => {
//               todoOptionModal.append(user.name)
//             })
//         })

//     }
// })
