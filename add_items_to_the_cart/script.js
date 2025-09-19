let items_con_ele=document.getElementById("items_container")
arr=["chicken majestic","Apricot delight","Chicken biryani","Gongura chicken"]


function displayItems(){
    for(let i=0;i<arr.length;i++){
    let item=document.createElement("p")
    item.textContent=arr[i]
    let del_btn=document.createElement("button")
    del_btn.textContent="delete"
    del_btn.style.border="1px solid red"
    del_btn.style.color="red"
    del_btn.onclick=function(){
        console.log(i)
        arr.splice(i,1)
        console.log(arr)
        items_con_ele.textContent=""
        displayItems()
    }
    item.appendChild(del_btn)
    items_con_ele.appendChild(item)
}

}
displayItems()


function addnewItem(){
let cur_item=document.getElementById("cur_item")
console.log(cur_item.value)
arr.push(cur_item.value)
cur_item.value=""
console.log(arr)
items_con_ele.textContent=""
displayItems()
}
