// function greetingMsg(){
//   console.log("hello developers..")
// }

let btn_ele=document.getElementById("btn")

// btn_ele.onclick=function(){
//     console.log("hello developers...")
// }

// btn_ele.addEventListener("click",function(){
//     console.log("hello software engineers")
// })

let user_input=document.getElementById("input")

user_input.addEventListener("keyup",function(event){
    console.log("EventListener...is triggered ",event.type,event.target.value)
})