let x = new XMLHttpRequest();
x.open("GET", "/JSON/question.json");
x.onload = function () {
    let loca = JSON.parse(sessionStorage.getItem("AnswersE"));
    let storageiq = JSON.parse(sessionStorage.getItem("AnswersIQ"));
    let storageTech = JSON.parse(sessionStorage.getItem("AnswersTech"));
    const y = JSON.parse(x.responseText);

    let e_questions = document.getElementById("e_questions");
    let iq_questions = document.getElementById("e_questions");
    let tech_questions = document.getElementById("e_questions");
    for (let i = 0; i <= 4; i++) {
        let e_div = document.createElement("div");
        e_questions.appendChild(e_div);

        let qNumber = document.createElement("h2");
        e_div.appendChild(qNumber);
        qNumber.innerHTML = `Question ${i + 1}`;

        let q = document.createElement("p");
        e_div.appendChild(q);
        q.innerHTML = `${y.English[i].question}`;

        let ul = document.createElement("ul");
        e_div.appendChild(ul);
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        li1.innerHTML = `<span class="letter">A</span>${y.English[i].firstAnswer}`;
        li2.innerHTML = `<span class="letter b">B</span>${y.English[i].secondAnswer}`;
        li3.innerHTML = `<span class="letter c">C</span>${y.English[i].thirdAnswer}`;

        if (loca[i] == y.English[i].firstAnswer) {
        li1.innerHTML = `<span class="a">A</span>${y.English[i].firstAnswer}<samp>Your Answer</samp>`;
        } else if (loca[i] == y.English[i].secondAnswer) {
        li2.innerHTML = `<span class="letter b">B</span>${y.English[i].secondAnswer}<samp>Your Answer</samp>`;
        } else {
        li3.innerHTML = `<span class="letter c">C</span>${y.English[i].thirdAnswer}<samp>Your Answer</samp>`;
        }

        if (y.English[i].firstAnswer === y.English[i].trueAnswer) {
        li1.style.backgroundColor = "green";
        } else {
        li1.style.backgroundColor = "red";
        }
        if (y.English[i].secondAnswer === y.English[i].trueAnswer) {
        li2.style.backgroundColor = "green";
        } else {
        li2.style.backgroundColor = "red";
        }
        if (y.English[i].thirdAnswer === y.English[i].trueAnswer) {
        li3.style.backgroundColor = "green";
        } else {
        li3.style.backgroundColor = "red";
        }
}

for (let j = 0; j <= 4; j++) {
    let iq_div = document.createElement("div");
    iq_questions.appendChild(iq_div);

    let qNumber = document.createElement("h2");
    iq_div.appendChild(qNumber);
    qNumber.innerHTML = `Question ${j + 6}`;

    let q = document.createElement("p");
    iq_div.appendChild(q);
    q.innerHTML = `${y.IQ[j].question}`;

    let ul = document.createElement("ul");
    iq_div.appendChild(ul);
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    li1.innerHTML = `<span class="letter a">A</span>${y.IQ[j].firstAnswer}`;
    li2.innerHTML = `<span class="letter b">B</span>${y.IQ[j].secondAnswer}`;
    li3.innerHTML = `<span class="letter c">C</span>${y.IQ[j].thirdAnswer}`;

    if (storageiq[j] == y.IQ[j].firstAnswer) {
        li1.innerHTML = `<span class="a">A</span>${y.IQ[j].firstAnswer}<samp>Your Answer</samp>`;
    } else if (storageiq[j] == y.IQ[j].secondAnswer) {
        li2.innerHTML = `<span class="letter b">B</span>${y.IQ[j].secondAnswer}<samp>Your Answer</samp>`;
    } else {
        li3.innerHTML = `<span class="letter c">C</span>${y.IQ[j].thirdAnswer}<samp>Your Answer</samp>`;
    }

    if (y.IQ[j].firstAnswer === y.IQ[j].trueAnswer) {
        li1.style.backgroundColor = "green";
    } else {
        li1.style.backgroundColor = "red";
    }
    if (y.IQ[j].secondAnswer === y.IQ[j].trueAnswer) {
        li2.style.backgroundColor = "green";
    } else {
        li2.style.backgroundColor = "red";
    }
    if (y.IQ[j].thirdAnswer === y.IQ[j].trueAnswer) {
        li3.style.backgroundColor = "green";
    } else {
        li3.style.backgroundColor = "red";
    }
}
for (let w = 0; w <= 9; w++) {
    let tech_div = document.createElement("div");
    tech_questions.appendChild(tech_div);

    let qNumber = document.createElement("h2");
    tech_div.appendChild(qNumber);
    qNumber.innerHTML = `Question ${w + 11}`;

    let q = document.createElement("p");
    tech_div.appendChild(q);
    q.innerHTML = `${y.technical[w].question}`;

    let ul = document.createElement("ul");
    tech_div.appendChild(ul);
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    li1.innerHTML = `<span class="letter a">A</span>${y.technical[w].firstAnswer}`;
    li2.innerHTML = `<span class="letter b">B</span>${y.technical[w].secondAnswer}`;
    li3.innerHTML = `<span class="letter c">C</span>${y.technical[w].thirdAnswer}`;

    if (storageTech[w] == y.technical[w].firstAnswer) {
        li1.innerHTML = `<span class="a">A</span>${y.technical[w].firstAnswer}<samp>Your Answer</samp>`;
    } else if (storageTech[w] == y.technical[w].secondAnswer) {
        li2.innerHTML = `<span class="letter b">B</span>${y.technical[w].secondAnswer}<samp>Your Answer</samp>`;
    } else {
        li3.innerHTML = `<span class="letter c">C</span>${y.technical[w].thirdAnswer}<samp>Your Answer</samp>`;
    }

    if (y.technical[w].firstAnswer === y.technical[w].trueAnswer) {
        li1.style.backgroundColor = "green";
    } else {
        li1.style.backgroundColor = "red";
    }
    if (y.technical[w].secondAnswer === y.technical[w].trueAnswer) {
        li2.style.backgroundColor = "green";
    } else {
        li2.style.backgroundColor = "red";
    }
    if (y.technical[w].thirdAnswer === y.technical[w].trueAnswer) {
        li3.style.backgroundColor = "green";
    } else {
        li3.style.backgroundColor = "red";
    }
}
};

x.send();
