var currentQuestionId;
var answerIndexes;

function onStart(){

    document.getElementById("questionsBlock").style.visibility = "hidden";
    document.getElementById("endSummary").style.visibility = "hidden";
    question.push("Onko saunassa mukavaa?", "Talvi on rentoa aikaa");
    answer.push("Khyl");
}

function AskNextQuestion(){
    
    if(currentQuestionId != Object.keys(question).lenght){
        ShowQuestion(question);
    }

    else{
        ShowEndSummary();
    }
}


function ShowendSummary(){

    document.getElementById("startBlock").style.visibility = "hidden";
    document.getElementById("questionsBlock").style.visibility = "hidden";


}

function startQuestionnaire(){

    currentQuestionId = 0;
    answerIndexes = [];
    document.getElementById("startBlock").style.visibility = "hidden";
    document.getElementById("questionsBlock").style.visibility = "visible";
    AskNextQuestion();
}


function ShowQuestion(question){
    
    document.getElementById("questionline").innerHTML = question[currentQuestionId];
    ShowAnswerOptions(answer);
}


function ShowAnswerOptions(answer){

    

    
    document.getElementById("answerBlock").innerHTML = answer;
    var button = document.createElement("answerBlock");
    button.innerHTML = answer;
    button.onclick = AnswerButtonClicked(answerIndexes);
}

function AnswerButtonClicked(answerIndexes){

    // clear screen
    answerIndexes.push(index);
    currentQuestionId++;
    AskNextQuestion();
}