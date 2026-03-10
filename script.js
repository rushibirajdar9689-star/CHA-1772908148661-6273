const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const speed = target / 100;

if(count < target){
counter.innerText = Math.ceil(count + speed);
setTimeout(update,30);
}

else{
counter.innerText = target;
}

}

update();

});

// dash

// Sidebar active menu animation

const menuItems = document.querySelectorAll(".menu a")

menuItems.forEach(item=>{

item.addEventListener("click",()=>{

menuItems.forEach(i=>i.classList.remove("active"))

item.classList.add("active")

})

})


// Notification bell animation

const bell=document.querySelector(".fa-bell")

bell.addEventListener("mouseenter",()=>{

bell.style.transform="rotate(20deg)"

})

bell.addEventListener("mouseleave",()=>{

bell.style.transform="rotate(0deg)"

})