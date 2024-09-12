const remove_health_p1 = document.getElementById("remove_health_p1");
const add_health_p1 = document.getElementById("add_health_p1");
const p1_life_text = document.getElementById("p1_life");
let p1_life = 20;
p1_life_text.textContent = p1_life;

function remove_health1(){
   p1_life = p1_life -1;
   p1_life_text.textContent = p1_life;
}

remove_health_p1.addEventListener('click', remove_health1);

function add_health1(){
   p1_life = p1_life +1;
   p1_life_text.textContent = p1_life;
}

add_health_p1.addEventListener('click', add_health1);

// P2

const remove_health_p2 = document.getElementById("remove_health_p2");
const add_health_p2 = document.getElementById("add_health_p2");
const p2_life_text = document.getElementById("p2_life");
let p2_life = 20;
p2_life_text.textContent = p2_life;

function remove_health2(){
   p2_life = p2_life -1;
   p2_life_text.textContent = p2_life;
}

remove_health_p2.addEventListener('click', remove_health2);

function add_health2(){
   p2_life = p2_life +1;
   p2_life_text.textContent = p2_life;
}

add_health_p2.addEventListener('click', add_health2);
