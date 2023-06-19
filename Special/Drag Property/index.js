const div = document.querySelector('div');
const p = document.querySelector('p');

p.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("Text",e.target.id);
});

div.addEventListener("dragover",function(e){
    e.preventDefault(); // default property of div is stopped   , now it is ready to receaive the paragraph
});

div.addEventListener("drop",function(e){
    let id = e.dataTransfer.getData("Text");
    console.log(id);
    div.appendChild(document.getElementById(id));
    e.preventDefault(); // default property of div is cancelled
});