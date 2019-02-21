!function(e){var t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const o=e=>{let t=JSON.parse(localStorage.getItem(e)),r=document.getElementById("todoBody");if(r.innerHTML="",0===t.todos.length){let t=document.createElement("p");t.setAttribute("class","emptyTodoMessage"),t.innerText=`No todo items for ${e} yet`,document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),document.getElementById("todoBody").appendChild(t)}else document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),t.todos.forEach(e=>{let t=document.createElement("tr"),o=`\n        <td>${e.title}</td>\n        <td>${e.description}</td>\n        <td>${e.dueDate}</td>\n        <td>${e.priority}</td>\n        <td>${e.notes}</td>\n        <td><button class="btn-sm btn btn-primary">Delete</button></td>\n      `;t.innerHTML=o,r.appendChild(t)})};class a{constructor(e){this.name=e,this.todos=[];let t=Number(localStorage.projectCount);this.id=++t,localStorage.setItem("projectCount",t)}}void 0===localStorage.projectCount&&localStorage.setItem("projectCount",0);var n=(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"))?JSON.parse(localStorage.getItem("projectsArray")):[];return{create(t){""===t&&(t="Project Name (Please customize name)");let r=new a(t);return localStorage.setItem(t,JSON.stringify(r)),e.push(r),localStorage.setItem("projectsArray",JSON.stringify(e)),r},update(t){let r=e.find(e=>e.id===t),o=e.findIndex(e=>e.name===r.name);return r.name=document.getElementById("projectName").value,e.splice(o,1,r),localStorage.setItem(r.name,JSON.stringify(r)),localStorage.setItem("projectsArray",JSON.stringify(e)),r},delete(t){let r=JSON.parse(localStorage.getItem(t)),o=e.findIndex(e=>e.name===r.name);localStorage.removeItem(t),e.splice(o,1),localStorage.setItem("projectsArray",JSON.stringify(e))}}})();const l=e=>{d(),s(e)},d=()=>{let e=document.getElementsByClassName("emptyMessage")[0];void 0!==e&&document.getElementsByTagName("ul")[0].removeChild(e)},s=e=>{let t=document.createElement("li"),r=document.createElement("span");r.setAttribute("id",`projectSpan-${e.id}`);let a=i("delete",e),n=i("update",e);t.setAttribute("class","list-group-item"),t.setAttribute("id",`projectLi-${e.id}`),r.innerText=e.name,t.appendChild(r),t.addEventListener("click",()=>o(e.name)),t.appendChild(a),t.appendChild(n),document.getElementsByTagName("ul")[0].appendChild(t)},i=(e,t)=>{let r=c(e,t);return m(r,t,e),r},c=(e,t)=>{let r="update"===e?"btn-info":"btn-danger",o="update"===e?`update-proj-${t.id}`:`delete-proj-${t.id}`,a=document.createElement("button");return a.setAttribute("class",`btn btn-sm ml-3 ${r}`),a.setAttribute("id",o),a.innerText=e.toUpperCase(),"update"===e&&a.setAttribute("data-id",`${t.id}`),a},m=(e,t,r)=>{e.addEventListener("click",e=>{e.stopPropagation(),"update"===r?u(e.target,t):g(t)})},u=(e,t)=>{p(e,"update",e.getAttribute("data-id")),document.getElementById("projectName").value=t.name},p=(e,t,r)=>{document.getElementById("projectNameForm").removeAttribute("class"),document.getElementById("projectNameForm").setAttribute("data-action",t),document.getElementById("projectNameForm").setAttribute("data-id",r),e.setAttribute("class","d-none")},g=e=>{n.delete(e.name),y(e)},y=e=>{let t=document.getElementById(`projectLi-${e.id}`);if(document.getElementsByTagName("ul")[0].removeChild(t),"[]"===localStorage.projectsArray){let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}},b=e=>{let t=n.create(e);l(t)},f=e=>{let t=n.update(Number(e.getAttribute("data-id")));document.getElementById(`update-proj-${e.getAttribute("data-id")}`).setAttribute("class","btn btn-sm btn-info ml-3"),document.getElementById(`projectSpan-${e.getAttribute("data-id")}`).innerText=t.name};class S{constructor(e,t,r,o,a="",n){this.title=e,this.description=t,this.dueDate=r,this.priority=o,this.notes=a,this.project=n}}var j=(()=>({create(e,t,r,o,a="",n){let l=new S(e,t,r,o,a,n),d=JSON.parse(localStorage.getItem(n));return d.todos.push(l),localStorage.setItem(n,JSON.stringify(d)),l},update(){},delete(e,t){let r=JSON.parse(localStorage.getItem(e)),o=r.todos.findIndex(e=>e.title==t);r.todos.splice(o,1),localStorage.setItem(e,JSON.stringify(r))}}))();(()=>{if(null===localStorage.getItem("projectsArray")){let e=[];localStorage.setItem("projectsArray",JSON.stringify(e))}})(),(()=>{"0"===localStorage.projectCount&&n.create("Default Project");void 0!==localStorage["Default Project"]&&o(JSON.parse(localStorage["Default Project"]).name),0===JSON.parse(localStorage["Default Project"]).todos.length&&(j.create("First task","Basic stuff",(new Date).toDateString(),"High","No notes","Default Project"),o("Default Project"))})(),(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"));if(e.length>0)e.forEach(e=>{l(e)});else{let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}})(),document.getElementById("projectNameForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=document.getElementById("projectName").value;"new"===e.getAttribute("data-action")?b(t):f(e),e.setAttribute("class","d-none"),e.reset(),document.getElementById("addProjBtn").setAttribute("class","btn btn-sm btn-primary mt-2")})(e.target)}),document.getElementById("addProjBtn").addEventListener("click",e=>{p(e.target,"new")}),document.getElementById("addTodoBtn").addEventListener("click",e=>{e.stopPropagation(),e.target.setAttribute("class","d-none"),document.getElementById("todosForm").setAttribute("class","mt-3")})}]);