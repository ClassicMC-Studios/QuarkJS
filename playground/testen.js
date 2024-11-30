import {use, set, view, css} from './oden.js'

let count = use(0);

window.add = function(){
  count = set(count+1);
}

css("https://guyotjs.github.io/bcss/bc.css")
const template = () => {
  return `
    <div class="true-center text-center">
      <h1>${count}</h1>
      <button onclick="add()" class="p border-gray gray r bg-white m">+</button>
    </div>
  `;
}



view(template, "app");