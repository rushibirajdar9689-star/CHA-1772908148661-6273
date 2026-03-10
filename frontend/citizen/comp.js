<<<<<<< HEAD
// service selection animation
const fileInput = document.getElementById("fileUpload")

fileInput.addEventListener("change",()=>{

alert("File uploaded: " + fileInput.files[0].name)

})

const services = document.querySelectorAll(".service")

services.forEach(service=>{

service.addEventListener("click",()=>{

services.forEach(s=>s.classList.remove("active"))

service.classList.add("active")

})

=======
// service selection animation
const fileInput = document.getElementById("fileUpload")

fileInput.addEventListener("change",()=>{

alert("File uploaded: " + fileInput.files[0].name)

})

const services = document.querySelectorAll(".service")

services.forEach(service=>{

service.addEventListener("click",()=>{

services.forEach(s=>s.classList.remove("active"))

service.classList.add("active")

})

>>>>>>> db93cf99883e8ca345a09e4a4c8fb4a11b7ccf28
})