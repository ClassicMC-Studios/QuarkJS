// Nano JS: ex glande nihil
let bound=[]
function $(val){
  setTimeout(()=>{$$();},0);
  return val;
}
function $set(val){
  setTimeout(()=>{$$();},0);
  return val;
}
function $bind(func,id){
  bound.push([func,document.getElementById(id)]);
}
function $$(){
  for(let i=0;i<bound.length;i++){
    bound[i][1].innerHTML = bound[i][0]();
  }
} 
function $css(file) {
  if(file == "bcss"){file = "https://guyotjs.github.io/bcss/bc.css";}
  if(file == "bc-colors"){file = "https://guyotjs.github.io/bcss/bc-colors.css";}
  let head = document.head;
  let link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = file;
  head.appendChild(link);
}