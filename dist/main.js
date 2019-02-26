!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);class a{constructor(e,t,o,a,n="",r){this.title=e,this.description=t,this.dueDate=o,this.priority=a,this.notes=n,this.project=r,this.id=Math.round(1e21*Math.random(),0),this.done=!1}}class n{constructor(e){this.name=e,this.todos=[];let t=Number(localStorage.projectCount);this.id=++t,localStorage.setItem("projectCount",t)}}void 0===localStorage.projectCount&&localStorage.setItem("projectCount",0);const r=(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"))?JSON.parse(localStorage.getItem("projectsArray")):[];return{create(t){""===t&&(t="Project Name (Please customize name)");let o=new n(t);return d(t,o),e.push(o),d("projectsArray",e),o},update(t){let o=e.find(e=>e.id===t).name,a=JSON.parse(localStorage[o]),n=JSON.parse(localStorage[a.name]),r=e.findIndex(e=>e.name===n.name);return n.name=document.getElementById("projectName").value,n.todos=a.todos.slice(),e.splice(r,1,n),d(n.name,n),d("projectsArray",e),localStorage.removeItem(a.name),n},delete(t){let o=JSON.parse(localStorage[t]),a=e.findIndex(e=>e.name===o.name);localStorage.removeItem(t),e.splice(a,1),d("projectsArray",e)}}})(),d=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))};var l=r;const i=e=>{let t=s(e);u(t,e),"d-none"!==document.getElementById("todosSection").getAttribute("class")&&document.getElementById("todosSection").setAttribute("class","d-none")},s=e=>{let t=document.createElement("button");return t.setAttribute("class","btn btn-sm btn-block btn-primary addTodoBtn"),t.setAttribute("id",`addTodoBtn-${e.id}`),t.setAttribute("data-id",e.id),t.innerText=`Add Todo for ${e.name}`,t.addEventListener("click",t=>{t.stopPropagation(),c(t.target,e,"newTodo")}),t},c=(e,t,o)=>{document.getElementById("todosDiv").removeChild(e),m(t,o)},m=(e,t,o)=>{let a=document.getElementById("todosForm");void 0!==o&&a.setAttribute("data-update",o),document.getElementById("todosSection").setAttribute("class","mt-3"),a.setAttribute("data-id",e.id),document.getElementById("todosForm").setAttribute("data-action",t)},u=(e,t)=>{document.getElementsByClassName("addTodoBtn")[0]&&document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]),null===document.getElementById(`addTodoBtn-${t.id}`)&&document.getElementById("todosDiv").appendChild(e)},p=e=>{let t=Number(e.getAttribute("data-update")),o=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),a=JSON.parse(localStorage.projectsArray).find(e=>e.id===o).name,n=JSON.parse(localStorage[a]);b.update(n,t,a)},g=e=>{let t=document.getElementsByClassName("todo-form");return[t[0].value,t[1].value,new Date(t[2].value).toDateString(),document.getElementsByTagName("select")[0].value,t[3].value,e]};var b=(()=>({create(e,t,o,n,r="",d){let l=new a(e,t,o,n,r,d),i=JSON.parse(localStorage.getItem(d));return i.todos.push(l),localStorage.setItem(d,JSON.stringify(i)),l},update(e,t,o){let a=e.todos[0].done,n=e.todos.findIndex(e=>e.id==t),[r,d,l,i,s,c]=g(o),m={title:r,description:d,dueDate:l,priority:i,notes:s,project:c,done:a,id:t};e.todos.splice(n,1,m),localStorage.setItem(e.name,JSON.stringify(e))},delete(e,t){let o=JSON.parse(localStorage.getItem(e)),a=o.todos.findIndex(e=>e.id==t);o.todos.splice(a,1),localStorage.setItem(e,JSON.stringify(o))}}))();const y=e=>{let t=JSON.parse(localStorage.getItem(e)),o=document.getElementById("todoBody");o.innerHTML="",null===t||0===t.todos.length?N(e):(document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),t.todos.forEach(e=>{A(o,e,t)}))},N=e=>{let t=document.createElement("p");t.setAttribute("class","emptyTodoMessage"),t.innerText=`No todo items for ${e} yet`,document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),document.getElementById("todoBody").appendChild(t)},A=(e,t,o)=>{let a=document.createElement("tr");a.setAttribute("id",t.id),t.done&&a.setAttribute("class","strikeout");let n=f(),r=document.createElement("td"),d=E(t.id);r.appendChild(d),r.appendChild(n),S(a,t.title),S(a,t.description),S(a,t.dueDate),S(a,t.priority),S(a,t.notes),S(a,t.done,t,o),a.appendChild(r),e.appendChild(a)},S=(e,t,o,a)=>{let n=document.createElement("td");if("boolean"==typeof t){let e=document.createElement("input");e.setAttribute("type","checkbox"),o.done&&e.setAttribute("checked",!0),e.setAttribute("value",t),e.addEventListener("change",e=>{e.stopPropagation(),o.done=!o.done,o.done?e.target.parentNode.parentNode.setAttribute("class","strikeout"):e.target.parentNode.parentNode.removeAttribute("class"),[...e.target.parentNode.parentNode.childNodes[6].childNodes].forEach(e=>e.toggleAttribute("disabled"));let t=o.done;e.target.setAttribute("value",t);let n=a.todos.findIndex(e=>e.id===o.id);a.todos.splice(n,1,o),localStorage.setItem(a.name,JSON.stringify(a))}),n.appendChild(e)}else n.innerText=t;e.appendChild(n)},E=e=>{let t=document.createElement("button");return t.setAttribute("class","btn btn-sm btn-warning mx-1 updateTodo"),t.setAttribute("id",e),t.innerText="Update",B(t),t},f=()=>{let e=document.createElement("button");return e.setAttribute("class","btn btn-sm btn-danger mx-1 deleteTodo"),e.innerText="Delete",v(e),e},B=e=>{e.addEventListener("click",e=>{e.stopPropagation();let t=e.target.parentNode.parentNode;t.parentNode.removeChild(t);let o=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),a=JSON.parse(localStorage.projectsArray).find(e=>e.id===o).name,n=e.target.getAttribute("id"),r=JSON.parse(localStorage[a]);m(r,"updateTodo",n);let d=r.todos.find(e=>e.id==n),l=(r.todos.findIndex(e=>e.id==n),document.getElementsByClassName("todo-form")),i=new Date(d.dueDate);l[0].value=d.title,l[1].value=d.description,l[2].value=`${i.getFullYear()}-0${i.getMonth()+1}-${i.getDate()}`,document.getElementsByTagName("select")[0].value=d.priority,l[3].value=d.notes})},v=e=>{e.addEventListener("click",e=>{e.stopPropagation();let t=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),o=JSON.parse(localStorage.projectsArray).find(e=>e.id===t),a=e.target.parentNode.parentNode.getAttribute("id");b.delete(o.name,a),e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)})},j=e=>{I(),h(e)},I=()=>{let e=document.getElementsByClassName("emptyMessage")[0];void 0!==e&&document.getElementsByTagName("ul")[0].removeChild(e)},h=e=>{let t=document.createElement("li"),o=document.createElement("span");o.setAttribute("id",`projectSpan-${e.id}`);let a=T("delete",e),n=T("update",e);t.setAttribute("class","list-group-item"),t.setAttribute("id",`projectLi-${e.id}`),o.innerText=e.name,t.appendChild(o),t.addEventListener("click",()=>{i(e),y(e.name)}),t.appendChild(a),t.appendChild(n),document.getElementsByTagName("ul")[0].appendChild(t)},T=(e,t)=>{let o=C(e,t);return O(o,t,e),o},C=(e,t)=>{let o="update"===e?"btn-info":"btn-danger",a="update"===e?`update-proj-${t.id}`:`delete-proj-${t.id}`,n=document.createElement("button");return n.setAttribute("class",`btn btn-sm ml-3 ${o}`),n.setAttribute("id",a),n.innerText=e.toUpperCase(),"update"===e&&n.setAttribute("data-id",`${t.id}`),n},O=(e,t,o)=>{e.addEventListener("click",e=>{e.stopPropagation();let a=t.id;t=JSON.parse(localStorage.projectsArray).find(e=>e.id===a),"update"===o?x(e.target,t):D(t)})},x=(e,t)=>{J(e,"update",e.getAttribute("data-id")),document.getElementById("projectName").value=t.name},J=(e,t,o)=>{document.getElementById("projectNameForm").removeAttribute("class"),document.getElementById("projectNameForm").setAttribute("data-action",t),document.getElementById("projectNameForm").setAttribute("data-id",o),e.setAttribute("class","d-none")},D=e=>{l.delete(e.name),P(e)},P=e=>{let t=document.getElementById(`projectLi-${e.id}`);if(document.getElementsByTagName("ul")[0].removeChild(t),"[]"===localStorage.projectsArray){let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}},$=e=>{let t=l.create(e);j(t)},L=e=>{let t=l.update(Number(e.getAttribute("data-id")));document.getElementById(`update-proj-${e.getAttribute("data-id")}`).setAttribute("class","btn btn-sm btn-info ml-3"),document.getElementById(`projectSpan-${e.getAttribute("data-id")}`).innerText=t.name};(()=>{if(null===localStorage.getItem("projectsArray")){let e=[];localStorage.setItem("projectsArray",JSON.stringify(e))}})(),(()=>{"0"===localStorage.projectCount&&l.create("Default Project");if(void 0!==localStorage["Default Project"]){let e=JSON.parse(localStorage["Default Project"]);i(e),y(e.name)}})(),(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"));if(e.length>0)e.forEach(e=>{j(e)});else{let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}})(),document.getElementById("projectNameForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=document.getElementById("projectName").value;"new"===e.getAttribute("data-action")?$(t):L(e),e.setAttribute("class","d-none"),e.reset(),document.getElementById("addProjBtn").setAttribute("class","btn btn-sm btn-primary mt-2")})(e.target)}),document.getElementById("addProjBtn").addEventListener("click",e=>{J(e.target,"new")}),document.getElementById("todosForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=JSON.parse(localStorage.projectsArray),o=Number(e.getAttribute("data-id")),a=t.find(e=>e.id===o),n=g(a.name);"newTodo"===e.getAttribute("data-action")?b.create(...n):p(e),e.reset(),document.getElementById("todosSection").setAttribute("class","d-none"),y(a.name),i(a)})(e.target)})}]);