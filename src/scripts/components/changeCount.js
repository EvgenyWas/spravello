let arrayOfTodos = [];

const todoCreation = function (
  todoId,
  todoTitle,
  todoDesk,
  todoUser,
  todoTime,
  isProgress
) {
  this.todoId = todoId;
  this.todoTitle = todoTitle;
  this.todoDesk = todoDesk;
  this.todoUser = todoUser;
  this.todoTime = todoTime;
  this.isProgress = isProgress;
};

const one = new todoCreation(1, "hi", "Lorem", "Pavel", "20.04", "start");
const two = new todoCreation(
  2,
  "hello",
  "Lorem",
  "John",
  "20.04",
  "inprogress"
);
const three = new todoCreation(3, "task", "Lorem", "Mark", "20.04", "start");
const four = new todoCreation(4, "goal", "Lorem", "Katya", "20.04", "done");
arrayOfTodos.push(one, two, three, four);

function changeCount(node) {
  const counterTodo = arrayOfTodos.filter(
    (e) => e.isProgress === "start"
  ).length;
  node.innerText = `all Todos: ${counterTodo}`;
};

const Counter = function ({ todobox }) {
   const todobox = document.querySelector("#todo-box");
   const inprogresBox = document.querySelector("#inprogress-box");
   const doneBox = document.querySelector("#done-box");

  (this.todobox = todobox),
    (this.inprogresBox = inprogresBox),
    (this.doneBox = doneBox),
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
