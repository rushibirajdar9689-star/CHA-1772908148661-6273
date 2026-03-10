async function signup(){

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value
const role = document.getElementById("role").value

if(!name || !email || !password){
alert("Please fill all fields")
return
}

try{

const response = await fetch("http://localhost:3000/signup",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
name:name,
email:email,
password:password,
role:role
})

})

const data = await response.json()

if(data.success){

alert("Signup successful!")

window.location.href="login.html"

}else{

alert(data.message)

}

}catch(err){

alert("Server error")

}

}