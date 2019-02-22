!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class a{constructor(e,t,n,a,o="",r){this.title=e,this.description=t,this.dueDate=n,this.priority=a,this.notes=o,this.project=r,this.id=Math.round(1e21*Math.random(),0)}}var o=(()=>({create(e,t,n,o,r="",d){let l=new a(e,t,n,o,r,d),s=JSON.parse(localStorage.getItem(d));return s.todos.push(l),localStorage.setItem(d,JSON.stringify(s)),l},update(e,t){e.find(e=>e.id==t),e.findIndex(e=>e.id==t);let n=document.getElementsByClassName("todo-form");n[0].value,n[1].value,new Date(n[2].value).toDateString(),document.getElementsByTagName("select")[0].value,n[3].value},delete(e,t){let n=JSON.parse(localStorage.getItem(e)),a=n.todos.findIndex(e=>e.id==t);n.todos.splice(a,1),localStorage.setItem(e,JSON.stringify(n))}}))();class r{constructor(e){this.name=e,this.todos=[];let t=Number(localStorage.projectCount);this.id=++t,localStorage.setItem("projectCount",t)}}void 0===localStorage.projectCount&&localStorage.setItem("projectCount",0);var d=(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"))?JSON.parse(localStorage.getItem("projectsArray")):[];return{create(t){""===t&&(t="Project Name (Please customize name)");let n=new r(t);return localStorage.setItem(t,JSON.stringify(n)),e.push(n),localStorage.setItem("projectsArray",JSON.stringify(e)),n},update(t){let n=e.find(e=>e.id===t),a=e.findIndex(e=>e.name===n.name);return n.name=document.getElementById("projectName").value,e.splice(a,1,n),localStorage.setItem(n.name,JSON.stringify(n)),localStorage.setItem("projectsArray",JSON.stringify(e)),n},delete(t){let n=JSON.parse(localStorage.getItem(t)),a=e.findIndex(e=>e.name===n.name);localStorage.removeItem(t),e.splice(a,1),localStorage.setItem("projectsArray",JSON.stringify(e))}}})();const l=e=>{let t=s(e);m(t,e),"d-none"!==document.getElementById("todosSection").getAttribute("class")&&document.getElementById("todosSection").setAttribute("class","d-none")},s=e=>{let t=document.createElement("button");return t.setAttribute("class","btn btn-sm btn-block btn-primary addTodoBtn"),t.setAttribute("id",`addTodoBtn-${e.id}`),t.setAttribute("data-id",e.id),t.innerText=`Add Todo for ${e.name}`,t.addEventListener("click",t=>{t.stopPropagation(),i(t.target,e)}),t},i=(e,t)=>{document.getElementById("todosDiv").removeChild(e),c(t)},c=e=>{document.getElementById("todosSection").setAttribute("class","mt-3"),document.getElementById("todosForm").setAttribute("data-id",e.id)},m=(e,t)=>{document.getElementsByClassName("addTodoBtn")[0]&&document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]),null===document.getElementById(`addTodoBtn-${t.id}`)&&document.getElementById("todosDiv").appendChild(e)},u=e=>{let t=document.getElementsByClassName("todo-form");return[t[0].value,t[1].value,new Date(t[2].value).toDateString(),document.getElementsByTagName("select")[0].value,t[3].value,e]},p=e=>{let t=JSON.parse(localStorage.getItem(e)),n=document.getElementById("todoBody");n.innerHTML="",0===t.todos.length?g(e):(document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),t.todos.forEach(e=>{b(n,e)}))},g=e=>{let t=document.createElement("p");t.setAttribute("class","emptyTodoMessage"),t.innerText=`No todo items for ${e} yet`,document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),document.getElementById("todoBody").appendChild(t)},b=(e,t)=>{let n=document.createElement("tr"),a=N(),o=document.createElement("td"),r=f();o.appendChild(r),o.appendChild(a),y(n,t.title),y(n,t.description),y(n,t.dueDate),y(n,t.priority),y(n,t.notes),n.appendChild(o),e.appendChild(n)},y=(e,t)=>{let n=document.createElement("td");n.innerText=t,e.appendChild(n)},f=()=>{let e=document.createElement("button");return e.setAttribute("class","btn btn-sm btn-warning mx-1 updateTodo"),e.innerText="Update",S(e),e},N=()=>{let e=document.createElement("button");return e.setAttribute("class","btn btn-sm btn-danger mx-1 deleteTodo"),e.innerText="Delete",E(e),e},S=e=>{e.addEventListener("click",e=>{e.stopPropagation();let t=e.target.parentNode.parentNode;t.parentNode.removeChild(t);let n=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),a=JSON.parse(localStorage.projectsArray).find(e=>e.id===n);c(a)})},E=e=>{e.addEventListener("click",e=>{e.stopPropagation();let t=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),n=JSON.parse(localStorage.projectsArray).find(e=>e.id===t),a=e.target.parentNode.parentNode.getAttribute("id");o.delete(n.name,a),e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)})},B=e=>{j(),A(e)},j=()=>{let e=document.getElementsByClassName("emptyMessage")[0];void 0!==e&&document.getElementsByTagName("ul")[0].removeChild(e)},A=e=>{let t=document.createElement("li"),n=document.createElement("span");n.setAttribute("id",`projectSpan-${e.id}`);let a=v("delete",e),o=v("update",e);t.setAttribute("class","list-group-item"),t.setAttribute("id",`projectLi-${e.id}`),n.innerText=e.name,t.appendChild(n),t.addEventListener("click",()=>{l(e),p(e.name)}),t.appendChild(a),t.appendChild(o),document.getElementsByTagName("ul")[0].appendChild(t)},v=(e,t)=>{let n=I(e,t);return h(n,t,e),n},I=(e,t)=>{let n="update"===e?"btn-info":"btn-danger",a="update"===e?`update-proj-${t.id}`:`delete-proj-${t.id}`,o=document.createElement("button");return o.setAttribute("class",`btn btn-sm ml-3 ${n}`),o.setAttribute("id",a),o.innerText=e.toUpperCase(),"update"===e&&o.setAttribute("data-id",`${t.id}`),o},h=(e,t,n)=>{e.addEventListener("click",e=>{e.stopPropagation(),"update"===n?T(e.target,t):O(t)})},T=(e,t)=>{C(e,"update",e.getAttribute("data-id")),document.getElementById("projectName").value=t.name},C=(e,t,n)=>{document.getElementById("projectNameForm").removeAttribute("class"),document.getElementById("projectNameForm").setAttribute("data-action",t),document.getElementById("projectNameForm").setAttribute("data-id",n),e.setAttribute("class","d-none")},O=e=>{d.delete(e.name),x(e)},x=e=>{let t=document.getElementById(`projectLi-${e.id}`);if(document.getElementsByTagName("ul")[0].removeChild(t),"[]"===localStorage.projectsArray){let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}},D=e=>{let t=d.create(e);B(t)},J=e=>{let t=d.update(Number(e.getAttribute("data-id")));document.getElementById(`update-proj-${e.getAttribute("data-id")}`).setAttribute("class","btn btn-sm btn-info ml-3"),document.getElementById(`projectSpan-${e.getAttribute("data-id")}`).innerText=t.name};(()=>{if(null===localStorage.getItem("projectsArray")){let e=[];localStorage.setItem("projectsArray",JSON.stringify(e))}})(),(()=>{"0"===localStorage.projectCount&&d.create("Default Project");if(void 0!==localStorage["Default Project"]){let e=JSON.parse(localStorage["Default Project"]);l(e),p(e.name)}let e=JSON.parse(localStorage["Default Project"]);void 0!==e&&0===e.todos.length&&(o.create("First task","Basic stuff",(new Date).toDateString(),"High","No notes","Default Project"),l(e),p("Default Project"))})(),(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"));if(e.length>0)e.forEach(e=>{B(e)});else{let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}})(),document.getElementById("projectNameForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=document.getElementById("projectName").value;"new"===e.getAttribute("data-action")?D(t):J(e),e.setAttribute("class","d-none"),e.reset(),document.getElementById("addProjBtn").setAttribute("class","btn btn-sm btn-primary mt-2")})(e.target)}),document.getElementById("addProjBtn").addEventListener("click",e=>{C(e.target,"new")}),document.getElementById("todosForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=JSON.parse(localStorage.projectsArray),n=Number(e.getAttribute("data-id")),a=t.find(e=>e.id===n),r=u(a.name);o.create(...r),e.reset(),document.getElementById("todosSection").setAttribute("class","d-none"),p(a.name),l(a)})(e.target)})}]);