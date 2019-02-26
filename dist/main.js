!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);class n{constructor(e,t,o,n,a="",r){this.title=e,this.description=t,this.dueDate=o,this.priority=n,this.notes=a,this.project=r,this.id=Math.round(1e21*Math.random(),0),this.done=!1}}const a=e=>{let t=r(e);i(t,e),"d-none"!==document.getElementById("todosSection").getAttribute("class")&&document.getElementById("todosSection").setAttribute("class","d-none")},r=e=>{let t=document.createElement("button");return t.setAttribute("class","btn btn-sm btn-block btn-primary addTodoBtn"),t.setAttribute("id",`addTodoBtn-${e.id}`),t.setAttribute("data-id",e.id),t.innerText=`Add Todo for ${e.name}`,t.addEventListener("click",t=>{t.stopPropagation(),d(t.target,e,"newTodo")}),t},d=(e,t,o)=>{document.getElementById("todosDiv").removeChild(e),l(t,o)},l=(e,t,o)=>{let n=document.getElementById("todosForm");n.setAttribute("data-id",e.id),void 0!==o&&n.setAttribute("data-update",o),document.getElementById("todosSection").setAttribute("class","mt-3"),document.getElementById("todosForm").setAttribute("data-action",t)},i=(e,t)=>{document.getElementsByClassName("addTodoBtn")[0]&&document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]),null===document.getElementById(`addTodoBtn-${t.id}`)&&document.getElementById("todosDiv").appendChild(e)},s=e=>{let t=Number(e.getAttribute("data-update")),o=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),n=p(o),a=g(n);u.update(a,t,n)},c=e=>{let t=document.getElementsByClassName("todo-form");return[t[0].value,t[1].value,new Date(t[2].value).toDateString(),document.getElementsByTagName("select")[0].value,t[3].value,e]};var u=(()=>({create(e,t,o,a,r="",d){let l=new n(e,t,o,a,r,d),i=JSON.parse(localStorage.getItem(d));return i.todos.push(l),localStorage.setItem(d,JSON.stringify(i)),l},update(e,t,o){let n=e.todos.findIndex(e=>e.id==t),a=e.todos[n].done,[r,d,l,i,s,u]=c(o),m={title:r,description:d,dueDate:l,priority:i,notes:s,project:u,done:a,id:t};e.todos.splice(n,1,m),localStorage.setItem(e.name,JSON.stringify(e))},delete(e,t){let o=JSON.parse(localStorage.getItem(e)),n=o.todos.findIndex(e=>e.id==t);o.todos.splice(n,1),localStorage.setItem(e,JSON.stringify(o))}}))();const m=e=>{let t=g(e),o=document.getElementById("todoBody");o.innerHTML="",null===t||0===t.todos.length?b(e):(document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),t.todos.forEach(e=>{y(o,e,t)}))},p=e=>JSON.parse(localStorage.projectsArray).find(t=>t.id===e).name,g=e=>JSON.parse(localStorage[e]),b=e=>{let t=document.createElement("p");t.setAttribute("class","emptyTodoMessage"),t.innerText=`No todo items for ${e} yet`,document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),document.getElementById("todoBody").appendChild(t)},y=(e,t,o)=>{let n=document.createElement("tr"),a=document.createElement("td"),r=f(),d=N(t.id);a.appendChild(d),a.appendChild(r),n.setAttribute("id",t.id),t.done&&n.setAttribute("class","strikeout"),["title","description","dueDate","priority","notes","done"].forEach(e=>{"done"===e?v(n,t[e],t,o):v(n,t[e])}),n.appendChild(a),e.appendChild(n)},N=e=>{let t=document.createElement("button");return t.setAttribute("class","btn btn-sm btn-warning mx-1 updateTodo"),t.setAttribute("id",e),t.innerText="Update",t.addEventListener("click",e=>{e.stopPropagation(),A(e.target)}),t},A=e=>{let t=e.parentNode.parentNode,o=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),n=p(o),a=e.getAttribute("id"),r=g(n);t.parentNode.removeChild(t),l(r,"updateTodo",a),E(r,a)},E=(e,t)=>{let o=e.todos.find(e=>e.id==t),n=document.getElementsByClassName("todo-form"),a=new Date(o.dueDate);n[0].value=o.title,n[1].value=o.description,n[2].value=`${a.getFullYear()}-0${a.getMonth()+1}-${a.getDate()}`,document.getElementsByTagName("select")[0].value=o.priority,n[3].value=o.notes},f=()=>{let e=document.createElement("button");return e.setAttribute("class","btn btn-sm btn-danger mx-1 deleteTodo"),e.innerText="Delete",e.addEventListener("click",e=>{e.stopPropagation(),S(e.target)}),e},S=e=>{let t=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),o=p(t),n=e.parentNode.parentNode.getAttribute("id");u.delete(o,n),e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)},v=(e,t,o,n)=>{let a=document.createElement("td");"boolean"==typeof t?a.appendChild(B(t,o,n)):a.innerText=t,e.appendChild(a)},B=(e,t,o)=>{let n=document.createElement("input");return n.setAttribute("type","checkbox"),t.done&&n.setAttribute("checked",!0),n.setAttribute("value",e),n.addEventListener("change",e=>{e.stopPropagation(),h(e.target,t,o)}),n},h=(e,t,o)=>{t.done=!t.done,j(e,t.done),[...e.parentNode.parentNode.childNodes[6].childNodes].forEach(e=>e.toggleAttribute("disabled"));let n=t.done;e.setAttribute("value",n);let a=o.todos.findIndex(e=>e.id===t.id);o.todos.splice(a,1,t),localStorage.setItem(o.name,JSON.stringify(o))},j=(e,t)=>{t?e.parentNode.parentNode.setAttribute("class","strikeout"):e.parentNode.parentNode.removeAttribute("class")};class I{constructor(e){this.name=e,this.todos=[];let t=Number(localStorage.projectCount);this.id=++t,localStorage.setItem("projectCount",t)}}void 0===localStorage.projectCount&&localStorage.setItem("projectCount",0);const T=(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"))?JSON.parse(localStorage.getItem("projectsArray")):[];return{create(t){""===t&&(t="Project Name (Please customize name)");let o=new I(t);return C(t,o),e.push(o),C("projectsArray",e),o},update(t){let o=e.find(e=>e.id===t).name,n=JSON.parse(localStorage[o]),a=JSON.parse(localStorage[n.name]),r=e.findIndex(e=>e.name===a.name);return a.name=document.getElementById("projectName").value,a.todos=n.todos.slice(),e.splice(r,1,a),C(a.name,a),C("projectsArray",e),localStorage.removeItem(n.name),a},delete(t){let o=JSON.parse(localStorage[t]),n=e.findIndex(e=>e.name===o.name);localStorage.removeItem(t),e.splice(n,1),C("projectsArray",e)}}})(),C=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))};var O=T;const x=e=>{J(),D(e)},J=()=>{let e=document.getElementsByClassName("emptyMessage")[0];void 0!==e&&document.getElementsByTagName("ul")[0].removeChild(e)},D=e=>{let t=document.createElement("li"),o=document.createElement("span"),n=P("delete",e),r=P("update",e);o.setAttribute("id",`projectSpan-${e.id}`),o.innerText=e.name,t.setAttribute("class","list-group-item"),t.setAttribute("id",`projectLi-${e.id}`),t.addEventListener("click",()=>{e=JSON.parse(localStorage.projectsArray).find(t=>t.id===e.id),a(e),m(e.name)}),[o,n,r].forEach(e=>t.appendChild(e)),document.getElementsByTagName("ul")[0].appendChild(t)},P=(e,t)=>{let o=$(e,t);return L(o,t,e),o},$=(e,t)=>{let o="update"===e?"btn-info":"btn-danger",n="update"===e?`update-proj-${t.id}`:`delete-proj-${t.id}`,a=document.createElement("button");return a.setAttribute("class",`btn btn-sm ml-3 ${o}`),a.setAttribute("id",n),a.innerText=e.toUpperCase(),"update"===e&&a.setAttribute("data-id",`${t.id}`),a},L=(e,t,o)=>{e.addEventListener("click",e=>{e.stopPropagation(),t=JSON.parse(localStorage.projectsArray).find(e=>e.id===t.id),"update"===o?M(e.target,t):w(t)})},M=(e,t)=>{k(e,"update",e.getAttribute("data-id")),document.getElementById("projectName").value=t.name},k=(e,t,o)=>{let n=document.getElementById("projectNameForm");n.removeAttribute("class"),n.setAttribute("data-action",t),n.setAttribute("data-id",o),e.setAttribute("class","d-none")},w=e=>{O.delete(e.name),F(e)},F=e=>{let t=document.getElementById(`projectLi-${e.id}`);if(document.getElementsByTagName("ul")[0].removeChild(t),"[]"===localStorage.projectsArray){let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}},_=e=>{let t=O.create(e);x(t)},U=e=>{let t=O.update(Number(e.getAttribute("data-id")));document.getElementById(`update-proj-${e.getAttribute("data-id")}`).setAttribute("class","btn btn-sm btn-info ml-3"),document.getElementById(`projectSpan-${e.getAttribute("data-id")}`).innerText=t.name};(()=>{if(null===localStorage.getItem("projectsArray")){let e=[];localStorage.setItem("projectsArray",JSON.stringify(e))}})(),(()=>{"0"===localStorage.projectCount&&O.create("Default Project");if(void 0!==localStorage["Default Project"]){let e=JSON.parse(localStorage["Default Project"]);a(e),m(e.name)}})(),(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"));if(e.length>0)e.forEach(e=>{x(e)});else{let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}})(),document.getElementById("projectNameForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=document.getElementById("projectName").value;"new"===e.getAttribute("data-action")?_(t):U(e),e.setAttribute("class","d-none"),e.reset(),document.getElementById("addProjBtn").setAttribute("class","btn btn-sm btn-primary mt-2")})(e.target)}),document.getElementById("addProjBtn").addEventListener("click",e=>{k(e.target,"new")}),document.getElementById("todosForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=JSON.parse(localStorage.projectsArray),o=Number(e.getAttribute("data-id")),n=t.find(e=>e.id===o),r=c(n.name);"newTodo"===e.getAttribute("data-action")?u.create(...r):s(e),e.reset(),document.getElementById("todosSection").setAttribute("class","d-none"),m(n.name),a(n)})(e.target)})}]);