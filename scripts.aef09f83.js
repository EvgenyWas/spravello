parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HBIZ":[function(require,module,exports) {
"use strict";function e(){document.querySelector("#time").innerHTML=(new Date).toLocaleString("ru",{timeZone:"Europe/Minsk",timeStyle:"short",hourCycle:"h23"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.myTime=e;
},{}],"oHwm":[function(require,module,exports) {
"use strict";function e(e){return new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e(n)})}).then(function(t){return n(t,e)})}function n(e,n){e.forEach(function(e){var t=document.createElement("option");t.className="user",t.innerText=e.username,n.append(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUsersFromApi=e;
},{}],"qkuN":[function(require,module,exports) {
"use strict";function e(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=document.createElement(e);n.className=t;var a=document.createTextNode(r);return n.append(a),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=e;
},{}],"M0Hn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateModalTask=void 0,exports.generateTodo=a,exports.generateWarning=n;var e=require("../templates/templates"),t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=(0,e.createElement)("div","modal__window"),d=(0,e.createElement)("textarea","modal__title",t),o=(0,e.createElement)("textarea","modal__description",a),r=(0,e.createElement)("div","modal__options"),i=(0,e.createElement)("select","modal__list","Select User"),l=(0,e.createElement)("button","modal__cancel","Сancel"),s=(0,e.createElement)("button","modal__confirm","Confirm");return d.placeholder="Title",o.placeholder="Description",n.dataset.type="windowModal",d.dataset.type="modalTitle",o.dataset.type="descriptionModal",i.dataset.type="modalSelect",l.dataset.type="btnCancel",s.dataset.type="btnConfirm",s.id="confirmBtnId",l.id="cancelBtnId",n.id="modalWindow",document.getElementById("overlay").classList.add("is-show"),r.append(i,l,s),n.append(d,o,r),n};function a(t,a,n,d,o,r){var i=(0,e.createElement)("div","task"),l=(0,e.createElement)("div","task__header"),s=(0,e.createElement)("div","task__footer"),c=(0,e.createElement)("h4","task__title",a),m=(0,e.createElement)("p","task__desc",n),_=(0,e.createElement)("p","task__user",d),p=(0,e.createElement)("button","task__btn-edit","Edit"),u=(0,e.createElement)("button","task__btn-delete","Delete"),E=(0,e.createElement)("span","task__time",o),k=(0,e.createElement)("button","task__btn-conversion","➣"),v=(0,e.createElement)("button","task__btn-back","Back"),b=(0,e.createElement)("button","task__btn-complete","Complete");return l.append(p,u,k,v,b),s.append(_,E),i.append(l,c,m,s),i.dataset.id=t,i.dataset.isProgress=r,p.dataset.type="todoEditBtnId",u.dataset.type="todoDeleteBtn",k.dataset.type="todoConversionBtn",v.dataset.type="todoBackBtn",b.dataset.type="todoCompleteBtn",p.id="todoEditBtnId",i.dataset.type="todoContainer",c.id="todoTitle",m.id="todoDesc",_.id="todoUser",i.draggable=!0,"start"===r?(b.hidden="true",v.hidden="true"):"inProgress"===r?(i.className="task task--inprogress",p.hidden="true",k.hidden="true",u.hidden="delete"):"done"===r&&(i.className="task task--done",l.className="task__header task__header--done",u.className="task__btn-delete task__btn-delete--header",p.hidden="true",k.hidden="true",b.hidden="true",v.hidden="true",l.append(c)),i}function n(t){var a=t.onConfirm,n=t.onCancel,d=(0,e.createElement)("div","modal-warning__container"),o=(0,e.createElement)("h3","modal-warning__title","Warning!"),r=(0,e.createElement)("div","modal-warning__buttons"),i=(0,e.createElement)("button","modal-warning__cancel__btn","Cancel"),l=(0,e.createElement)("button","modal-warning__confirm-btn","Confirm");d.append(o,r),r.append(i,l);var s=document.getElementById("overlay");return i.dataset.type="cancelWarning",l.dataset.type="confirmWarning",l.id="confirmWarningId",i.id="cancelWarningId",d.id="modalContainer",i.addEventListener("click",function(){n(),document.querySelector("#modalContainer").remove(),s.classList.remove("is-show")}),l.addEventListener("click",function(){a(),document.querySelector("#modalContainer").remove(),s.classList.remove("is-show")}),s.classList.add("is-show"),d}exports.generateModalTask=t;
},{"../templates/templates":"qkuN"}],"F7cq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.changeCount=void 0;var o=require("./todo.js"),e={todobox:document.querySelector("#todo-counter"),inprogresBox:document.querySelector("#inprogress-counter"),doneBox:document.querySelector("#done-counter")},r=function(e){var r=e.todobox,t=e.inprogresBox,n=e.doneBox;this.todobox=r,this.inprogresBox=t,this.doneBox=n,this.changeCount=function(){var e=o.arrayOfTodos.filter(function(o){return"start"===o.isProgress}).length,r=o.arrayOfTodos.filter(function(o){return"inProgress"===o.isProgress}).length,t=o.arrayOfTodos.filter(function(o){return"done"===o.isProgress}).length;this.todobox.innerText=e,this.inprogresBox.innerText=r,this.doneBox.innerText=t}},t=function(){return new r(e).changeCount()};exports.changeCount=t;
},{"./todo.js":"SCda"}],"yBcM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addTodo=r,exports.appendToList=n,exports.dateToLocaleString=t;var o=require("../components/functionsForDom"),e=require("../components/todo");function t(){return(new Date).toLocaleString("ru").slice(0,-3)}function r(e,t){e.forEach(function(e){return t.append((0,o.generateTodo)(e.todoId,e.todoTitle,e.todoDesk,e.todoUser,e.todoTime,e.isProgress))})}function n(t,r){t.forEach(function(t){r.append((0,o.generateTodo)(t.todoId,t.todoTitle,t.todoDesk,t.todoUser,t.todoTime,t.isProgress)),e.arrayOfTodos.push(t)})}
},{"../components/functionsForDom":"M0Hn","../components/todo":"SCda"}],"SCda":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dragAndDrop=exports.arrayOfTodos=void 0;var e=require("./changeCount"),t=require("./functionsForDom"),o=require("../templates/utils"),n=require("../services/getUsersFromApi"),r=require("../services/localStorageApi"),d=[];exports.arrayOfTodos=d;var a,s=0,i=function(e,t,o,n,r,d){this.todoId=e,this.todoTitle=t,this.todoDesk=o,this.todoUser=n,this.todoTime=r,this.isProgress=d};main.addEventListener("click",function(c){var u=c.target,l=u.dataset;if(u!==c.currentTarget){if("btnCancel"===l.type&&(u.parentNode.parentNode.remove(),overlay.classList.remove("is-show"),s=0),"btnConfirm"===l.type){var v=u.parentNode.previousSibling.previousSibling,g=u.parentNode.previousSibling,m=u.previousSibling.previousSibling,p=Date.now(),f=document.getElementById("todo-tasks");if(overlay.classList.remove("is-show"),""===v.value||""===g.value)return;if(s){s=0;var y=document.querySelector("[data-type = 'modalTitle']"),k=document.querySelector("[data-type = 'descriptionModal']"),E=document.querySelector("[data-type = 'modalSelect']"),S=document.getElementById("todoTitle"),T=document.getElementById("todoDesc"),L=document.getElementById("todoUser");return d[a].todoTitle=y.value,d[a].todoDesk=k.value,d[a].todoUser=E.value,S.innerText=y.value,T.innerText=k.value,L.innerText=E.value,u.parentNode.parentNode.remove(),void r.LOCAL_STORAGE_API.setStorageData(d)}u.parentNode.parentNode.remove();var h=new i(p,v.value,g.value,m.value,(0,o.dateToLocaleString)(),"start");f.append((0,t.generateTodo)(p,v.value,g.value,m.value,(0,o.dateToLocaleString)(),"start")),d.push(h),v.value="",g.value="",(0,e.changeCount)(),r.LOCAL_STORAGE_API.setStorageData(d)}if("todoDeleteBtn"===l.type){var I=d.findIndex(function(e){return+e.todoId==+u.closest(".task").dataset.id});u.closest(".task").remove(),d.splice(I,1),(0,e.changeCount)(),r.LOCAL_STORAGE_API.setStorageData(d)}if("todoConversionBtn"===l.type||"todoBackBtn"===l.type||"todoCompleteBtn"===l.type){var B=function(e,o){P.isProgress=e,o.append((0,t.generateTodo)(P.todoId,P.todoTitle,P.todoDesk,P.todoUser,P.todoTime,P.isProgress)),u.closest(".task").remove()},_=d.findIndex(function(e){return+e.todoId==+u.closest(".task").dataset.id}),q=document.querySelector("#todo-tasks"),A=document.querySelector("#done-tasks"),C=document.querySelector("#inprogress-tasks"),P=d[_];"todoConversionBtn"===l.type&&(document.getElementById("inprogress-tasks").childElementCount<6?B("inProgress",C):main.append((0,t.generateWarning)({onConfirm:function(){return B("inProgress",C)},onCancel:function(){}}))),"todoBackBtn"===l.type&&B("start",q),"todoCompleteBtn"===l.type&&B("done",A),(0,e.changeCount)(),r.LOCAL_STORAGE_API.setStorageData(d)}if("todoEditBtnId"===l.type){s=1,a=d.findIndex(function(e){return+e.todoId==+u.closest(".task").dataset.id}),main.append((0,t.generateModalTask)(d[a].todoTitle,d[a].todoDesk));var D=document.querySelector(".modal__list");(0,n.getUsersFromApi)(D)}(0,e.changeCount)(),r.LOCAL_STORAGE_API.setStorageData(d)}});var c=document.querySelector("#deleteall-button");c.addEventListener("click",function(){main.append((0,t.generateWarning)({onConfirm:function(){document.querySelector("#done-tasks").innerHTML="",exports.arrayOfTodos=d=d.filter(function(e){return"done"!==e.isProgress})},onCancel:function(){}}))}),document.addEventListener("keydown",function(e){var t=document.getElementById("confirmBtnId");t&&"Enter"==e.key&&t.click()}),document.addEventListener("keydown",function(e){var t=document.getElementById("cancelBtnId");t&&"Escape"==e.key&&t.click()}),document.addEventListener("keydown",function(e){var t=document.getElementById("cancelWarningId");t&&"Escape"==e.key&&t.click()}),document.addEventListener("keydown",function(e){var t=document.getElementById("confirmWarningId");t&&"Enter"==e.key&&t.click()});var u=document.getElementById("filter-button");u.addEventListener("click",function(){var e=document.getElementById("filter"),t=document.getElementById("todo-tasks"),n=document.getElementById("inprogress-tasks"),r=document.getElementById("done-tasks");if(t.innerHTML="",n.innerHTML="",r.innerHTML="","All"===e.value){var a=d.filter(function(e){return"start"===e.isProgress}),s=d.filter(function(e){return"inProgress"===e.isProgress}),i=d.filter(function(e){return"done"===e.isProgress});return(0,o.addTodo)(a,t),(0,o.addTodo)(s,n),void(0,o.addTodo)(i,r)}var c=d.filter(function(t){return t.todoUser===e.value&&"start"===t.isProgress}),u=d.filter(function(t){return t.todoUser===e.value&&"inProgress"===t.isProgress}),l=d.filter(function(t){return t.todoUser===e.value&&"done"===t.isProgress});(0,o.addTodo)(c,t),(0,o.addTodo)(u,n),(0,o.addTodo)(l,r)});var l,v=document.querySelector("#add-button");v.addEventListener("click",function(){main.append((0,t.generateModalTask)());var e=document.querySelector(".modal__list");(0,n.getUsersFromApi)(e)});var g=function(){var t=document.querySelector(".todo__container"),o=document.querySelector(".inprogress__container"),n=document.querySelector(".done__container"),a=function(e){l=e.target,e.dataTransfer.setData("id",e.target.dataset.id)},s=function(e){e.preventDefault()},i=function(e){e.preventDefault()},c=function(t){this.childNodes[3].append(l);var o=t.dataTransfer.getData("id"),n=d.filter(function(e){return+e.todoId==+o}),a=l.childNodes[1],s=l.querySelector("[data-type = 'todoDeleteBtn']"),i=l.querySelector("[data-type = 'todoEditBtnId']"),c=l.querySelector("[data-type = 'todoConversionBtn']"),u=l.querySelector("[data-type = 'todoCompleteBtn']"),v=l.querySelector("[data-type = 'todoBackBtn']"),g=l.querySelector("#todoTitle");t.target.closest(".inprogress")&&(n[0].isProgress="inProgress",l.className="task task--inprogress",i.hidden=!0,c.hidden=!0,s.hidden=!0,v.hidden=!1,u.hidden=!1),t.target.closest(".done")&&(n[0].isProgress="done",l.className="task task--done",a.className="task__header task__header--done",s.className="task__btn-delete task__btn-delete--header",i.hidden=!0,c.hidden=!0,u.hidden=!0,v.hidden=!0,s.hidden=!1,a.append(g)),t.target.closest(".todo")&&(n[0].isProgress="start",l.className="task task--todo",u.hidden=!0,v.hidden=!0,i.hidden=!1,c.hidden=!1,s.hidden=!1),exports.arrayOfTodos=d=d.filter(function(e){return+e.todoId!=+o}),d.push(n[0]),(0,e.changeCount)(),r.LOCAL_STORAGE_API.setStorageData(d)};t.addEventListener("dragstart",a),t.addEventListener("dragover",s),t.addEventListener("dragenter",i),t.addEventListener("drop",c),o.addEventListener("dragstart",a),o.addEventListener("dragover",s),o.addEventListener("dragenter",i),o.addEventListener("drop",c),n.addEventListener("dragstart",a),n.addEventListener("dragover",s),n.addEventListener("dragenter",i),n.addEventListener("drop",c)};exports.dragAndDrop=g;
},{"./changeCount":"F7cq","./functionsForDom":"M0Hn","../templates/utils":"yBcM","../services/getUsersFromApi":"oHwm","../services/localStorageApi":"Vweg"}],"Vweg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LOCAL_STORAGE_API=void 0;var t=require("../components/functionsForDom"),e=require("../components/todo"),s=require("../templates/utils"),r={key:{tasks:"tasks-data"},getStorageData:function(){var t=JSON.parse(localStorage.getItem(this.key.tasks));return t||[]},setStorageData:function(t){localStorage.setItem(this.key.tasks,JSON.stringify(t))},addTasksFromStorageData:function(){var t=document.getElementById("todo-tasks"),e=document.getElementById("inprogress-tasks"),r=document.getElementById("done-tasks"),o=this.getStorageData(),a=o.filter(function(t){return"start"===t.isProgress}),n=o.filter(function(t){return"inProgress"===t.isProgress}),i=o.filter(function(t){return"done"===t.isProgress});(0,s.appendToList)(a,t),(0,s.appendToList)(n,e),(0,s.appendToList)(i,r)}};exports.LOCAL_STORAGE_API=r;
},{"../components/functionsForDom":"M0Hn","../components/todo":"SCda","../templates/utils":"yBcM"}],"EFFy":[function(require,module,exports) {
"use strict";function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e,i){o(t,e),e.set(t,i)}function o(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(t,e){return r(t,s(t,e,"get"))}function s(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function r(t,e){return e.get?e.get.call(t):e.value}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toast=void 0;var l={message:"Данная страница создана командой Spravello!",root:document.querySelector("#toast"),OPEN_DELAY:1e4,CLOSE_DELAY:5e3},c=new WeakMap,u=new WeakMap,h=new WeakMap,f=new WeakMap,v=new WeakMap,p=e(function t(e){var o=this,s=e.message,r=e.root,l=e.OPEN_DELAY,p=e.CLOSE_DELAY;i(this,t),n(this,c,{writable:!0,value:function(t){"button"===t.target.type&&a(o,h).call(o)}}),n(this,u,{writable:!0,value:function(){var t=this;setTimeout(function(){t.root.classList.add("toast--visible")},this.OPEN_DELAY)}}),n(this,h,{writable:!0,value:function(){this.root.classList.remove("toast--visible")}}),n(this,f,{writable:!0,value:function(){var t=this;setTimeout(function(){t.root.classList.remove("toast--visible")},this.OPEN_DELAY+this.CLOSE_DELAY)}}),n(this,v,{writable:!0,value:function(){this.root.querySelector(".toast__title").textContent=this.message}}),this.root=r,this.message=s,this.OPEN_DELAY=l,this.CLOSE_DELAY=p,this.init=function(){a(this,v).call(this),a(this,u).call(this),a(this,f).call(this),this.root.addEventListener("click",a(this,c))}}),E=new p(l);exports.toast=E;
},{}],"g2Hq":[function(require,module,exports) {
"use strict";var e=require("./services/myTime"),r=require("./services/getUsersFromApi"),t=require("./services/localStorageApi"),o=require("./components/changeCount"),n=require("./components/todo"),i=require("./components/toast"),s=document.getElementById("filter");function a(){t.LOCAL_STORAGE_API.addTasksFromStorageData(),(0,o.changeCount)(),(0,r.getUsersFromApi)(s),(0,n.dragAndDrop)(),i.toast.init()}window.addEventListener("DOMContentLoaded",a),setInterval(e.myTime,1e3);
},{"./services/myTime":"HBIZ","./services/getUsersFromApi":"oHwm","./services/localStorageApi":"Vweg","./components/changeCount":"F7cq","./components/todo":"SCda","./components/toast":"EFFy"}]},{},["g2Hq"], null)