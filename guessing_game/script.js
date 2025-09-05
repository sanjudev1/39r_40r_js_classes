let names=["sam" , "kajol" , "soundarya", "mahesh", "keerthi", "nithya menon", "ntr","prabhas"]
index=Math.random()*names.length 
index=Math.ceil(index)

system_generated_name=names[index]

let guess_name=document.getElementById("user_input")
let chances=0

function guessName(){
      chances+=1
    if(guess_name.value==system_generated_name){
        if(chances==1){
            alert("you got gold medal")
        }else if(chances==2){
            alert("you got silver medal")
        }else if(chances==3){
            alert("you got bronze medal")
        }else{
            alert(`thank you for participating...${chances}`)
        }
    }else if(chances>0){
        console.log("you answer is incorrect ")
    }
  

}