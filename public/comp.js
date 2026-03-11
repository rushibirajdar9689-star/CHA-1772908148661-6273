// FILE UPLOAD MESSAGE

const fileInput = document.getElementById("fileUpload")

fileInput.addEventListener("change",()=>{

if(fileInput.files.length > 0){
alert("File uploaded: " + fileInput.files[0].name)
}

})

const mongoose = require("mongoose")

const ComplaintSchema = new mongoose.Schema({
    department: String,
    title: String,
    description: String,
    status: {
        type: String,
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Complaint", ComplaintSchema)


/* SERVICE SELECTION */

const services = document.querySelectorAll(".service.selected").innerText
let department = ""
if(service === "Water Supply"){
department = "water"
}

if(service === "Electricity"){
department = "electricity"
}

if(service === "Sanitation / Garbage"){
department = "sanitation"
}

if(service === "Property Tax"){
department = "tax"
}

if(service === "Roads & Infrastructure"){
department = "roads"
}



/* SUBMIT COMPLAINT */

document.querySelector(".submit").addEventListener("click", async ()=>{

const title = document.querySelector("input").value
const description = document.querySelector("textarea").value
const location = document.querySelectorAll("input")[1].value

const latitude = document.getElementById("lat").innerText
const longitude = document.getElementById("lng").innerText

const user = localStorage.getItem("username")

const response = await fetch("http://localhost:3000/getComplaints/"+user,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

user:user,
title:title,
description:description,
location:location,
latitude:latitude,
longitude:longitude

})

})

const data = await response.json()

alert(data.message)

window.location.href="citizen_dashboard.html"

})

fetch("http://localhost:3000/addComplaint",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
title,
location,
category:service,
department,
user:localStorage.getItem("username")
})
})