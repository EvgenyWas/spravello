parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qkuN":[function(require,module,exports) {
"use strict";function e(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=document.createElement(e);n.className=t;var a=document.createTextNode(r);return n.append(a),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=e;
},{}],"DCju":[function(require,module,exports) {
"use strict";function e(){document.querySelector("#time").innerHTML=(new Date).toLocaleString("ru",{timeZone:"Europe/Minsk",timeStyle:"short",hourCycle:"h23"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.myTime=e;
},{}],"oHwm":[function(require,module,exports) {
"use strict";function e(){return new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e(t)})}).then(function(e){return t(e)})}function t(e){e.forEach(function(e){var t=document.querySelector(".modal__list"),n=document.createElement("option");n.className="modal__item",n.innerText=e.username,t.append(n)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUsersFromApi=e;
},{}],"F7cq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.changeCount=void 0;var o=require("./todo.js"),e={todobox:document.querySelector("#todo-counter"),inprogresBox:document.querySelector("#inprogress-counter"),doneBox:document.querySelector("#done-counter")},r=function(e){var r=e.todobox,t=e.inprogresBox,n=e.doneBox;this.todobox=r,this.inprogresBox=t,this.doneBox=n,this.changeCount=function(){var e=o.arrayOfTodos.filter(function(o){return"start"===o.isProgress}).length,r=o.arrayOfTodos.filter(function(o){return"inProgress"===o.isProgress}).length,t=o.arrayOfTodos.filter(function(o){return"done"===o.isProgress}).length;this.todobox.innerText=e,this.inprogresBox.innerText=r,this.doneBox.innerText=t}},t=function(){return new r(e).changeCount()};exports.changeCount=t;
},{"./todo.js":"SCda"}],"M0Hn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateModalTask=void 0,exports.generateTodo=r,exports.generateWarning=d;var e=require("../templates/templates"),t=require("../services/getUsersFromApi"),a=require("./todo"),n=function(){var t=(0,e.createElement)("div","modal__window"),a=(0,e.createElement)("textarea","modal__title"),n=(0,e.createElement)("textarea","modal__description"),r=(0,e.createElement)("div","modal__options"),o=(0,e.createElement)("select","modal__list","Select User"),d=(0,e.createElement)("button","modal__cancel","Сancel"),l=(0,e.createElement)("button","modal__confirm","Confirm");return a.placeholder="Title",n.placeholder="Description",t.dataset.type="windowModal",a.dataset.type="modalTitle",n.dataset.type="descriptionModal",o.dataset.type="modalSelect",d.dataset.type="btnCancel",l.dataset.type="btnConfirm",l.id="confirmBtnId",d.id="cancelBtnId",document.getElementById("overlay").classList.add("is-show"),r.append(o,d,l),t.append(a,n,r),t};function r(t,a,n,r,o,d){var l=(0,e.createElement)("div","task"),s=(0,e.createElement)("div","task__header"),i=(0,e.createElement)("div","task__footer"),c=(0,e.createElement)("h4","task__title",a),m=(0,e.createElement)("p","task__desc",n),p=(0,e.createElement)("p","task__user",r),_=(0,e.createElement)("button","task__btn-edit","Edit"),u=(0,e.createElement)("button","task__btn-delete","Delete"),E=(0,e.createElement)("span","task__time",o),v=(0,e.createElement)("button","task__btn-conversion","➣");return s.append(_,u,v),i.append(p,E),l.append(s,c,m,i),l.dataset.id=t,l.dataset.isProgress=d,_.dataset.type="todoEditBtn",u.dataset.type="todoDeleteBtn",v.dataset.type="todoConversionBtn",l.className="inProgress"===d?"task task--inprogress":"task",l}exports.generateModalTask=n;var o=document.querySelector("#add-button");function d(){var t=(0,e.createElement)("div","modal-warning__container"),a=(0,e.createElement)("h3","modal-warning__title","Warning!"),n=(0,e.createElement)("div","modal-warning__buttons"),r=(0,e.createElement)("button","modal-warning__cancel__btn","Cancel"),o=(0,e.createElement)("button","modal-warning__confirm-btn","Confirm");return t.append(a,n),n.append(r,o),r.dataset.type="Cancel",o.dataset.type="Confirm",t}o.addEventListener("click",function(){main.append(n()),(0,t.getUsersFromApi)()});
},{"../templates/templates":"qkuN","../services/getUsersFromApi":"oHwm","./todo":"SCda"}],"Now9":[function(require,module,exports) {
"use strict";function e(){return(new Date).toLocaleString("ru").slice(0,-3)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.dateToLocaleString=e;
},{}],"SCda":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.arrayOfTodos=void 0;var e=require("./changeCount"),t=require("./functionsForDom"),o=require("../templates/tools"),n=[];exports.arrayOfTodos=n;var r=function(e,t,o,n,r,a){this.todoId=e,this.todoTitle=t,this.todoDesk=o,this.todoUser=n,this.todoTime=r,this.isProgress=a};main.addEventListener("click",function(a){var i=a.target,s=i.dataset;if(i!==a.curentTarget){if("btnCancel"===s.type&&(i.parentNode.parentNode.remove(),overlay.classList.remove("is-show")),"btnConfirm"===s.type){var d=i.parentNode.previousSibling.previousSibling,c=i.parentNode.previousSibling,l=i.previousSibling.previousSibling,u=Date.now(),v=document.getElementById("todo-tasks");if(""===d.value||""===c.value)return;overlay.classList.remove("is-show"),i.parentNode.parentNode.remove();var m=new r(u,d.value,c.value,l.value,(0,o.dateToLocaleString)(),"start");v.append((0,t.generateTodo)(u,d.value,c.value,l.value,(0,o.dateToLocaleString)(),"start")),n.push(m),d.value="",c.value="",(0,e.changeCount)()}if("todoDeleteBtn"===s.type){var p=n.findIndex(function(e){return+e.todoId==+i.closest(".task").dataset.id});i.closest(".task").remove(),n.splice(p,1),(0,e.changeCount)()}if("todoConversionBtn"===s.type){var g=n.findIndex(function(e){return+e.todoId==+i.closest(".task").dataset.id}),f=document.querySelector("#inprogress-tasks");n[g].isProgress="inProgress",i.closest(".task").remove();var y=n[g];f.append((0,t.generateTodo)(y.todoId,y.todoTitle,y.todoDesk,y.todoUser,y.todoTime,y.isProgress))}(0,e.changeCount)()}}),document.addEventListener("keydown",function(e){var t=document.getElementById("confirmBtnId");t&&"Enter"==e.key&&t.click()}),document.addEventListener("keydown",function(e){var t=document.getElementById("cancelBtnId");t&&"Escape"==e.key&&t.click()}),modalCancelBtn.addEventListener("click",function(e){document.querySelector(".main").removeChild(modalContainer)}),modalConfirmBtn.addEventListener("click",function(e){});
},{"./changeCount":"F7cq","./functionsForDom":"M0Hn","../templates/tools":"Now9"}],"g2Hq":[function(require,module,exports) {
"use strict";var e=require("./templates/templates"),r=require("./services/worldTimeApi"),s=require("./services/getUsersFromApi"),i=require("./components/todo.js"),t=require("./components/functionsForDom");setInterval(r.myTime,1e3);
},{"./templates/templates":"qkuN","./services/worldTimeApi":"DCju","./services/getUsersFromApi":"oHwm","./components/todo.js":"SCda","./components/functionsForDom":"M0Hn"}]},{},["g2Hq"], null)