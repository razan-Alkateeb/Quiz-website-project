
let submitBtn = document.getElementById("submit");
let spanContainer = document.getElementsByTagName("span");
let userInput = document.getElementsByTagName("input");

/**************************************************FName*******************************************************/


let fname = document.getElementById("fname");
fname.addEventListener("keyup", function () {
  const regexlname = /^[A-Za-z][A-Za-z_-]{0,15}$/; ///^[A-Za-z][A-Za-z_]$/
  ///[A-Za-z]+/;
  if (regexlname.test(fname.value)) {
    spanContainer[0].innerHTML = "Correct Name";
    spanContainer[0].style.color = "green";
    console.log("Correct Name");
  } else if (fname.value == "") {
    spanContainer[0].innerHTML = "";
  } else {
    spanContainer[0].innerHTML = "Num not allowed";
    spanContainer[0].style.color = "red";
    console.log("Numbers are not allowed");
  }
});

// #################################################

/**************************************************LName*******************************************************/

let lname = document.getElementById("lname");
lname.addEventListener("keyup", function () {
  const regexlname = /^[A-Za-z][A-Za-z_-]{0,15}$/; ///^[A-Za-z][A-Za-z_]$/
  ///[A-Za-z]+/;
  if (regexlname.test(lname.value)) {
    spanContainer[1].innerHTML = "Correct Name";
    spanContainer[1].style.color = "green";
    console.log("Correct Name");
  }else if(lname.value==""){
    spanContainer[1].innerHTML = "";
  } else {
    spanContainer[1].innerHTML = "Num not allowed";
    spanContainer[1].style.color = "red";
    console.log("Numbers are not allowed");
  }
});

// #################################################
/**************************************************Email*******************************************************/

let email = document.getElementById("email");
email.addEventListener("keyup", function () {
  // let localEmail = localStorage.setItem("email", email.value);
  const regexemail = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}/;
  if (regexemail.test(email.value)) {
    spanContainer[2].innerHTML = "Valid Email";
    spanContainer[2].style.color = "green";
    console.log("Valid Email");
  }else if (email.value == "") {
    spanContainer[2].innerHTML = "";
  } else {
    spanContainer[2].innerHTML = "InValid Email";
    spanContainer[2].style.color = "red";
    console.log("InValid Email");
  }
});

// #################################################

/**************************************************Pass*******************************************************/

let pass = document.getElementById("pass");

pass.addEventListener("keyup", function () {
  const regexpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (regexpass.test(pass.value)) {
    spanContainer[3].innerHTML = "Valid Password";
    spanContainer[3].style.color = "green";
    console.log("Valid Password");
  } else if (pass.value == ""){
    spanContainer[3].innerHTML ="";
  }else {
    spanContainer[3].innerHTML = "InValid Pass";
    spanContainer[3].style.color = "red";
    console.log("InValid Password");
  }
});

// #################################################

/**************************************************ConfPass*******************************************************/

let conpass = document.getElementById("conpass");

conpass.addEventListener("keyup", function () {
  if (conpass.value == pass.value) {
    spanContainer[4].innerHTML = "Match Password";
    spanContainer[4].style.color = "green";
    console.log("Match Password");
  } else if(conpass.value == ""){
    spanContainer[4].innerHTML="";
  } else {
    spanContainer[4].innerHTML = "Not Matching";
    spanContainer[4].style.color = "red";
    console.log("Pass Not Matching");
  }
});


function getNewUserID() {

  let lastUserID = localStorage.getItem("lastUserID");
  if (lastUserID === null) {
    lastUserID = 0;
  } else {
    lastUserID = parseInt(lastUserID);
  }
  const newUserID = lastUserID + 1;
  localStorage.setItem("lastUserID", newUserID);
  return newUserID;

}

submitBtn.onclick = function (event) {

  event.preventDefault();
  let username1 = fname.value + ' ' + lname.value;
  let email1 = email.value;
  let password1 = pass.value;
  if (
    spanContainer[0].style.color === "green" &&
    spanContainer[1].style.color === "green" &&
    spanContainer[2].style.color === "green" &&
    spanContainer[4].style.color === "green" 
  ) {////////////////////////////////////
    window.alert("registration success");
    window.location.href = "/Pages/login.html";
    ////////////////////////////////////
    let users1 = [];
    let user = {
      id: getNewUserID(),
      email: email1,
      username: username1,
      password: password1,
    };
    if (localStorage.users != null) {
      users1 = JSON.parse(localStorage.users);
    } else {
      users1 = [];
    }
    users1.push(user);
    localStorage.setItem("users", JSON.stringify(users1));

    // setTimeout(function () {
    //   window.location.assign("/login.html");
    // }, 1000);
    
  } else {
    window.alert("registration unsuccess");
  }

};