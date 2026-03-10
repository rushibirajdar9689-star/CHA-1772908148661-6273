// service selection animation
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


const lat = document.getElementById("lat").innerText;
const lng = document.getElementById("lng").innerText;

fetch("/addComplaint",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
title:"Water leakage",
latitude:lat,
longitude:lng
})

});

var map = L.map('map').setView([latitude, longitude], 16);

L.marker([latitude, longitude]).addTo(map)
.bindPopup("Complaint Location")
.openPopup();