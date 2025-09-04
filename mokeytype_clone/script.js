let sentence_ele=document.getElementById("sentence")
let user_input_ele= document.getElementById("user_input")
let cur_sen=sentence_ele.textContent
cur_sen=cur_sen.split("").map(each_ch=>`<span>${each_ch}</span>`).join("")
sentence_ele.innerHTML=cur_sen
let all_ch_elements=document.querySelectorAll("span")
document.body.addEventListener("keyup",function(e){
    if(e.key=="Backspace"){
        user_input_ele.value=user_input_ele.value.substring(0,user_input_ele.value.length-1)
    }else{

        user_input_ele.value=user_input_ele.value+e.key
    }
    for(let i=0;i<user_input_ele.value.length;i++){
        if(user_input_ele.value[i]==all_ch_elements[i].textContent){
            all_ch_elements[i].style.color="white"
        }else{
            all_ch_elements[i].style.color="#d1172d"
        }

    }

    for(let i=user_input_ele.value.length;i<all_ch_elements.length;i++){
        all_ch_elements[i].style.color="black"
    }
})