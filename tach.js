<<<<<<< HEAD
//login
const roles = document.querySelectorAll(".role")
const btn = document.getElementById("loginBtn")
const body = document.body

roles.forEach(role=>{

role.addEventListener("click",()=>{

roles.forEach(r=>r.classList.remove("active"))

role.classList.add("active")

let selected = role.dataset.role

btn.innerText = "Sign In as " + selected

// remove previous themes
body.classList.remove("citizen-theme","officer-theme","admin-theme")

// apply theme
if(selected==="Citizen"){
body.classList.add("citizen-theme")
}

if(selected==="Officer"){
body.classList.add("officer-theme")
}

if(selected==="Admin"){
body.classList.add("admin-theme")
}

})

=======
//login
const roles = document.querySelectorAll(".role")
const btn = document.getElementById("loginBtn")
const body = document.body

roles.forEach(role=>{

role.addEventListener("click",()=>{

roles.forEach(r=>r.classList.remove("active"))

role.classList.add("active")

let selected = role.dataset.role

btn.innerText = "Sign In as " + selected

// remove previous themes
body.classList.remove("citizen-theme","officer-theme","admin-theme")

// apply theme
if(selected==="Citizen"){
body.classList.add("citizen-theme")
}

if(selected==="Officer"){
body.classList.add("officer-theme")
}

if(selected==="Admin"){
body.classList.add("admin-theme")
}

})

>>>>>>> db93cf99883e8ca345a09e4a4c8fb4a11b7ccf28
})