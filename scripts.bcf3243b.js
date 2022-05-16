// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/services/myTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myTime = myTime;

function myTime() {
  document.querySelector("#time").innerHTML = new Date().toLocaleString("ru", {
    timeZone: "Europe/Minsk",
    timeStyle: "short",
    hourCycle: "h23"
  });
}

;
},{}],"scripts/services/getUsersFromApi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsersFromApi = getUsersFromApi;

function getUsersFromApi(node) {
  return new Promise(function (response) {
    fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {
      return response.json();
    }).then(function (users) {
      return response(users);
    });
  }).then(function (users) {
    return pushUsersToSelect(users, node);
  });
}

function pushUsersToSelect(users, node) {
  users.forEach(function (user) {
    var option = document.createElement("option");
    option.className = "user";
    option.innerText = user.username;
    node.append(option);
  });
}
},{}],"scripts/templates/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;

function createElement(tag, className) {
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var element = document.createElement(tag);
  element.className = className;
  var textElement = document.createTextNode(text);
  element.append(textElement);
  return element;
}

;
},{}],"scripts/components/functionsForDom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateModalTask = void 0;
exports.generateTodo = generateTodo;
exports.generateWarning = generateWarning;

var _templates = require("../templates/templates");

var generateModalTask = function generateModalTask() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var desc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var modalWindow = (0, _templates.createElement)("div", "modal__window");
  var titleModal = (0, _templates.createElement)("textarea", "modal__title", title);
  var modalDescription = (0, _templates.createElement)("textarea", "modal__description", desc);
  var modalOptions = (0, _templates.createElement)("div", "modal__options");
  var selectModal = (0, _templates.createElement)("select", "modal__list", "Select User");
  var cancelBtn = (0, _templates.createElement)("button", "modal__cancel", "Сancel");
  var confirmBtn = (0, _templates.createElement)("button", "modal__confirm", "Confirm");
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
  modalWindow.id = "modalWindow";
  var overlay = document.getElementById("overlay");
  overlay.classList.add("is-show");
  modalOptions.append(selectModal, cancelBtn, confirmBtn);
  modalWindow.append(titleModal, modalDescription, modalOptions);
  return modalWindow;
};

exports.generateModalTask = generateModalTask;

function generateTodo(todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
  var todoContainer = (0, _templates.createElement)("div", "task");
  var todoContainerHeader = (0, _templates.createElement)("div", "task__header");
  var todoContainerFooter = (0, _templates.createElement)("div", "task__footer");
  var todoElementTitle = (0, _templates.createElement)("h4", "task__title", todoTitle);
  var todoElementDescription = (0, _templates.createElement)("p", "task__desc", todoDesk);
  var todoElementUser = (0, _templates.createElement)("p", "task__user", todoUser);
  var todoEditBtn = (0, _templates.createElement)("button", "task__btn-edit", "Edit");
  var todoDeleteBtn = (0, _templates.createElement)("button", "task__btn-delete", "Delete");
  var todoElementTime = (0, _templates.createElement)("span", "task__time", todoTime);
  var todoConversionBtn = (0, _templates.createElement)("button", "task__btn-conversion", "➣");
  var todoBackBtn = (0, _templates.createElement)("button", "task__btn-back", "Back");
  var todoCompleteBtn = (0, _templates.createElement)("button", "task__btn-complete", "Complete");
  todoContainerHeader.append(todoEditBtn, todoDeleteBtn, todoConversionBtn, todoBackBtn, todoCompleteBtn);
  todoContainerFooter.append(todoElementUser, todoElementTime);
  todoContainer.append(todoContainerHeader, todoElementTitle, todoElementDescription, todoContainerFooter);
  todoContainer.dataset.id = todoId;
  todoContainer.dataset.isProgress = isProgress;
  todoEditBtn.dataset.type = "todoEditBtnId";
  todoDeleteBtn.dataset.type = "todoDeleteBtn";
  todoConversionBtn.dataset.type = "todoConversionBtn";
  todoBackBtn.dataset.type = "todoBackBtn";
  todoCompleteBtn.dataset.type = "todoCompleteBtn";
  todoEditBtn.id = "todoEditBtnId";
  todoContainer.dataset.type = "todoContainer";
  todoElementTitle.id = "todoTitle";
  todoElementDescription.id = "todoDesc";
  todoElementUser.id = "todoUser";
  todoContainer.draggable = true;

  if (isProgress === "start") {
    todoCompleteBtn.hidden = "true";
    todoBackBtn.hidden = "true";
  } else if (isProgress === "inProgress") {
    todoContainer.className = "task task--inprogress";
    todoEditBtn.hidden = "true";
    todoConversionBtn.hidden = "true";
    todoDeleteBtn.hidden = "delete";
  } else if (isProgress === "done") {
    todoContainer.className = "task task--done";
    todoContainerHeader.className = "task__header task__header--done";
    todoDeleteBtn.className = "task__btn-delete task__btn-delete--header";
    todoEditBtn.hidden = "true";
    todoConversionBtn.hidden = "true";
    todoCompleteBtn.hidden = "true";
    todoBackBtn.hidden = "true";
    todoContainerHeader.append(todoElementTitle);
  }

  ;
  return todoContainer;
}

function generateWarning(_ref) {
  var onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel;
  var modalContainer = (0, _templates.createElement)("div", "modal-warning__container");
  var modalTitle = (0, _templates.createElement)("h3", "modal-warning__title", "Warning!");
  var modalButtons = (0, _templates.createElement)("div", "modal-warning__buttons");
  var modalCancelBtn = (0, _templates.createElement)("button", "modal-warning__cancel__btn", "Cancel");
  var modalConfirmBtn = (0, _templates.createElement)("button", "modal-warning__confirm-btn", "Confirm");
  modalContainer.append(modalTitle, modalButtons);
  modalButtons.append(modalCancelBtn, modalConfirmBtn);
  var overlay = document.getElementById("overlay");
  modalCancelBtn.dataset.type = "cancelWarning";
  modalConfirmBtn.dataset.type = "confirmWarning";
  modalConfirmBtn.id = "confirmWarningId";
  modalCancelBtn.id = "cancelWarningId";
  modalContainer.id = "modalContainer";
  modalCancelBtn.addEventListener("click", function () {
    onCancel();
    document.querySelector("#modalContainer").remove();
    overlay.classList.remove("is-show");
  });
  modalConfirmBtn.addEventListener("click", function () {
    onConfirm();
    document.querySelector("#modalContainer").remove();
    overlay.classList.remove("is-show");
  });
  overlay.classList.add("is-show");
  return modalContainer;
}
},{"../templates/templates":"scripts/templates/templates.js"}],"scripts/components/changeCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeCount = void 0;

var _todo = require("./todo.js");

var nodes = {
  todobox: document.querySelector("#todo-counter"),
  inprogresBox: document.querySelector("#inprogress-counter"),
  doneBox: document.querySelector("#done-counter")
};

var Counter = function Counter(_ref) {
  var todobox = _ref.todobox,
      inprogresBox = _ref.inprogresBox,
      doneBox = _ref.doneBox;
  this.todobox = todobox, this.inprogresBox = inprogresBox, this.doneBox = doneBox, this.changeCount = function () {
    var count = _todo.arrayOfTodos.filter(function (e) {
      return e.isProgress === "start";
    }).length;

    var countProgress = _todo.arrayOfTodos.filter(function (e) {
      return e.isProgress === "inProgress";
    }).length;

    var countDone = _todo.arrayOfTodos.filter(function (e) {
      return e.isProgress === "done";
    }).length;

    this.todobox.innerText = count;
    this.inprogresBox.innerText = countProgress;
    this.doneBox.innerText = countDone;
  };
};

var changeCount = function changeCount() {
  var obj = new Counter(nodes);
  return obj.changeCount();
};

exports.changeCount = changeCount;
},{"./todo.js":"scripts/components/todo.js"}],"scripts/templates/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.appendToList = appendToList;
exports.dateToLocaleString = dateToLocaleString;

var _functionsForDom = require("../components/functionsForDom");

var _todo = require("../components/todo");

// Function for time of generateTodo
function dateToLocaleString() {
  var time = new Date();
  var newTime = time.toLocaleString("ru").slice(0, -3);
  return newTime;
}

; // Function for add a todo in defently list

function addTodo(list, node) {
  list.forEach(function (todo) {
    return node.append((0, _functionsForDom.generateTodo)(todo.todoId, todo.todoTitle, todo.todoDesk, todo.todoUser, todo.todoTime, todo.isProgress));
  });
}

; // Function for add a todo in defently array

function appendToList(arr, node) {
  arr.forEach(function (task) {
    node.append((0, _functionsForDom.generateTodo)(task.todoId, task.todoTitle, task.todoDesk, task.todoUser, task.todoTime, task.isProgress));

    _todo.arrayOfTodos.push(task);
  });
}

;
},{"../components/functionsForDom":"scripts/components/functionsForDom.js","../components/todo":"scripts/components/todo.js"}],"scripts/components/todo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dragAndDrop = exports.arrayOfTodos = void 0;

var _changeCount = require("./changeCount");

var _functionsForDom = require("./functionsForDom");

var _utils = require("../templates/utils");

var _getUsersFromApi = require("../services/getUsersFromApi");

var _localStorageApi = require("../services/localStorageApi");

var arrayOfTodos = [];
exports.arrayOfTodos = arrayOfTodos;
var editCounter = 0;
var selectedTodo;

var TodoCreation = function TodoCreation(todoId, todoTitle, todoDesk, todoUser, todoTime, isProgress) {
  this.todoId = todoId;
  this.todoTitle = todoTitle;
  this.todoDesk = todoDesk;
  this.todoUser = todoUser;
  this.todoTime = todoTime;
  this.isProgress = isProgress;
}; // delegated events for todo via main


main.addEventListener("click", function (event) {
  var target = event.target;
  var dataset = target.dataset;
  if (target === event.currentTarget) return;

  if (dataset.type === "btnCancel") {
    target.parentNode.parentNode.remove();
    overlay.classList.remove("is-show");
    editCounter = 0;
  }

  ;

  if (dataset.type === "btnConfirm") {
    var title = target.parentNode.previousSibling.previousSibling;
    var desk = target.parentNode.previousSibling;
    var todoUser = target.previousSibling.previousSibling;
    var todoId = Date.now();
    var todoBox = document.getElementById("todo-tasks");
    overlay.classList.remove("is-show");
    if (title.value === "" || desk.value === "") return;

    if (editCounter) {
      editCounter = 0;
      var titleId = document.querySelector("[data-type = 'modalTitle']");
      var descId = document.querySelector("[data-type = 'descriptionModal']");
      var selectId = document.querySelector("[data-type = 'modalSelect']");
      var taskTitle = document.getElementById("todoTitle");
      var taskDesk = document.getElementById("todoDesc");
      var taskUser = document.getElementById("todoUser");
      arrayOfTodos[selectedTodo].todoTitle = titleId.value;
      arrayOfTodos[selectedTodo].todoDesk = descId.value;
      arrayOfTodos[selectedTodo].todoUser = selectId.value;
      taskTitle.innerText = titleId.value;
      taskDesk.innerText = descId.value;
      taskUser.innerText = selectId.value;
      target.parentNode.parentNode.remove();

      _localStorageApi.LOCAL_STORAGE_API.setStorageData(arrayOfTodos);

      return;
    }

    ;
    target.parentNode.parentNode.remove();
    var todo = new TodoCreation(todoId, title.value, desk.value, todoUser.value, (0, _utils.dateToLocaleString)(), "start");
    todoBox.append((0, _functionsForDom.generateTodo)(todoId, title.value, desk.value, todoUser.value, (0, _utils.dateToLocaleString)(), "start"));
    arrayOfTodos.push(todo);
    title.value = "";
    desk.value = "";
    (0, _changeCount.changeCount)();

    _localStorageApi.LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
  }

  ;

  if (dataset.type === "todoDeleteBtn") {
    var selectedTodoDelete = arrayOfTodos.findIndex(function (todo) {
      return +todo.todoId === +target.closest(".task").dataset.id;
    });
    target.closest(".task").remove();
    arrayOfTodos.splice(selectedTodoDelete, 1);
    (0, _changeCount.changeCount)();

    _localStorageApi.LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
  }

  ;

  if (dataset.type === "todoConversionBtn" || dataset.type === "todoBackBtn" || dataset.type === "todoCompleteBtn") {
    var swapTodo = function swapTodo(unit, node) {
      targetTodo.isProgress = unit;
      node.append((0, _functionsForDom.generateTodo)(targetTodo.todoId, targetTodo.todoTitle, targetTodo.todoDesk, targetTodo.todoUser, targetTodo.todoTime, targetTodo.isProgress));
      target.closest(".task").remove();
    };

    var _selectedTodo = arrayOfTodos.findIndex(function (todo) {
      return +todo.todoId === +target.closest(".task").dataset.id;
    });

    var _todo = document.querySelector("#todo-tasks");

    var done = document.querySelector("#done-tasks");
    var inprogress = document.querySelector("#inprogress-tasks");
    var targetTodo = arrayOfTodos[_selectedTodo];
    ;

    if (dataset.type === "todoConversionBtn") {
      if (document.getElementById("inprogress-tasks").childElementCount < 6) {
        swapTodo("inProgress", inprogress);
      } else {
        main.append((0, _functionsForDom.generateWarning)({
          onConfirm: function onConfirm() {
            return swapTodo("inProgress", inprogress);
          },
          onCancel: function onCancel() {
            return;
          }
        }));
      }
    }

    if (dataset.type === "todoBackBtn") swapTodo("start", _todo);
    if (dataset.type === "todoCompleteBtn") swapTodo("done", done);
    (0, _changeCount.changeCount)();

    _localStorageApi.LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
  }

  ;

  if (dataset.type === "todoEditBtnId") {
    editCounter = 1;
    selectedTodo = arrayOfTodos.findIndex(function (todo) {
      return +todo.todoId === +target.closest(".task").dataset.id;
    });
    main.append((0, _functionsForDom.generateModalTask)(arrayOfTodos[selectedTodo].todoTitle, arrayOfTodos[selectedTodo].todoDesk));
    var userOpt = document.querySelector(".modal__list");
    (0, _getUsersFromApi.getUsersFromApi)(userOpt);
  }

  ;
  (0, _changeCount.changeCount)();

  _localStorageApi.LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
}); // Button Delete all

var deleteBtn = document.querySelector("#deleteall-button");
deleteBtn.addEventListener("click", function () {
  main.append((0, _functionsForDom.generateWarning)({
    onConfirm: function onConfirm() {
      var done = document.querySelector("#done-tasks");
      done.innerHTML = "";
      exports.arrayOfTodos = arrayOfTodos = arrayOfTodos.filter(function (todo) {
        return todo.isProgress !== "done";
      });
    },
    onCancel: function onCancel() {}
  }));
}); // Listeners for keydowns Enter and Escapes for modal winwdows

document.addEventListener("keydown", function (event) {
  var enterButton = document.getElementById("confirmBtnId");
  if (!enterButton) return;

  if (event.key == "Enter") {
    enterButton.click();
  }
});
document.addEventListener("keydown", function (event) {
  var escapeButton = document.getElementById("cancelBtnId");
  if (!escapeButton) return;

  if (event.key == "Escape") {
    escapeButton.click();
  }
});
document.addEventListener("keydown", function (event) {
  var escapeBtn = document.getElementById("cancelWarningId");
  if (!escapeBtn) return;

  if (event.key == "Escape") {
    escapeBtn.click();
  }
});
document.addEventListener("keydown", function (event) {
  var enterBtn = document.getElementById("confirmWarningId");
  if (!enterBtn) return;

  if (event.key == "Enter") {
    enterBtn.click();
  }
}); // Close modal windows for a click outside

overlay.addEventListener("click", function () {
  document.querySelector("#modalContainer").remove();
  overlay.classList.remove("is-show");
});
overlay.addEventListener("click", function () {
  document.querySelector("#modalWindow").remove();
  overlay.classList.remove("is-show");
}); // Filter in header

var filterButton = document.getElementById("filter-button");
filterButton.addEventListener("click", function () {
  var select = document.getElementById("filter");
  var listTodo = document.getElementById("todo-tasks");
  var listInProgress = document.getElementById("inprogress-tasks");
  var listDone = document.getElementById("done-tasks");
  listTodo.innerHTML = "";
  listInProgress.innerHTML = "";
  listDone.innerHTML = "";

  if (select.value === 'All') {
    var tasksInTodo = arrayOfTodos.filter(function (task) {
      return task.isProgress === 'start';
    });
    var tasksInInprogress = arrayOfTodos.filter(function (task) {
      return task.isProgress === 'inProgress';
    });
    var tasksInDone = arrayOfTodos.filter(function (task) {
      return task.isProgress === 'done';
    });
    (0, _utils.addTodo)(tasksInTodo, listTodo);
    (0, _utils.addTodo)(tasksInInprogress, listInProgress);
    (0, _utils.addTodo)(tasksInDone, listDone);
    return;
  }

  ;
  var filteredArrayTodo = arrayOfTodos.filter(function (todo) {
    return todo.todoUser === select.value && todo.isProgress === "start";
  });
  var filteredArrayInProgress = arrayOfTodos.filter(function (todo) {
    return todo.todoUser === select.value && todo.isProgress === "inProgress";
  });
  var filteredArrayDone = arrayOfTodos.filter(function (todo) {
    return todo.todoUser === select.value && todo.isProgress === "done";
  });
  (0, _utils.addTodo)(filteredArrayTodo, listTodo);
  (0, _utils.addTodo)(filteredArrayInProgress, listInProgress);
  (0, _utils.addTodo)(filteredArrayDone, listDone);
});
var addBtn = document.querySelector("#add-button");
addBtn.addEventListener("click", function () {
  main.append((0, _functionsForDom.generateModalTask)());
  var userOpt = document.querySelector(".modal__list");
  (0, _getUsersFromApi.getUsersFromApi)(userOpt);
}); // Drag&Drop

var dragged;

var dragAndDrop = function dragAndDrop() {
  var todoContainerFirst = document.querySelector(".todo__container");
  var todoContainerInProgress = document.querySelector(".inprogress__container");
  var todoContainerDone = document.querySelector(".done__container");

  var dragStart = function dragStart(event) {
    dragged = event.target;
    event.dataTransfer.setData("id", event.target.dataset.id);
  };

  var dragOver = function dragOver(event) {
    event.preventDefault();
  };

  var dragEnter = function dragEnter(event) {
    event.preventDefault();
  };

  var dragDrop = function dragDrop(event) {
    this.childNodes[3].append(dragged);
    var taskId = event.dataTransfer.getData("id");
    var droppedTask = arrayOfTodos.filter(function (todo) {
      return +todo.todoId === +taskId;
    });
    var todoContainerHeader = dragged.childNodes[1];
    var todoDeleteBtn = dragged.querySelector("[data-type = 'todoDeleteBtn']");
    var todoEditBtn = dragged.querySelector("[data-type = 'todoEditBtnId']");
    var todoConversionBtn = dragged.querySelector("[data-type = 'todoConversionBtn']");
    var todoCompleteBtn = dragged.querySelector("[data-type = 'todoCompleteBtn']");
    var todoBackBtn = dragged.querySelector("[data-type = 'todoBackBtn']");
    var todoElementTitle = dragged.querySelector('#todoTitle');

    if (event.target.closest(".inprogress")) {
      droppedTask[0].isProgress = "inProgress";
      dragged.className = "task task--inprogress";
      todoEditBtn.hidden = true;
      todoConversionBtn.hidden = true;
      todoDeleteBtn.hidden = true;
      todoContainerHeader.className = "task__header task__header--inprogress";
      todoBackBtn.hidden = false;
      todoCompleteBtn.hidden = false;
    }

    ;

    if (event.target.closest(".done")) {
      droppedTask[0].isProgress = "done";
      dragged.className = "task task--done";
      todoContainerHeader.className = "task__header task__header--done";
      todoDeleteBtn.className = "task__btn-delete task__btn-delete--header";
      todoEditBtn.hidden = true;
      todoConversionBtn.hidden = true;
      todoCompleteBtn.hidden = true;
      todoBackBtn.hidden = true;
      todoDeleteBtn.hidden = false;
      todoContainerHeader.append(todoBackBtn, todoCompleteBtn);
    }

    ;

    if (event.target.closest(".todo")) {
      droppedTask[0].isProgress = "start";
      dragged.className = "task task--todo";
      todoCompleteBtn.hidden = true;
      todoBackBtn.hidden = true;
      todoContainerHeader.className = "task__header task__header--todo";
      todoEditBtn.className = "task__btn-edit";
      todoDeleteBtn.className = "task__btn-delete";
      todoConversionBtn.className = "task__btn-conversion";
      todoEditBtn.hidden = false;
      todoDeleteBtn.hidden = false;
      todoConversionBtn.hidden = false;
    }

    ;
    exports.arrayOfTodos = arrayOfTodos = arrayOfTodos.filter(function (todo) {
      return +todo.todoId !== +taskId;
    });
    arrayOfTodos.push(droppedTask[0]);
    (0, _changeCount.changeCount)();

    _localStorageApi.LOCAL_STORAGE_API.setStorageData(arrayOfTodos);
  };

  todoContainerFirst.addEventListener("dragstart", dragStart);
  todoContainerFirst.addEventListener("dragover", dragOver);
  todoContainerFirst.addEventListener("dragenter", dragEnter);
  todoContainerFirst.addEventListener("drop", dragDrop);
  todoContainerInProgress.addEventListener("dragstart", dragStart);
  todoContainerInProgress.addEventListener("dragover", dragOver);
  todoContainerInProgress.addEventListener("dragenter", dragEnter);
  todoContainerInProgress.addEventListener("drop", dragDrop);
  todoContainerDone.addEventListener("dragstart", dragStart);
  todoContainerDone.addEventListener("dragover", dragOver);
  todoContainerDone.addEventListener("dragenter", dragEnter);
  todoContainerDone.addEventListener("drop", dragDrop);
};

exports.dragAndDrop = dragAndDrop;
},{"./changeCount":"scripts/components/changeCount.js","./functionsForDom":"scripts/components/functionsForDom.js","../templates/utils":"scripts/templates/utils.js","../services/getUsersFromApi":"scripts/services/getUsersFromApi.js","../services/localStorageApi":"scripts/services/localStorageApi.js"}],"scripts/services/localStorageApi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCAL_STORAGE_API = void 0;

var _functionsForDom = require("../components/functionsForDom");

var _todo = require("../components/todo");

var _utils = require("../templates/utils");

var LOCAL_STORAGE_API = {
  key: {
    tasks: "tasks-data"
  },
  getStorageData: function getStorageData() {
    var data = JSON.parse(localStorage.getItem(this.key.tasks));
    return data ? data : [];
  },
  setStorageData: function setStorageData(data) {
    localStorage.setItem(this.key.tasks, JSON.stringify(data));
  },
  addTasksFromStorageData: function addTasksFromStorageData() {
    var listTodo = document.getElementById('todo-tasks');
    var listInProgress = document.getElementById('inprogress-tasks');
    var listDone = document.getElementById('done-tasks');
    var storageData = this.getStorageData();
    var tasksInTodo = storageData.filter(function (task) {
      return task.isProgress === 'start';
    });
    var tasksInInprogress = storageData.filter(function (task) {
      return task.isProgress === 'inProgress';
    });
    var tasksInDone = storageData.filter(function (task) {
      return task.isProgress === 'done';
    });
    (0, _utils.appendToList)(tasksInTodo, listTodo);
    (0, _utils.appendToList)(tasksInInprogress, listInProgress);
    (0, _utils.appendToList)(tasksInDone, listDone);
  }
};
exports.LOCAL_STORAGE_API = LOCAL_STORAGE_API;
},{"../components/functionsForDom":"scripts/components/functionsForDom.js","../components/todo":"scripts/components/todo.js","../templates/utils":"scripts/templates/utils.js"}],"scripts/components/toast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var options = {
  message: "Данная страница создана командой Spravello!",
  root: document.querySelector("#toast"),
  OPEN_DELAY: 10000,
  CLOSE_DELAY: 5000
};

var _handleToast = /*#__PURE__*/new WeakMap();

var _open = /*#__PURE__*/new WeakMap();

var _close = /*#__PURE__*/new WeakMap();

var _closeTimeout = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakMap();

var Toast = /*#__PURE__*/_createClass(function Toast(_ref) {
  var _this = this;

  var message = _ref.message,
      root = _ref.root,
      OPEN_DELAY = _ref.OPEN_DELAY,
      CLOSE_DELAY = _ref.CLOSE_DELAY;

  _classCallCheck(this, Toast);

  _classPrivateFieldInitSpec(this, _handleToast, {
    writable: true,
    value: function value(event) {
      if (event.target.type === "button") {
        _classPrivateFieldGet(_this, _close).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _open, {
    writable: true,
    value: function value() {
      var _this2 = this;

      setTimeout(function () {
        _this2.root.classList.add("toast--visible");
      }, this.OPEN_DELAY);
    }
  });

  _classPrivateFieldInitSpec(this, _close, {
    writable: true,
    value: function value() {
      this.root.classList.remove("toast--visible");
    }
  });

  _classPrivateFieldInitSpec(this, _closeTimeout, {
    writable: true,
    value: function value() {
      var _this3 = this;

      setTimeout(function () {
        _this3.root.classList.remove("toast--visible");
      }, this.OPEN_DELAY + this.CLOSE_DELAY);
    }
  });

  _classPrivateFieldInitSpec(this, _render, {
    writable: true,
    value: function value() {
      this.root.querySelector(".toast__title").textContent = this.message;
    }
  });

  this.root = root;
  this.message = message;
  this.OPEN_DELAY = OPEN_DELAY;
  this.CLOSE_DELAY = CLOSE_DELAY;

  this.init = function () {
    _classPrivateFieldGet(this, _render).call(this);

    _classPrivateFieldGet(this, _open).call(this);

    _classPrivateFieldGet(this, _closeTimeout).call(this);

    this.root.addEventListener("click", _classPrivateFieldGet(this, _handleToast));
  };
});

var toast = new Toast(options);
exports.toast = toast;
},{}],"scripts/index.js":[function(require,module,exports) {
"use strict";

var _myTime = require("./services/myTime");

var _getUsersFromApi = require("./services/getUsersFromApi");

var _localStorageApi = require("./services/localStorageApi");

var _changeCount = require("./components/changeCount");

var _todo = require("./components/todo");

var _toast = require("./components/toast");

var selectInHeader = document.getElementById('filter');
window.addEventListener("DOMContentLoaded", app);

function app() {
  _localStorageApi.LOCAL_STORAGE_API.addTasksFromStorageData();

  (0, _changeCount.changeCount)();
  (0, _getUsersFromApi.getUsersFromApi)(selectInHeader);
  (0, _todo.dragAndDrop)();

  _toast.toast.init();
}

; // Launch time in header

setInterval(_myTime.myTime, 1000);
},{"./services/myTime":"scripts/services/myTime.js","./services/getUsersFromApi":"scripts/services/getUsersFromApi.js","./services/localStorageApi":"scripts/services/localStorageApi.js","./components/changeCount":"scripts/components/changeCount.js","./components/todo":"scripts/components/todo.js","./components/toast":"scripts/components/toast.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55773" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)
//# sourceMappingURL=/scripts.bcf3243b.js.map