
let user_container=document.getElementById("users_data")
function fetchallusers(){
    fetch("https://gorest.co.in/public/v2/users",
      {  method:"GET",
        headers:{
        
            Authorization:"Bearer 766e34c462deab3c81680017006289c59bd61183968dc098f2969594b52a4bd0"
        },
    }
    )
    .then(function(response){
         return response.json()
    })
    .then(function(jsondata){
      console.log(jsondata)
      user_container.innerHTML=""
      for(let i=0;i<jsondata.length;i++){
          let card=document.createElement("div")
          card.classList="card"
          card.innerHTML=
          `<p> ${jsondata[i].id}</p>
          <p>${jsondata[i].name}</p>
          <p>${jsondata[i].email}</p>
           <p>${jsondata[i].gender}</p>
          `
          user_container.appendChild(card)
      }
    })
}

fetchallusers()




function AddUser(){
    let Name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let gender=document.getElementById("gender").value
    let status=document.getElementById("status").value

    let user={name:Name,email,gender,status}
    fetch("https://gorest.co.in/public/v2/users",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 766e34c462deab3c81680017006289c59bd61183968dc098f2969594b52a4bd0"
        },
        body:JSON.stringify(user)
    })
    .then(function(response){
        return response.json()
    })
    .then(function(jsondata){
        document.getElementById("name").value=""
        document.getElementById("email").value=""
        fetchallusers()
       
    })
}