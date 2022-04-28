const options = {
    message: "Данная страница создана командой Spravello!",
    root: document.querySelector("#toast"),
    OPEN_DELAY: 1500,
    CLOSE_DELAY: 5000,
  };
  
  class Toast {
    constructor({ message, root, OPEN_DELAY, CLOSE_DELAY }) {
      this.root = root;
      this.message = message;
      this.OPEN_DELAY = OPEN_DELAY;
      this.CLOSE_DELAY = CLOSE_DELAY;
  
      this.init = function () {
        this.#render();
        this.#open();
        this.#closeTimeout();
        this.root.addEventListener("click", this.#handleToast);
      };
    }
  
    #handleToast = (event) => {
      if (event.target.type === "button") {
        this.#close();
      }
    };
  
    #open = function () {
      setTimeout(() => {
        this.root.classList.add("toast--visible");
      }, this.OPEN_DELAY);
    };
  
    #close = function () {
      this.root.classList.remove("toast--visible");
    };
  
    #closeTimeout = function () {
      setTimeout(() => {
        this.root.classList.remove("toast--visible");
      }, this.OPEN_DELAY + this.CLOSE_DELAY);
    };
  
    #render = function () {
      this.root.querySelector(".toast__title").textContent = this.message;
    };
  }
  
  const toast = new Toast(options);

  export { toast };