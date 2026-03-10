async function login(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

if(!email || !password){

alert("Please enter email and password")
return

}

try{

const res = await fetch("http://localhost:3000/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email:email,
password:password
})

})

const data = await res.json()

if(data.success){

/* SAVE USER INFO FOR OTHER PAGES */

localStorage.setItem("username", data.name)
localStorage.setItem("useremail", data.email)

alert("Login successful")

/* REDIRECT TO DASHBOARD */

window.location.href="citizen_dashboard.html"

}
else{

alert(data.message || "Invalid email or password")

}

}
catch(err){

alert("Server error. Please try again.")

}

}
