// let userForm=document.getElementById("userForm")
// let name_ele = document.getElementById("name")
// let email_ele = document.getElementById("email")
// let gender_ele= document.getElementById("gender")
// userForm.addEventListener("submit",function(event){
//    event.preventDefault()
//    console.log(event.target.value)
// })

// name_ele.addEventListener("blur",function(e){
//     console.log(e.target.value)
// })

// email_ele.addEventListener("focus",function(e){
//     console.log(e.target.value)
// })

// gender_ele.addEventListener("change",function(e){
//    console.log(e.target.value,"chnage")
// })


let user_form_ele=document.getElementById("userForm")
let name_ele=document.getElementById("name")
let email_ele= document.getElementById("email")
let gender_ele=document.getElementById("gender")
user_form_ele.addEventListener("submit",function(e){
  console.log("function is triiggered")
  e.preventDefault()
})

name_ele.addEventListener("blur",function(){
    console.log("blur event is triggerd")
})

email_ele.addEventListener("focus",function(){
    console.log("focus event is trihgered")
})

gender_ele.addEventListener("change",function(){
    console.log("change event is triggerd....")
})



