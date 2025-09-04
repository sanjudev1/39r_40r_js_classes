let cell_conatiner_ele=document.getElementById("cell_container")
for(let i=100;i>=1;i--){
    let cell=document.createElement("div")
    cell.textContent=i
    cell.classList="cell"
    cell.id=`cell${i}`
    cell_conatiner_ele.appendChild(cell)
}

arr=[{name:"bala krishna",color:"yellow",score:0},{name:"chiranjeevi",color:"red",score:0},{name:"nagarjuna",color:"green",score:0},{name:"venkatesh",score:0,color:"blue"}]
for(let i=0;i<4;i++){
let btn= document.createElement("button")
btn.textContent=arr[i].name +" "+ arr[i].score
btn.style.backgroundColor=arr[i].color
btn.style.fontSize="20px"
btn.onclick=function(){
    let random =Math.random()*6
    random=Math.ceil(random)

    // parent.removed(child)
    let child_node=document.getElementById(`person${i}`) //
   if(child_node){

       child_node.parentNode.removeChild(child_node)
   }
    arr[i].score=random+arr[i].score // update score
    btn.textContent=arr[i].name +" "+ arr[i].score
    if(arr[i].score>=100){
        alert(`${arr[i].name}You are the winner`)
    }
    let curr_cel=document.getElementById(`cell${arr[i].score}`)
    let cur_person=document.createElement("div")
    cur_person.style.backgroundColor=arr[i].color
    cur_person.classList="person"
    cur_person.id=`person${i}`
    curr_cel.appendChild(cur_person)
}
document.body.appendChild(btn)
}