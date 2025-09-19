

let parent_ele=document.getElementById("parent")
let child_ele=document.getElementById("child")
let subchild_ele=document.getElementById("subchild")

parent_ele.addEventListener("click",function(){
    console.log("parent is clicked")
},true)

child_ele.addEventListener("click",function(){
    console.log("child is clicked")
},false)

subchild_ele.addEventListener("click",function(){
    console.log("sub child is triggered")
},false)