// catch the Elements
let studentBtn = document.querySelector(".btn1"); 
let createAccount = document.querySelector(".btn2");
let menu_btn = document.querySelector(".menu-btn");
let lists = document.querySelector(".list");
// function click for btn1
studentBtn.onclick = () => {
    window.open("./AsStudent/student.html");
}
// function click for btn2
createAccount.onclick = () => {
    window.open("./AsFaculty/faculty.html");
}
// list show
menu_btn.onclick = () => {
    lists.classList.toggle("active");
    menu_btn.style.color = "#fff";
}
