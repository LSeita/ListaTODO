(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"body{\n    margin: 0;\n    padding: 0;\n}\n\n.container{\n    display: grid;\n    grid-template-columns: 20% 80%;\n    grid-template-rows: 7% 93%;\n    height: 100vh;\n}\n\n.navbar{\n    grid-column: 1/-1;\n    background-color: green;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n#menuBtn{\n    margin: 1rem;\n}\n#navTitle{\n    margin-right: auto;\n}\n\n.projectContainer{\n    background-color: red;\n    text-align: center;\n    margin: 0;\n}\n.projectMenu{\n    background-color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px;\n}\n.projectItem{\n    margin-bottom: 1rem;\n}\n\n.todoContainer{\n    background-color: lightblue;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.todoBtn{\n    width: 100%;\n    display: flex;\n    font-size: 18px;\n    align-items: center;\n}\n#projectDiv{\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n}\n#addTodoBtn{\n    max-width: fit-content;\n    border-radius: 50px;\n    border: black 1px solid;\n    background-color: red;\n    color: white;\n    margin-right: 10px;\n    font-size: 20px;\n}\n.todoCollapsible{\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n    background-color: rgba(160, 166, 168, 0.848);\n}       \n.contentTitle{\n    text-align: center;\n}\n.todoContent{\n    display: flex;\n    flex-direction: column; \n    max-width: 50%;\n}\n#projectName{\n    font-size: 35px;\n    padding: 5px;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    margin-left: 10px;\n}\n.todoTitle{\n    margin-left: 0.2rem;    \n}\n.todoDate{\n    margin-left: auto;\n    margin-right: 0.5rem;\n}\n.removeBtn{\n    border: none;\n    font-size: 25px;\n    color: red;\n}\n.prio{\n    font-size: 25px;\n    border: none;\n}\n.high{\n    color: red;\n}\n.med{\n    color: orangered;\n}\n.low{\n    color: green;\n}\n #addTodoContainer{\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4); \n }\n #addTodoContent{\n    background-color: magenta;\n    margin: auto;\n    padding: 20px;\n    width: 80%;\n }\n #addForm{\n    display: flex;\n    flex-direction: column;\n }\n #idBtns{\n    display: flex;\n    justify-content: center;\n    padding: 5px;\n }\n #idBtns > * {\n    margin-left: 10px;\n }\n #todoTitle, #todoDesc{\n    padding: 5px;\n }\n #todoTitle{\n    font-size: 30px;\n }",""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=d,n.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),d=t(565),c=t.n(d),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=(()=>{const e=[];return{addProject:n=>{const t=(e=>{let n=[];return{getName:()=>e,addTodo:(e,t,o,r)=>{const a=((e,n,t,o,r)=>({title:e,desc:n,date:t,prio:o,notes:void 0}))(e,t,o,r);n.push(a)},removeTodo:e=>{const t=n.findIndex((n=>n===e));n.splice(t,1)},listTodos:()=>n}})(n);e.push(t)},listProjects:()=>e,removeProject:function(n){const t=e.findIndex((e=>e===n));e.splice(t,1)}}})();g.addProject("Projeto 1"),g.addProject("Projeto 2"),g.addProject("Projeto 3");const v=g.listProjects();v[0].addTodo("Estudar para prova de matematica","Materias que vão cair:\nTrigonometria\nCalculo","24/07/23","high"),v[0].addTodo("Tarefa 3","Desc 3","26/07/23","low"),v[1].addTodo("Tarefa 2","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","25/07/23","low");const h=function(e,n){e.removeTodo(n)},x=function(e){const n=document.getElementById("todoTitle").value,t=document.getElementById("todoDesc").value,o=document.getElementById("todoDate").value,r=document.getElementById("todoPrio").value;e.addTodo(n,t,o,r)};(()=>{const e=document.getElementsByClassName("projectMenu")[0],n=document.getElementsByClassName("todoContainer")[0];function t(e){const r=document.createElement("div");r.setAttribute("id","projectDiv");const a=document.createElement("span");a.textContent=e.getName(),a.setAttribute("id","projectName");const i=document.createElement("button");i.setAttribute("id","addTodoBtn"),i.textContent="+",i.addEventListener("click",(()=>function(e){const n=document.getElementById("addTodoContainer"),r=document.getElementById("cancelBtn"),a=document.getElementById("addBtn");n.style.display="block",r.onclick=e=>{n.style.display="none",e.preventDefault()},a.onclick=r=>{x(e),n.style.display="none",o(),t(e),r.preventDefault()}}(e))),r.appendChild(a),r.appendChild(i),n.appendChild(r),e.listTodos().forEach((function(r){const a=document.createElement("button"),i=document.createElement("button"),d=document.createElement("span"),c=document.createElement("span"),s=document.createElement("button");i.classList.add("prio",`${r.prio}`),i.textContent="O",i.addEventListener("click",(()=>alert("Oi"))),d.classList.add("todoTitle"),d.textContent=r.title,c.classList.add("todoDate"),c.textContent=r.date,s.classList.add("removeBtn"),s.textContent="X",s.addEventListener("click",(()=>{confirm(`Tem certeza que quer remover a tarefa: "${r.title}"?`)&&(h(e,r),o(),t(e))})),a.classList.add("todoBtn"),a.append(i,d,c,s),n.appendChild(a);const l=document.createElement("div"),u=document.createElement("div");l.classList.add("todoCollapsible"),u.classList.add("todoContent");const p=document.createElement("span");p.classList.add("contentTitle"),p.textContent="Descrição:";const m=document.createElement("span");m.textContent=r.desc,u.appendChild(p),u.appendChild(m),l.appendChild(u),n.appendChild(l),a.addEventListener("click",(()=>{l.style.maxHeight?l.style.maxHeight=null:l.style.maxHeight=l.scrollHeight+"px"}))}))}function o(){for(;n.firstChild;)n.removeChild(n.lastChild)}g.listProjects().forEach((function(n){const r=document.createElement("button");r.classList.add("projectItem"),r.textContent=`${n.getName()}`,r.addEventListener("click",(()=>{o(),t(n)})),e.appendChild(r)}))})()})()})();