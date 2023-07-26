const emailInput = document.getElementById("email").value;
const submitLoginBtn = document.getElementById("submit");

submitLoginBtn.onclick = function (event) {
  event.preventDefault();
  // event.preventDefault();
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  if (localStorage.users != null) {
    let users1 = JSON.parse(localStorage.users);
    let loggedInUser = null;
    
    for (let i = 0; i < users1.length; i++) {
      if (users1[i].email === emailInput) {
        loggedInUser = users1[i];
        break;
      }
    }
    if (loggedInUser !== null && loggedInUser.password === passwordInput) {
      let user = [];
      user.push(loggedInUser.username);
      user.push(true);
      localStorage.setItem("user", JSON.stringify(user));
      
      console.log("done");
      window.location.href = "/Pages/index2.html";
    } else {
      window.alert("Invalid credentials. Please try again.");
      window.location.href = "/Pages/login.html";
    }
  } else {
    window.alert("No registered users found. Please register first.");
    window.location.href = "/Pages/login.html";
  }
};

