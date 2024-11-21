function exportApp(){
    document.getElementById("app").innerHTML = app();
}
function useState(type){
    return [type, (val)=>{
        setTimeout(()=>{exportApp()},0);
        return val;
    }]
}
