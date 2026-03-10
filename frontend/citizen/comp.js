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

})