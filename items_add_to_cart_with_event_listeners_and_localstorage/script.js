let inputele=document.getElementById("input_ele")
 let text_area_ele=document.getElementById("text_area_ele")
 text_area_ele.value=localStorage.getItem("items")
function AddyourItems(event){
    console.log(inputele.value)
    if(event.key=="Control" && event.key=="Enter"){

        text_area_ele.value=text_area_ele.value+" "+inputele.value
        localStorage.setItem("items",text_area_ele.value)
        inputele.value=""
    }
}

let store_btn_ele=document.getElementById("store_btn")
// onevent listener
// store_btn_ele.onclick=AddyourItems

inputele.addEventListener("keyup",AddyourItems)