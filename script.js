<<<<<<< HEAD
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

=======
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

>>>>>>> db93cf99883e8ca345a09e4a4c8fb4a11b7ccf28
