

function result(result) {
  if (result >= 10 && result <= 20) {
    console.log("pass");

    document.images[0].src = "/Images/successfully-icon.png";
    document.images[0].alt = "successfully-icon";

    let resultEle = document.getElementById("result-span");
    resultEle.innerHTML = ` ${result}/20 Points (${Math.round(
      (result / 20) * 100
    )}%) `;

    let statusEle = document.getElementById("status-span");
    statusEle.innerHTML = ` PASSED`;

    let massEle = document.getElementById("mass-p");
    massEle.innerHTML = `<span>Congratulation</span>, we will arrange with you the Second interview.`;
  } else if (result >= 0 && result <= 9) {
    console.log("faild");


    document.images[0].src = "/Images/faild-icon.png";
    document.images[0].alt = "faild-icon";

    let resultEle = document.getElementById("result-span");
    resultEle.innerHTML = ` ${result}/20 Points (${Math.round(
      (result / 20) * 100
    )}%)`;
    resultEle.style.color = `#F74747`;

    let statusEle = document.getElementById("status-span");
    statusEle.innerHTML = ` FAILD`;
    statusEle.style.color = "#F74747";

    let massEle = document.getElementById("mass-p");
    massEle.innerHTML = `<span>Unfortunately</span>, you did not fulfill our requirements, Good Luck.`;
    document.querySelector("#mass-p span").style.color = "#F74747";

    document.getElementById("massage-div").style.backgroundColor = "#FDE0E0";
  } else {
    console.log("error");

    document.images[0].src = "/Images/error occurred.png";
    document.images[0].alt = "error-icon";
    

    let resultEle = document.getElementById("result-p");
    resultEle.innerHTML = ` `;

    let statusEle = document.getElementById("status-p");
    statusEle.innerHTML = ` `;

    let massEle = document.getElementById("mass-p");
    massEle.innerHTML = `<span>Error Occurred</span>, Please Re-Quiz .`;
    document.querySelector("#mass-p span").style.color = "#F74747";

    document.getElementById("massage-div").style.backgroundColor = "#FDE0E0";

    document.getElementsByTagName("button")[0].innerHTML = `Re-Quiz`;
  }
}

console.log(result(sessionStorage.getItem("UserResult")));



