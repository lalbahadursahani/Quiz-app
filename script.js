const question=[
    {
        question:"Which is largest river in india ?",
        answer:[
            {text:"neel", correct:false},
            {text:"ganga", correct:true},
            {text:"bramputra", correct:false},
            {text:"satluj", correct:false},
            
            

            
        ]
    },
    {
        question:"Who is prime minister of india ?",
        answer:[
            {text:"rahul ganghi", correct:false},
            {text:"arvind kejariwal", correct:false},
            {text:"narendra modi", correct:true},
            {text:"nitish kumar", correct:false},
            
            

            
        ]

    },
    {
        question:"Who is president of india ?",
        answer:[
            {text:"ram nath", correct:false},
            {text:"apj abdul kalam", correct:false},
            {text:"giri chandra murmu", correct:true},
            {text:"pk husain", correct:false},
            
            

            
        ]
    }

]
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();
}

function showQuestion(){

    resetState();

    let currentQuestion=question[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    //display the answer
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;

            
        }
        button.addEventListener("click", selectAnswer)
    });

}

function resetState() {
    nextButton.style.display=" ";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }

    
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

        
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if (button.dataset.correct==="true") {
            button.classList.add("correct");
            
        }
        button.disabled=true;

    });
    nextButton.style.diplay="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You score ${score} out of ${question.length}!`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";

}

function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex<question.length){
    showQuestion();
    
  }else{
    showScore();
  }

}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<question.length){
        handleNextButton();
    }else{
        startQuiz();

    }

});
startQuiz();
