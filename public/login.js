let selectedRole = "citizen"

/* ROLE BUTTON SELECTION */

document.querySelectorAll(".role").forEach(btn => {

btn.addEventListener("click", function(){

document.querySelectorAll(".role").forEach(b=>b.classList.remove("active"))

this.classList.add("active")

selectedRole = this.dataset.role

})

})

/* LOGIN FUNCTION */

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

/* CHECK ROLE */

if(selectedRole !== data.role){

alert("Incorrect role selected")
return

}

/* SAVE USER INFO */

localStorage.setItem("username", data.name)
localStorage.setItem("useremail", data.email)
localStorage.setItem("role", data.role)
localStorage.setItem("department", data.department)

alert("Login successful")

/* REDIRECT */

if(data.role === "admin" ){

window.location.href = "admin.html"

}
if(data.role === "officer" ){

window.location.href = "off.html"
}

else{

window.location.href = "admin.html"

}

}
else{

alert(data.message || "Invalid email or password")

}

}
catch(err){

alert("Server error. Please try again.")

}

}