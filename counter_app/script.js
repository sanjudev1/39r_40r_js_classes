let count_ele=document.getElementById("count")
if(localStorage.getItem("count")){

    count_ele.textContent=localStorage.getItem("count")
}
function onIncrement(){
    let cur_val=count_ele.textContent // '0'
    cur_val=parseInt(cur_val) // 0 
        count_ele.textContent=cur_val+1
        localStorage.setItem("count",count_ele.textContent)

}
function onReset(){
        count_ele.textContent=0
   localStorage.setItem("count",count_ele.textContent)

}
function onDecrement(){

    let cur_val=count_ele.textContent // '0'
    cur_val=parseInt(cur_val) // 0 
        count_ele.textContent=cur_val-1
       localStorage.setItem("count",count_ele.textContent)

}