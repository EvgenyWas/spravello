parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qkuN":[function(require,module,exports) {
"use strict";function e(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=document.createElement(e);n.className=t;var a=document.createTextNode(r);return n.append(a),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=e;
},{}],"DCju":[function(require,module,exports) {
"use strict";function e(){document.querySelector("#time").innerHTML=(new Date).toLocaleString("ru",{timeZone:"Europe/Minsk",timeStyle:"short",hourCycle:"h23"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.myTime=e;
},{}],"oHwm":[function(require,module,exports) {
"use strict";function e(){return new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e(t)})}).then(function(e){return t(e)})}function t(e){e.forEach(function(e){var t=document.querySelector(".modal__list"),n=document.createElement("option");n.className="modal__item",n.innerText=e.username,t.append(n)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUsersFromApi=e;
},{}],"SCda":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateModalTask=exports.arrayOfTodos=exports.addBtn=void 0;var e=require("../templates/templates"),t=require("../index"),o=[];exports.arrayOfTodos=o;var a=document.querySelector("#add-button");exports.addBtn=a;var r=function(e,t,o,a,r,s){this.todoId=e,this.todoTitle=t,this.todoDesk=o,this.todoSelect=a,this.todoTime=r,this.isProgress=s},s=function(){var t=(0,e.createElement)("div","modal__window"),o=(0,e.createElement)("textarea","modal__title"),a=(0,e.createElement)("textarea","modal__description"),r=(0,e.createElement)("div","modal__options"),s=(0,e.createElement)("select","modal__list","Select User"),n=(0,e.createElement)("button","modal__cancel","Сancel"),d=(0,e.createElement)("button","modal__confirm","Confirm");return o.placeholder="Title",a.placeholder="Description",t.dataset.type="windowModal",o.dataset.type="modalTitle",a.dataset.type="descriptionModal",s.dataset.type="modalSelect",n.dataset.type="btnCancel",d.dataset.type="btnConfirm",document.getElementById("overlay").classList.add("is-show"),r.append(s,n,d),t.append(o,a,r),t};exports.generateModalTask=s,main.addEventListener("click",function(e){var a=e.target,s=a.dataset;if(a!==e.curentTarget){if("btnCancel"===s.type&&(a.parentNode.parentNode.remove(),overlay.classList.remove("is-show")),"btnConfirm"===s.type){var n=a.parentNode.previousSibling.previousSibling,d=a.parentNode.previousSibling,i=a.previousSibling.previousSibling,l=Date.now(),c=document.getElementById("todo-tasks");if(""===n.value||""===d.value)return;overlay.classList.remove("is-show"),a.parentNode.parentNode.remove();var p=new r(l,n.value,d.value,i.value,(new Date).toLocaleString("ru").slice(0,-3),"start");c.append((0,t.generateTodo)(l,n.value,d.value,i.value,(new Date).toLocaleString("ru").slice(0,-3),"start")),o.push(p),n.value="",d.value="",counter.changeCount()}if("todoDeleteBtn"===s.type){var u=o.findIndex(function(e){return+e.todoId==+a.closest(".task").dataset.id});a.closest(".task").remove(),o.splice(u,1)}if("todoConversionBtn"===s.type){console.log(a.closest(".task").dataset.todoId);var v=o.findIndex(function(e){return+e.todoId==+a.closest(".task").dataset.id}),m=document.querySelector("#inprogress-tasks");console.log(v),o[v].isProgress="inProgress",console.log(o),a.closest(".task").remove();var g=o[v];m.append((0,t.generateTodo)(g.todoId,g.todoTitle,g.todoDesk,g.todoUser,g.todoTime,g.isProgress))}}}),window.addEventListener("keydown",function(e){var t=e.target.dataset,o=e.key;"btnConfirm"===t.type&&"Enter"===o&&console.log(123)});
},{"../templates/templates":"qkuN","../index":"g2Hq"}],"g2Hq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateTodo=s;var e=require("./templates/templates"),t=require("./services/worldTimeApi"),a=require("./services/getUsersFromApi"),r=require("./components/todo.js");function s(t,a,s,o,n,d){var i=(0,e.createElement)("div","task"),l=(0,e.createElement)("div","task__header"),c=(0,e.createElement)("div","task__footer"),p=(0,e.createElement)("h4","task__title",a),m=(0,e.createElement)("p","task__desc",s),_=(0,e.createElement)("p","task__user",o),u=(0,e.createElement)("button","task__btn-edit","Edit"),k=(0,e.createElement)("button","task__btn-delete","Delete"),v=(0,e.createElement)("span","task__time",n),E=(0,e.createElement)("button","task__conversion","➣");return l.append(u,k,E),c.append(_,v),i.append(l,p,m,c),i.dataset.id=t,i.dataset.isProgress=d,u.dataset.type="todoEditBtn",k.dataset.type="todoDeleteBtn",E.dataset.type="todoConversionBtn",console.log(r.arrayOfTodos),i.className="inProgress"===d?"task task--inprogress":"task",console.log(r.arrayOfTodos),i}setInterval(t.myTime,1e3),document.addEventListener("DOMContentLoaded",a.getUsersFromApi);var o=document.querySelector("#todo-box");r.addBtn.addEventListener("click",function(){main.append((0,r.generateModalTask)()),(0,a.getUsersFromApi)()});
},{"./templates/templates":"qkuN","./services/worldTimeApi":"DCju","./services/getUsersFromApi":"oHwm","./components/todo.js":"SCda"}]},{},["g2Hq"], null)