let persons=[{name:"sai ram ",color:"red",score:0},{name:"sri ram",color:"green",score:0},{name:"hare ram",color:"yellow",score:0},{name:"hare krishna",color:"blue",score:0}]
let cell_container_ele=document.getElementById("cell_container")
for(let i=100;i>=1;i--){
    let cell=document.createElement("div")
    cell.classList="cell"
    cell.id=i
cell.textContent=i 
 cell_container_ele.appendChild(cell)
}

for(let i=0;i<=3;i++){
    let btn=document.createElement("button")
btn.textContent=persons[i].name +" "+ persons[i].score
btn.style.backgroundColor=persons[i].color
btn.onclick=function(){
    let random_num=Math.random()*6 // 
    random_num=Math.ceil(random_num)
    let parent_cell=document.getElementById(persons[i].score)
    if(parent_cell){

        parent_cell.removeChild(document.getElementById(`person${i}`))
    }
    persons[i].score=persons[i].score+random_num
    // here 
    btn.textContent=persons[i].name+" "+persons[i].score
    console.log(i,persons[i],random_num)
    let curr_cell=document.getElementById(persons[i].score)
    let cur_per=document.createElement("div")
    cur_per.id=`person${i}`
    cur_per.style.padding="5px"
    cur_per.style.borderRadius="50%"
    cur_per.style.backgroundColor=persons[i].color 
    curr_cell.appendChild(cur_per)

    
}
document.body.appendChild(btn)
}

