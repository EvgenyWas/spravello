const nodes = {
todobox: document.querySelector("#todo-box"),
inprogresBox: document.querySelector("#inprogress-box"),
doneBox: document.querySelector("#done-box"),
};

const Counter = function ({ todobox, inprogresBox, doneBox }) {
  this.todobox = todobox,
    this.inprogresBox = inprogresBox,
    this.doneBox = doneBox,
    (this.changeCount = function () {
      let count = arrayOfTodos.filter((e) => e.isProgress === "start").length;
      this.todobox.innerText = count;
      let countProgress = arrayOfTodos.filter(
        (e) => e.isProgress === "inprogress"
      ).length;
      this.inprogresBox.innerText = countProgress;
      let countDone = arrayOfTodos.filter(
        (e) => e.isProgress === "done"
      ).length;
      this.doneBox.innerText = countDone;
    });
};

const counter = new Counter(nodes);

counter.changeCount();
