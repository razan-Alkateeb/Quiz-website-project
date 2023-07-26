const divContainer = document.getElementById('questionsPage');
const divQuestions = document.getElementById('questions');
const btnEng = document.getElementById('btnEng');
const btnIQ = document.getElementById('btnIQ');
const btnTech = document.getElementById('btnTech');
let listItem = document.getElementsByTagName('li');
let spanItem = document.getElementsByTagName('span');

let selectedLi = null; 
let selectedSpan = null;

let answerArray = [];

let QNum = document.getElementById('QNum');
QNum.textContent = 'Question';

let questionCounter = 0;

let currentQuestionIndex = 0;
let questionsData;

let trueAnswersEnglish = 0;
let trueAnswersIQ = 0;
let trueAnswersTech = 0;

let answersByQuestionE = {};
let answersByQuestionIQ = {};
let answersByQuestionTech = {};

/*----------------------------------------------fetch function----------------------------------------------*/
async function fetchQuestions() {

    const response = await fetch('/JSON/question.json');
    questionsData = await response.json();

    const storedAnswersE = sessionStorage.getItem('AnswersE');
    if (storedAnswersE) {
        answersByQuestionE = JSON.parse(storedAnswersE);
    }

    const storedAnswersIQ = sessionStorage.getItem('AnswersIQ');
    if (storedAnswersIQ) {
        answersByQuestionIQ = JSON.parse(storedAnswersIQ);
    }

    const storedAnswersTech = sessionStorage.getItem('AnswersTech');
    if (storedAnswersTech) {
        answersByQuestionTech = JSON.parse(storedAnswersTech);
    }

}
//for English
/*-----------------------------------handle with click on answer function-----------------------------------*/
function handleLiClickE(event, index) {

    const clickedLi = event.target;
    const clickedSpan = event.target.getElementsByTagName('span')[0];
    const selectedAnswer = event.target.textContent;

    if (!answersByQuestionE.hasOwnProperty(index)) {
        answersByQuestionE[index] = selectedAnswer;
    } else {
        // If the question index is already in the answersByQuestionE object, update the answer
        answersByQuestionE[index] = selectedAnswer;
    }
    // Save the answersByQuestionE object in sessionStorage
    sessionStorage.setItem('AnswersE', JSON.stringify(answersByQuestionE));

    // If a different LI is clicked, update the selected elements
    if (selectedLi && selectedLi !== clickedLi) {
        selectedLi.style.border = 'none';
    }

    selectedLi = clickedLi;
    selectedSpan = clickedSpan;
    selectedLi.style.border = '5px solid #00821f';

}

let trueAnswers= 0;

/*---------------------------------------click on answer function---------------------------------------*/

function addLiClickEventListenersE() {
    listItem = document.getElementsByTagName('li');
    spanItem = document.getElementsByTagName('span');
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener('click', handleLiClickE);
        // spanItem[i].addEventListener('click', handleLiClickE);
    }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for IQ
/*-----------------------------------handle with click on answer function-----------------------------------*/
function handleLiClickIQ(event, index) {
    const clickedLi = event.target;
    const clickedSpan = event.target.getElementsByTagName('span')[0];
    const selectedAnswer = event.target.textContent;

    // If the selected question index is not in the answersByQuestionE object, add it
    if (!answersByQuestionIQ.hasOwnProperty(index)) {
        answersByQuestionIQ[index] = selectedAnswer;
    } else {
        // If the question index is already in the answersByQuestionE object, update the answer
        answersByQuestionIQ[index] = selectedAnswer;
    }

    // Save the answersByQuestionE object in sessionStorage
    sessionStorage.setItem('AnswersIQ', JSON.stringify(answersByQuestionIQ));

    // If a different LI is clicked, update the selected elements
    if (selectedLi && selectedLi !== clickedLi) {
        selectedLi.style.border = 'none';
    }

    selectedLi = clickedLi;
    selectedSpan = clickedSpan;
    selectedLi.style.border = '5px solid #00821f';
}
/*---------------------------------------click on answer function---------------------------------------*/
function addLiClickEventListenersIQ() {
    listItem = document.getElementsByTagName('li');
    spanItem = document.getElementsByTagName('span');
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener('click', handleLiClickIQ);
        spanItem[i].addEventListener('click', handleLiClickIQ);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//foe Tech
/*-----------------------------------handle with click on answer function-----------------------------------*/
function handleLiClickTech(event, index) {
    const clickedLi = event.target;
    const clickedSpan = event.target.getElementsByTagName('span')[0];
    const selectedAnswer = event.target.textContent;

    // If the selected question index is not in the answersByQuestionE object, add it
    if (!answersByQuestionTech.hasOwnProperty(index)) {
        answersByQuestionTech[index] = selectedAnswer;
    } else {
        // If the question index is already in the answersByQuestionE object, update the answer
        answersByQuestionTech[index] = selectedAnswer;
    }

    // Save the answersByQuestionE object in sessionStorage
    sessionStorage.setItem('AnswersTech', JSON.stringify(answersByQuestionTech));

    // If a different LI is clicked, update the selected elements
    if (selectedLi && selectedLi !== clickedLi) {
        selectedLi.style.border = 'none';
    }

    selectedLi = clickedLi;
    selectedSpan = clickedSpan;
    selectedLi.style.border = '5px solid #00821f';
}

/*---------------------------------------click on answer function---------------------------------------*/
function addLiClickEventListenersTech() {
    listItem = document.getElementsByTagName('li');
    spanItem = document.getElementsByTagName('span');
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener('click', handleLiClickTech);
        spanItem[i].addEventListener('click', handleLiClickTech);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***************************************************English***************************************************/
function displayQuestion(index) {

    btnIQ.style.display = 'none';
    btnTech.style.display = 'none';

    divQuestions.innerHTML = "";

    if (index === -1) {

        questionCounter = 0;
        QNum.style.display = 'none';
        btnEng.style.display = 'none';
        divContainer.style.marginTop = '5%';        

        const h2Welcome = document.createElement('h2');
        h2Welcome.textContent = 'Welcome to the English Test';
        divQuestions.appendChild(h2Welcome);

        const startBtn = document.createElement('button');
        startBtn.setAttribute('id', 'startBtn');
        startBtn.setAttribute('class', 'Btn');
        startBtn.textContent = 'START';
        divQuestions.appendChild(startBtn);

        startBtn.addEventListener('click', () => {
            displayQuestion(currentQuestionIndex);
        });

    } else {

        divContainer.style.marginTop = '0%'; 
        
        questionCounter++;
        QNum.style.display = 'block';
        QNum.textContent = `${questionCounter} / 20 Question`;

        btnEng.style.display = 'block';


        const pQuestion = document.createElement('p');
        divQuestions.appendChild(pQuestion);
        pQuestion.textContent = questionsData.English[index].question;

        const answersList = document.createElement('ul');
        divQuestions.appendChild(answersList);

        const span=document.createElement('span');
        span.textContent = "A"
        answersList.appendChild(span);

        const Fanswers = document.createElement('li');
        Fanswers.textContent = questionsData.English[index].firstAnswer;
        answersList.appendChild(Fanswers);
        Fanswers.addEventListener('click', function(event){
            handleLiClickE(event, index);
        });

        const br=document.createElement('br');
        answersList.appendChild(br);

        const span2=document.createElement('span');
        span2.textContent = "B"
        answersList.appendChild(span2);

        const Sanswers = document.createElement('li');
        Sanswers.textContent = questionsData.English[index].secondAnswer;
        answersList.appendChild(Sanswers);
        Sanswers.addEventListener('click', function(event){
            handleLiClickE(event, index);
        });


        const br2=document.createElement('br');
        answersList.appendChild(br2);

        const span3=document.createElement('span');
        span3.textContent = "C"
        answersList.appendChild(span3);

        const Lanswers = document.createElement('li');
        Lanswers.textContent = questionsData.English[index].thirdAnswer;
        answersList.appendChild(Lanswers);
        Lanswers.addEventListener('click', function(event){
            handleLiClickE(event, index);
        });

        addLiClickEventListenersE();

    }

}

fetchQuestions();
displayQuestion(-1);
function showPopupMessage(message) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = message;
    divQuestions.appendChild(popup);
    // Hide the pop-up after a few seconds (adjust the timeout value as needed)
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000); // 3 seconds in this example
}
let count = 0;

btnEng.addEventListener('click', () => {
    // Check if an answer has been selected for the current question
    if (!answersByQuestionE.hasOwnProperty(currentQuestionIndex)) {
        showPopupMessage('Please select an answer!');
        return; // Return early to prevent moving to the next question
    }

    // If an answer has been selected, proceed to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex >= questionsData.English.length) {
        currentQuestionIndex = 0;
        count = 5;
    }

    displayQuestion(currentQuestionIndex);

    if (count == 5) {
        displayIQ();
    }

    trueAnswersEnglish = 0;

    for (let i = 0; i < questionsData.English.length; i++) {
        const trueAnswer = questionsData.English[i].trueAnswer;
        const userAnswer = answersByQuestionE[i];

        if (userAnswer && userAnswer === trueAnswer) {
            trueAnswersEnglish++;
            // TrueUserAnswer = TrueUserAnswer +trueAnswersEnglish;
        }
    }

    console.log(`Number of Correct Answers (English): ${trueAnswersEnglish}`);
    updateTotalCorrectAnswers();
});

/***************************************************IQ***************************************************/
let currentQuestionIndexIQ = 0;
function displayIQ (){
    
    function displayQuestionIQ(index) {

        btnIQ.style.display = 'block';
        btnEng.style.display = 'none';
        btnTech.style.display = 'none';

        divQuestions.innerHTML = "";

        if (index === -1) {

            divContainer.style.marginTop = '5%'; 
            questionCounter = 5;
            QNum.style.display = 'none';

            btnIQ.style.display = 'none';

            const h2WelcomeIQ = document.createElement('h2');
            h2WelcomeIQ.textContent = 'Welcome to the IQ Test';
            divQuestions.appendChild(h2WelcomeIQ);

            const startBtnIQ = document.createElement('button');
            startBtnIQ.setAttribute('id', 'startBtnIQ');
            startBtnIQ.setAttribute('class', 'Btn');
            startBtnIQ.textContent = 'CONTINUE';
            divQuestions.appendChild(startBtnIQ);

            startBtnIQ.addEventListener('click', () => {
                displayQuestionIQ(currentQuestionIndexIQ);
            });

        } else {

            divContainer.style.marginTop = '0%'; 

            questionCounter++;
            QNum.style.display = 'block';
            QNum.textContent = `${questionCounter} / 20 Question`;

            btnIQ.style.display = 'block';
    
            const pQuestion = document.createElement('p');
            divQuestions.appendChild(pQuestion);
            pQuestion.textContent = questionsData.IQ[index].question;
            

            const answersList = document.createElement('ul');
            divQuestions.appendChild(answersList);

            const span=document.createElement('span');
            span.textContent = "A"
            answersList.appendChild(span);

            const Fanswers = document.createElement('li');
            Fanswers.textContent = questionsData.IQ[index].firstAnswer;
            answersList.appendChild(Fanswers);
            Fanswers.addEventListener('click', function(event){
                handleLiClickIQ(event, index);
            });

            const br=document.createElement('br');
            answersList.appendChild(br);

            const span2=document.createElement('span');
            span2.textContent = "B"
            answersList.appendChild(span2);

            const Sanswers = document.createElement('li');
            Sanswers.textContent = questionsData.IQ[index].secondAnswer;
            answersList.appendChild(Sanswers);
            Sanswers.addEventListener('click', function(event){
                handleLiClickIQ(event, index);
            });
            const br2=document.createElement('br');
            answersList.appendChild(br2);

            const span3=document.createElement('span');
            span3.textContent = "C"
            answersList.appendChild(span3);

            const Lanswers = document.createElement('li');
            Lanswers.textContent = questionsData.IQ[index].thirdAnswer;
            answersList.appendChild(Lanswers);
            Lanswers.addEventListener('click', function(event){
                handleLiClickIQ(event, index);
            });
            addLiClickEventListenersIQ();
        }
    }

    fetchQuestions();
    displayQuestionIQ(-1);
    function showPopupMessage(message) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = message;
        divQuestions.appendChild(popup);

        // Hide the pop-up after a few seconds (adjust the timeout value as needed)
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000); // 3 seconds in this example
    }
    let count2 = 0;


    btnIQ.addEventListener('click', () => {
        if (!answersByQuestionIQ.hasOwnProperty(currentQuestionIndexIQ)) {
            showPopupMessage('Please select an answer!');
            return; // Return early to prevent moving to the next question
        }
        
        currentQuestionIndexIQ++;
        if (currentQuestionIndexIQ >= questionsData.IQ.length) {
            currentQuestionIndexIQ = 0;
            count2 = 5;
        }

        displayQuestionIQ(currentQuestionIndexIQ);

        if(count2 == 5){
            displayTech();
        }

        trueAnswersIQ = 0;

    for (let i = 0; i < questionsData.IQ.length; i++) {
        const trueAnswer = questionsData.IQ[i].trueAnswer;
        const userAnswer = answersByQuestionIQ[i];

        if (userAnswer && userAnswer === trueAnswer) {
            trueAnswersIQ++;
            // TrueUserAnswer = TrueUserAnswer + trueAnswersIQ;
        }
    }

    console.log(`Number of Correct Answers (IQ): ${trueAnswersIQ}`);
    updateTotalCorrectAnswers();

    });

}

/***************************************************Tech***************************************************/
let currentQuestionIndexTech = 0;
function displayTech (){
    
    function displayQuestionTech(index) {
        btnTech.style.display = 'block';
        btnIQ.style.display = 'none';
        btnEng.style.display = 'none';

        divQuestions.innerHTML = "";

        if (index === -1) {

            divContainer.style.marginTop = '5%'; 
            questionCounter = 10;

            btnTech.style.display = 'none';
            QNum.style.display = 'none';


            const h2WelcomeTech = document.createElement('h2');
            h2WelcomeTech.textContent = 'Welcome to the Technical Test';
            divQuestions.appendChild(h2WelcomeTech);

            const startBtnTech = document.createElement('button');
            startBtnTech.setAttribute('id', 'startBtnTech');
            startBtnTech.setAttribute('class', 'Btn');
            startBtnTech.textContent = 'CONTINUE';
            divQuestions.appendChild(startBtnTech);

            startBtnTech.addEventListener('click', () => {
                displayQuestionTech(currentQuestionIndexTech);
            });

        } else {

            divContainer.style.marginTop = '0%'; 

            questionCounter++;
            QNum.style.display = 'block';
            QNum.textContent = `${questionCounter} / 20 Question`;

            btnTech.style.display = 'block';
    
            const pQuestion = document.createElement('p');
            divQuestions.appendChild(pQuestion);
            pQuestion.textContent = questionsData.technical[index].question;

            const answersList = document.createElement('ul');
            divQuestions.appendChild(answersList);

            const span=document.createElement('span');
            span.textContent = "A"
            answersList.appendChild(span);

            const Fanswers = document.createElement('li');
            Fanswers.textContent = questionsData.technical[index].firstAnswer;
            answersList.appendChild(Fanswers);
            Fanswers.addEventListener('click', function(event){
                handleLiClickTech(event, index);
            });
            const br=document.createElement('br');
            answersList.appendChild(br);

            const span2=document.createElement('span');
            span2.textContent = "B"
            answersList.appendChild(span2);

            const Sanswers = document.createElement('li');
            Sanswers.textContent = questionsData.technical[index].secondAnswer;
            answersList.appendChild(Sanswers);
            Sanswers.addEventListener('click', function(event){
                handleLiClickTech(event, index);
            });
            const br2=document.createElement('br');
            answersList.appendChild(br2);

            const span3=document.createElement('span');
            span3.textContent = "C"
            answersList.appendChild(span3);

            const Lanswers = document.createElement('li');
            Lanswers.textContent = questionsData.technical[index].thirdAnswer;
            answersList.appendChild(Lanswers);
            Lanswers.addEventListener('click', function(event){
                handleLiClickTech(event, index);
            });
            addLiClickEventListenersTech();

            if(currentQuestionIndexTech == 10){
                btnTech.style.display = 'none';
            }

        }

    }

    fetchQuestions();
    displayQuestionTech(-1);
    function showPopupMessage(message) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = message;
        divQuestions.appendChild(popup);

        // Hide the pop-up after a few seconds (adjust the timeout value as needed)
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000); // 3 seconds in this example
    }

    let count2 = 0;


    btnTech.addEventListener('click', () => {
        if (!answersByQuestionTech.hasOwnProperty(currentQuestionIndexTech)) {
            showPopupMessage('Please select an answer!');
            return; // Return early to prevent moving to the next question
        }

        if(currentQuestionIndexTech == 8){
            btnTech.textContent = 'SUBMIT';
            btnTech.style.width = '216px';
            btnTech.addEventListener('click', function() {

                document.body.innerHTML = `<div id="customModal" class="modal">
                    <div class="modal-content">
                        <p id="sure">Are you sure?</p>
                        <button id="btnOK"><a id="btnOK" href='./resultPage.html'>OK</a></button>
                        <button id="btnCancel"><a id="btnCancel" href='./index.html'>Cancel</a></button>
                    </div>
                </div>`;
                // let Cancel= document.getElementById(btnCancel);
                // Cancel.addEventListener('click', function(){
                //     displayQuestionTech(8)
                // });

                const customModal = document.getElementById('customModal');

                divContainer.style.display = 'none';
                QNum.style.display = 'none';
                customModal.style.display = 'block'; // Show the modal
            });

        }

        currentQuestionIndexTech++;

        if (currentQuestionIndexTech >= questionsData.technical.length) {
            //currentQuestionIndexTech = 0;
            count2 = 5;
        }

        displayQuestionTech(currentQuestionIndexTech);

        trueAnswersTech = 0;

    for (let i = 0; i < questionsData.technical.length; i++) {
        const trueAnswer = questionsData.technical[i].trueAnswer;
        const userAnswer = answersByQuestionTech[i];

        if (userAnswer && userAnswer === trueAnswer) {
            trueAnswersTech++;
            // TrueUserAnswer = TrueUserAnswer + trueAnswersTech;
        }
    }

    console.log(`Number of Correct Answers (Technical): ${trueAnswersTech}`);
    updateTotalCorrectAnswers();

    });

}


/***************************************************Result***************************************************/
function updateTotalCorrectAnswers() {
    TrueUserAnswer = trueAnswersEnglish + trueAnswersIQ + trueAnswersTech;
    sessionStorage.setItem('UserResult', TrueUserAnswer);
}