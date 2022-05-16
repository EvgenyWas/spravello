parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DCju":[function(require,module,exports) {
"use strict";function e(){document.querySelector("#time").innerHTML=(new Date).toLocaleString("ru",{timeZone:"Europe/Minsk",timeStyle:"short",hourCycle:"h23"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.myTime=e;
},{}],"oHwm":[function(require,module,exports) {
"use strict";function e(e){return new Promise(function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e(n)})}).then(function(t){return n(t,e)})}function n(e,n){e.forEach(function(e){var t=document.createElement("option");t.className="user",t.innerText=e.username,n.append(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUsersFromApi=e;
},{}],"F7cq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.changeCount=void 0;var o=require("./todo.js"),e={todobox:document.querySelector("#todo-counter"),inprogresBox:document.querySelector("#inprogress-counter"),doneBox:document.querySelector("#done-counter")},r=function(e){var r=e.todobox,t=e.inprogresBox,n=e.doneBox;this.todobox=r,this.inprogresBox=t,this.doneBox=n,this.changeCount=function(){var e=o.arrayOfTodos.filter(function(o){return"start"===o.isProgress}).length,r=o.arrayOfTodos.filter(function(o){return"inProgress"===o.isProgress}).length,t=o.arrayOfTodos.filter(function(o){return"done"===o.isProgress}).length;this.todobox.innerText=e,this.inprogresBox.innerText=r,this.doneBox.innerText=t}},t=function(){return new r(e).changeCount()};exports.changeCount=t;
},{"./todo.js":"SCda"}],"qkuN":[function(require,module,exports) {
"use strict";function e(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=document.createElement(e);n.className=t;var a=document.createTextNode(r);return n.append(a),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=e;
},{}],"M0Hn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateModalTask=void 0,exports.generateTodo=o,exports.generateWarning=d;var e=require("../templates/templates"),t=require("../services/getUsersFromApi"),a=require("./todo"),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=(0,e.createElement)("div","modal__window"),o=(0,e.createElement)("textarea","modal__title",t),d=(0,e.createElement)("textarea","modal__description",a),r=(0,e.createElement)("div","modal__options"),i=(0,e.createElement)("select","modal__list","Select User"),l=(0,e.createElement)("button","modal__cancel","Сancel"),s=(0,e.createElement)("button","modal__confirm","Confirm");return o.placeholder="Title",d.placeholder="Description",n.dataset.type="windowModal",o.dataset.type="modalTitle",d.dataset.type="descriptionModal",i.dataset.type="modalSelect",l.dataset.type="btnCancel",s.dataset.type="btnConfirm",s.id="confirmBtnId",l.id="cancelBtnId",document.getElementById("overlay").classList.add("is-show"),r.append(i,l,s),n.append(o,d,r),n};function o(t,a,n,o,d,r){var i=(0,e.createElement)("div","task"),l=(0,e.createElement)("div","task__header"),s=(0,e.createElement)("div","task__footer"),c=(0,e.createElement)("h4","task__title",a),m=(0,e.createElement)("p","task__desc",n),_=(0,e.createElement)("p","task__user",o),p=(0,e.createElement)("button","task__btn-edit","Edit"),E=(0,e.createElement)("button","task__btn-delete","Delete"),u=(0,e.createElement)("span","task__time",d),g=(0,e.createElement)("button","task__btn-conversion","➣"),b=(0,e.createElement)("button","task__btn-back","Back"),k=(0,e.createElement)("button","task__btn-complete","Complete");return l.append(p,E,g,b,k),s.append(_,u),i.append(l,c,m,s),i.dataset.id=t,i.dataset.isProgress=r,p.dataset.type="todoEditBtn",E.dataset.type="todoDeleteBtn",g.dataset.type="todoConversionBtn",b.dataset.type="todoBackBtn",k.dataset.type="todoCompleteBtn",p.id="todoEditBtnId",i.id="editTodoTask",c.id="todoTitle",m.id="todoDesc",_.id="todoUser",i.className="inProgress"===r?"task task--inprogress":"task",i}function d(){var t=(0,e.createElement)("div","modal-warning__container"),a=(0,e.createElement)("h3","modal-warning__title","Warning!"),n=(0,e.createElement)("div","modal-warning__buttons"),o=(0,e.createElement)("button","modal-warning__cancel__btn","Cancel"),d=(0,e.createElement)("button","modal-warning__confirm-btn","Confirm");return t.append(a,n),n.append(o,d),o.dataset.type="CancelWarning",d.dataset.type="ConfirmWarning",d.id="ConfirmWarningId",o.id="CancelWarningId",t.id="modalContainer",t}exports.generateModalTask=n;
},{"../templates/templates":"qkuN","../services/getUsersFromApi":"oHwm","./todo":"SCda"}],"Now9":[function(require,module,exports) {
"use strict";function e(){return(new Date).toLocaleString("ru").slice(0,-3)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.dateToLocaleString=e;
},{}],"Vweg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LOCAL_STORAGE_API=void 0;var t=require("../components/functionsForDom"),e=require("../components/todo"),o={key:{tasks:"tasks-data"},getStorageData:function(){var t=JSON.parse(localStorage.getItem(this.key.tasks));return t||[]},setStorageData:function(t){localStorage.setItem(this.key.tasks,JSON.stringify(t))},addTasksFromStorageData:function(){var o=document.getElementById("todo-tasks"),s=document.getElementById("inprogress-tasks"),r=document.getElementById("done-tasks"),n=this.getStorageData(),a=n.filter(function(t){return"start"===t.isProgress}),i=n.filter(function(t){return"inProgress"===t.isProgress}),d=n.filter(function(t){return"done"===t.isProgress}),u=function(o,s){o.forEach(function(o){s.append((0,t.generateTodo)(o.todoId,o.todoTitle,o.todoDesk,o.todoUser,o.todoTime,o.isProgress)),e.arrayOfTodos.push(o)})};u(a,o),u(i,s),u(d,r)}};exports.LOCAL_STORAGE_API=o;
},{"../components/functionsForDom":"M0Hn","../components/todo":"SCda"}],"SCda":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.arrayOfTodos=void 0;var e=require("./changeCount"),t=require("./functionsForDom"),o=require("../templates/tools"),n=require("../services/getUsersFromApi"),r=require("../services/localStorageApi");function d(e){throw new TypeError('"'+e+'" is read-only')}var a=[];exports.arrayOfTodos=a;var s,i=0,u=0,c=a.filter(function(e){return"inProgress"===e.isProgress}).length,l=function(e,t,o,n,r,d){this.todoId=e,this.todoTitle=t,this.todoDesk=o,this.todoUser=n,this.todoTime=r,this.isProgress=d};main.addEventListener("click",function(c){var m=c.target,v=m.dataset;if(m!==c.currentTarget){if("btnCancel"===v.type&&(m.parentNode.parentNode.remove(),overlay.classList.remove("is-show"),i=0),"btnConfirm"===v.type){var g=m.parentNode.previousSibling.previousSibling,y=m.parentNode.previousSibling,p=m.previousSibling.previousSibling,f=Date.now(),k=document.getElementById("todo-tasks");if(""===g.value||""===y.value)return;if(overlay.classList.remove("is-show"),i){i=0;var T=document.querySelector("[data-type = 'modalTitle']"),E=document.querySelector("[data-type = 'descriptionModal']"),S=document.querySelector("[data-type = 'modalSelect']"),I=document.getElementById("todoTitle"),B=document.getElementById("todoDesc"),L=document.getElementById("todoUser");return a[s].todoTitle=T.value,a[s].todoDesk=E.value,a[s].todoUser=S.value,I.innerText=T.value,B.innerText=E.value,L.innerText=S.value,m.parentNode.parentNode.remove(),void r.LOCAL_STORAGE_API.setStorageData(a)}m.parentNode.parentNode.remove();var C=new l(f,g.value,y.value,p.value,(0,o.dateToLocaleString)(),"start");k.append((0,t.generateTodo)(f,g.value,y.value,p.value,(0,o.dateToLocaleString)(),"start")),a.push(C),g.value="",y.value="",(0,e.changeCount)(),r.LOCAL_STORAGE_API.setStorageData(a)}if("todoDeleteBtn"===v.type){var q=a.findIndex(function(e){return+e.todoId==+m.closest(".task").dataset.id});m.closest(".task").remove(),a.splice(q,1),(0,e.changeCount)(),r.LOCAL_STORAGE_API.setStorageData(a)}if("todoConversionBtn"===v.type||"todoBackBtn"===v.type||"todoCompleteBtn"===v.type){var h=function(e,o){w.isProgress=e,o.append((0,t.generateTodo)(w.todoId,w.todoTitle,w.todoDesk,w.todoUser,w.todoTime,w.isProgress))},P=a.findIndex(function(e){return+e.todoId==+m.closest(".task").dataset.id}),A=document.querySelector("#todo-tasks"),_=document.querySelector("#done-tasks"),D=document.querySelector("#inprogress-tasks");m.closest(".task").remove();var w=a[P];"todoConversionBtn"===v.type&&h("inProgress",D),"todoBackBtn"===v.type&&h("start",A),"todoCompleteBtn"===v.type&&h("done",_),(0,e.changeCount)()}if("ConfirmWarning"===c.target.dataset.type){var O=document.querySelector("#done-tasks");if(overlay.classList.remove("is-show"),document.querySelector("#modalContainer").remove(),u)return d("moveCounter"),document.querySelector("[data-type = 'todoConversionBtn']").click(),void document.querySelector("#modalContainer").remove();O.innerHTML="",exports.arrayOfTodos=a=a.filter(function(e){return"done"!==e.isProgress})}if("CancelWarning"===v.type&&(document.querySelector("#modalContainer").remove(),overlay.classList.remove("is-show"),d("moveCounter")),"todoEditBtn"===v.type){i=1,s=a.findIndex(function(e){return+e.todoId==+m.closest(".task").dataset.id}),main.append((0,t.generateModalTask)(a[s].todoTitle,a[s].todoDesk));var b=document.querySelector(".modal__list");(0,n.getUsersFromApi)(b)}(0,e.changeCount)(),r.LOCAL_STORAGE_API.setStorageData(a)}}),document.addEventListener("keydown",function(e){var t=document.getElementById("confirmBtnId");t&&"Enter"==e.key&&t.click()}),document.addEventListener("keydown",function(e){var t=document.getElementById("ConfirmWarningId");t&&"Enter"==e.key&&t.click()}),document.addEventListener("keydown",function(e){var t=document.getElementById("cancelBtnId");t&&"Escape"==e.key&&t.click()}),document.addEventListener("keydown",function(e){var t=document.getElementById("CancelWarningId");t&&"Escape"==e.key&&t.click()});var m=document.querySelector("#deleteall-button");m.addEventListener("click",function(e){main.append((0,t.generateWarning)())});var v=document.getElementById("filter-button");v.addEventListener("click",function(e){var o=document.getElementById("filter"),n=document.getElementById("todo-tasks"),r=document.getElementById("inprogress-tasks"),d=document.getElementById("done-tasks"),s=a.filter(function(e){return e.todoUser===o.value&&"start"===e.isProgress}),i=a.filter(function(e){return e.todoUser===o.value&&"inProgress"===e.isProgress}),u=a.filter(function(e){return e.todoUser===o.value&&"done"===e.isProgress});function c(e,o){e.forEach(function(e){return o.append((0,t.generateTodo)(e.todoId,e.todoTitle,e.todoDesk,e.todoUser,e.todoTime,e.isProgress))})}n.innerHTML="",r.innerHTML="",d.innerHTML="",c(s,n),c(i,r),c(u,d)});var g=document.querySelector("#add-button");g.addEventListener("click",function(){main.append((0,t.generateModalTask)());var e=document.querySelector(".modal__list");(0,n.getUsersFromApi)(e)});
},{"./changeCount":"F7cq","./functionsForDom":"M0Hn","../templates/tools":"Now9","../services/getUsersFromApi":"oHwm","../services/localStorageApi":"Vweg"}],"g2Hq":[function(require,module,exports) {
"use strict";var e=require("./services/worldTimeApi"),r=require("./services/getUsersFromApi"),o=require("./components/todo.js"),t=require("./components/functionsForDom"),n=require("./services/localStorageApi"),i=require("./components/changeCount"),s=document.getElementById("filter");function a(){n.LOCAL_STORAGE_API.addTasksFromStorageData(),(0,i.changeCount)(),(0,r.getUsersFromApi)(s)}window.addEventListener("DOMContentLoaded",a),setInterval(e.myTime,1e3);
},{"./services/worldTimeApi":"DCju","./services/getUsersFromApi":"oHwm","./components/todo.js":"SCda","./components/functionsForDom":"M0Hn","./services/localStorageApi":"Vweg","./components/changeCount":"F7cq"}]},{},["g2Hq"], null)