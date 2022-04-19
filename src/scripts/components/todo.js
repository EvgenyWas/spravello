let  arrayOfTodos = [];

const modalCreation = function (modalId, modalTitle, modalDesk, modalUser, modalTime, isProgress) {
    this.modalId = modalId;
    this.modalTitle = modalTitle;
    this.modalDesk = modalDesk;
    this.modalUser = modalUser;
    this.modalTime = modalTime;
    this.isProgress = isProgress;
};

add_button.addEventListener("click", (event) => {
    if (input.value === " ")
        return

    const modalId = Date.now();
    const modal = new modalCreation(modalId, input.value, input.value, input.select, new Date().toString(), start);
    main.append(generateModalTask(modalId, input.value, input.value, input.select, new Date().toString(), start));
})


window.addEventListener('keydown', event => {
    if (event.keyCode === 13) addBtn.click()
})


const generateModalTask = (modalId, modalTitle, modalDesk, modalUser, modalTime, isProgress = start) => {
    const modalWindow = createElement("div", "modal__window");
    const titleModal = createElement("input", "modal__title");
    const modalDescription = createElement("input", "modal__description");
    const modalOptions = createElement("div", "modal__options");
    const selectModal = createElement("select", "modal__list", "Select User");
    const cancelBtn = createElement("button", "modal__cancel", "Cancel");
    const confirmBtn = createElement("confirm", "modal__confirm", "Confirm");

    titleModal.placeholder = "Title";
    modalDescription.placeholder = "Description";
    titleModal.dataset.type = "modalTitle";
    modalDescription.dataset.type = "descriptionModal";
    selectModal.dataset.type = "modalSelect";
    cancelBtn.dataset.type = "btnCancel";
    confirmBtn.dataset.type = "btnConfirm";

main.addEventListener("click", (event) => {
    if(event.target === cancelBtn) {
        modalWindow.remove()
    }
})

    modalOptions.append(selectModal, cancelBtn, confirmBtn);
    modalWindow.append(titleModal, modalDescription, modalOptions);

    return modalWindow;
};

function getUsersFromApi() {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
        .then(res => res.json())
        .then(users => {
            users.forEach(user => {
                const option = document.createElement("option");
                option.className = "modal__item"
                option.value = user.username;
                option.innerText = user.username;
                timeButton.append(option)
            })
        })
}
getUsersFromApi()