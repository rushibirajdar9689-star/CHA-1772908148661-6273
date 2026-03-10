async function loadTracking(){

const complaintId = localStorage.getItem("trackComplaint")

const res = await fetch("http://localhost:3000/track/"+complaintId)

const data = await res.json()

if(!data.success){
alert("Complaint not found")
return
}

const complaint = data.complaint

document.getElementById("complaintTitle").innerText =
"Complaint: " + complaint.title

updateProgress(complaint.status)

}

function updateProgress(status){

let progress = 0

if(status === "Submitted"){
progress = 25
document.getElementById("step1").classList.add("active")
}

if(status === "In Review"){
progress = 50
document.getElementById("step1").classList.add("active")
document.getElementById("step2").classList.add("active")
}

if(status === "In Progress"){
progress = 75
document.getElementById("step1").classList.add("active")
document.getElementById("step2").classList.add("active")
document.getElementById("step3").classList.add("active")
}

if(status === "Resolved"){
progress = 100
document.querySelectorAll(".circle").forEach(c=>c.classList.add("active"))
}

document.getElementById("progressBar").style.width = progress + "%"

}

loadTracking()