//1.tag selector

const h=document.getElementsByTagName("h1");
console.log(h[0]);

//2.id selector
const id=document.getElementById("id1");
console.log(id);
//3.class selector
const class1=document.getElementsByClassName("class1");
console.log(class1[0]);
//4.query selector
const query=document.querySelector(".class1");              
console.log(query);
//5.query selector all
const queryAll=document.querySelectorAll(".class1");
console.log(queryAll[0]);   
const aa=document.createElement("h2");
aa.innerHTML="hi this is a new element";
document.body.appendChild(aa);      
