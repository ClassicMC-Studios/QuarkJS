let defined = []
export function use(val){
  return val;
}
export function set(val){
  setTimeout(()=>{
    if(defined != []){
      for(let i=0;i<defined.length;i++){
        defined[i][1].innerHTML = defined[i][0]();
      } 
    }
  },0)
  return val;
}
export function view(temp,id){
  defined.push([temp,document.getElementById(id)]);
  for(let i=0;i<defined.length;i++){
    defined[i][1].innerHTML = defined[i][0]();
  }
}
export function css(file) {
  let head = document.head;
  let link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = file;
  head.appendChild(link);
}