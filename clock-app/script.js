

let timer_ele=document.getElementById("timer")
let count=10
let a=setInterval(
    ()=>{
        timer_ele.textContent=count
      count-=1 
      if(count==-1){
        clearInterval(a)
      }
    },1000
)

function taskSubmit(){
    clearInterval(a)
}



