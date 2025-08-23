
 let img_ele=document.getElementById("image")
let TimerId=setTimeout(function(){
 console.log("happy birthday...")
 img_ele.src="https://media.istockphoto.com/id/955124060/photo/nuclear-bomb-explosion-mushroom-cloud.jpg?s=612x612&w=0&k=20&c=64Wac4ttC1DgBeBvCmYHWB56OyckJGNiO3AjsIe8c2c="
},7000)


let h2_ele=document.createElement("h2")
let num1=Math.random()*100
num1=Math.floor(num1)

let num2=Math.random()*100
num2=Math.floor(num2)
h2_ele.textContent=`what is the ouput of ${num1} + ${num2} =`

document.body.appendChild(h2_ele)

// we are creating input type 

let input_ele=document.createElement("input")
// input_ele.type="text"
document.body.appendChild(input_ele)



// create a submit button

let submit_btn=document.createElement("button")
submit_btn.textContent="save your country with your skills"
submit_btn.onclick=function(){
    if(input_ele.value==num1+num2){
      clearTimeout(TimerId)
      img_ele.src="https://5.imimg.com/data5/SELLER/Default/2023/12/370478461/YK/RI/SX/5650316/indian-national-polyester-flag.jpeg"
    }
}
document.body.appendChild(submit_btn)