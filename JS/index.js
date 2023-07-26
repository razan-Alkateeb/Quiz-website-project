let btn1 = document.getElementById("btnlog1");
let btn2 = document.getElementById("btnlog2");
let toLogOut = document.getElementById("toLogOut");

currentUser = JSON.parse(localStorage.getItem('user'));
console.log(currentUser[0]);
console.log(currentUser[1]);

const displaycurrentUser = document.getElementById("h3name");
displaycurrentUser.innerHTML = currentUser[0];


function goToQuiz(){
    window.location.href = "/Pages/Questions.html";
}