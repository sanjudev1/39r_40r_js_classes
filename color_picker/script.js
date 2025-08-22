let heading_ele=document.getElementById("heading")

heading_ele.classList.add("heading")
let colors=["red","orange","blue","green"]
for(let i=0;i<=3;i++){

    let btn =document.createElement("button")
    btn.textContent=colors[i]
    btn.style.backgroundColor=colors[i]
    btn.onclick=function(){
     all_in_one(colors[i])
    }
    document.body.appendChild(btn)
}
// function changeToRedColor(){
//     document.body.style.backgroundColor="red"
// }
// function changeToOrangeColor(){
//     document.body.style.backgroundColor="orange"
// }
// function changeToBlueColor(){
//     document.body.style.backgroundColor="blue"
// }
// function changeToGreenColor(){
//     document.body.style.backgroundColor="green"
// }

function all_in_one(color){
 document.body.style.backgroundColor=color
}