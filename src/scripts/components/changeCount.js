import { arrayOfTodos } from "./todo.js"

const nodes = {
  todobox: document.querySelector("#todo-counter"),
  inprogresBox: document.querySelector("#inprogress-counter"),
  doneBox: document.querySelector("#done-counter"),
};

const Counter = function ({ todobox, inprogresBox, doneBox }) {
  this.todobox = todobox,
  this.inprogresBox = inprogresBox,
  this.doneBox = doneBox,

  (this.changeCount = function () {
    let count = arrayOfTodos.filter((e) => e.isProgress === "start").length;
    let countProgress = arrayOfTodos.filter((e) => e.isProgress === "inProgress").length;
    let countDone = arrayOfTodos.filter((e) => e.isProgress === "done").length;

    this.todobox.innerText = count;
    this.inprogresBox.innerText = countProgress;
    this.doneBox.innerText = countDone;
  });
};

const changeCount = () => {
  let obj = new Counter(nodes);
  return obj.changeCount();
};

export { changeCount };