var heading= document.createElement("h1");


// function create(){
//     heading.innerHTML="Good Morning";
    // document.body.appendChild(heading);
// }
// function remove(){
//     heading.remove();
// }

var head = document.getElementById("head");
var btn = document.getElementById("btn");

btn.addEventListener("click", changecolor);
// head.addEventListener("mouseover",changebg);

function changecolor(){
    head.style.color="blue";
}

// function changebg(){
//     head.style.backgroundColor= "green";
// }