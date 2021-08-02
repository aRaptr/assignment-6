
window.onload = toggle;
function toggle(){
       buttonState = 1;// show by default
       button = document.getElementById("button");
       div = document.getElementById("text");

    button.onclick= click;
     
}

function click(){
    
    if(buttonState == 1){
        hide();
    }else if(buttonState == 0 ){
        show();
    }  
}

function show(){
    div.innerHTML = "Now you see me";
    button.value = "Hide";
    buttonState = 1;
    
}
function hide(){
    div.innerHTML = "";
    button.value = "Show";
    buttonState = 0;
}










