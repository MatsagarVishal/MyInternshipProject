const inputText = document.getElementById("input-box");
const ul = document.querySelector(".ul");

function addTask() {
    if (inputText.value=="") {
        alert("enter something!!")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputText.value;
        ul.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);
        inputText.value="";
    }
    saveTask();
}

ul.addEventListener("click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false );

function saveTask(){
    localStorage.setItem("TodoData",ul.innerHTML);
}

function getSavedData(){

    ul.innerHTML=localStorage.getItem("TodoData");

}
getSavedData();