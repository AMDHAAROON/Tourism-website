function menu(){
    var menu = document.getElementById("mmenu");
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");    
    }else{
        menu.classList.add("hidden");
    }
}
function hide(){
    var menu = document.getElementById("mmenu");
    
        menu.classList.add("hidden");   
    
}