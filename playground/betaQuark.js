let defined = []
function extend(id=undefined,func=undefined){
  defined.push([id,func]);
  for(let i=0;i<defined.length;i++){
    document.getElementById(defined[i][0]).innerHTML = defined[i][1]();
  }
}
function reExtend(){
  for(let i=0;i<defined.length;i++){
    document.getElementById(defined[i][0]).innerHTML = defined[i][1]();
  }
}
function useState(type){
  return [type, (val)=>{
      setTimeout(()=>{reExtend()},0);
      return val;
  }]
}

