//Using strict as a quick fix for an issue involving addEventListener.

"use strict"

//The current question
var questionNum = 0;
//To be added up and used for the calculation of the final score.
var answerArray = [];
//Sum for final calculation
var sum = 0;
//Questions. Generated on page dynamically.
var questionArray = ["Where would you go?",
    "Who was wisest?",
    "What does a leader do?",
    "What is most fundamental?",
    "Most folks ought to..."]

//Assign quizContainer to variable container for subsequent use.
var container = document.getElementById("quizContainer");


//Object with links that take the user to an encyclopedia entry related to their result.
var website = {
    Confucius:"https://plato.stanford.edu/entries/confucius/",
    Zhuangzi:"https://plato.stanford.edu/entries/zhuangzi/",
    Hanfei:"https://plato.stanford.edu/entries/chinese-legalism/",
    Mozi:"https://plato.stanford.edu/entries/mohism/"

}

//Devoted function for the startButton, initiates the question sequence.
function startQuiz() {
    document.body.removeChild(document.getElementById("startButton"));
    switchQuestion();
    interrogate();
    setTimeout(generateQuestion, 3000);

}

//Function for progress of the quiz, associated with all quiz inputs. Highest level of organization.
function quizMain() {
    getAnswer();
    if(questionNum===questionArray.length){
        displayResult(computeResult());
    }
    else {
        switchQuestion();
        interrogate();
        setTimeout(generateQuestion, 3000);
    }
}

//Pushes user answer values to array. Allows for assorted arrangement of answers.
function getAnswer() {

        if (event.currentTarget.className === "menu") {
            for (var i = 1; i <= 4; i++) {
                if (event.currentTarget.value == i) {
                    answerArray.push(i);
                }
            }
        }
        else {
            for (var i = 1; i <= 4; i++) {
                var name = event.currentTarget.name;
                if (name == i) {
                    answerArray.push(i);
                }
            }
        }
        questionNum++;


}

//Calculates result based off sum of user inputs.
function computeResult(){
    alert(answerArray);
    var sum = 0;
    for(var i =0; i < answerArray.length; i++){
        sum = sum + parseInt(answerArray[i]);
    }
    if (sum <=8){
        return "Confucius";
    }
    if (sum >8 && sum <=12){
        return "Zhuangzi";
    }
    if (sum >12 && sum <=16){
        return "Hanfei";
    }
    if (sum > 16){
        return "Mozi";
    }
}

function displayResult(result) {
    container.innerHTML="";
    var text = document.getElementById("questionText");
    text.className = "displayResult";
    text.innerHTML = "You are " + result + "!";
    var finalImage = document.createElement("IMG");
    var finalImageSrc = "./Images/" + result +".jpg"
    finalImage.className = "resultImg";
    finalImage.setAttribute("src", finalImageSrc);
    container.appendChild(finalImage);
    finalImage.role = "button";
    finalImage.href = website[result];


}

//Removes content of previous question's input container and temporarily adds the .interrogate classname to the question text to alter its style.
function interrogate() {
    var text = document.getElementById("questionText");
    document.getElementById("quizContainer").innerHTML = "";
    text.className = "interrogate";
    setTimeout(function () {
        text.className = ""
    }, 2000);

}

//Changes question text.
function switchQuestion() {
    var text = document.getElementById("questionText");
    text.innerHTML = questionArray[questionNum];
}

//I know there is a way to consolidate the element creation for the question generation. Most questions have the same structure. Will do this if I have time.
//Big beefy function. Operates by generating the appropriate HTML and text for a question depending on the questionNum counter.
function generateQuestion() {
    //Get random array between 1 and 4, enables randomization of answer sequence for some questions.
    var randomizeQuestion = [undefined, undefined, undefined, undefined]
    var i = 0;
    while (i < randomizeQuestion.length) {
        var rand = Math.floor((Math.random() * randomizeQuestion.length) + 1);
        if (randomizeQuestion.indexOf(rand) >= 0) {
            continue;
        } else randomizeQuestion[i] = rand;
        i++;
    }

    //Question 1
    //Create image input elements that are children of "quizContainer", assign random numbers to name.
    if (questionNum === 0) {
        for (var i = 0; i < randomizeQuestion.length; i++) {
            var input = document.createElement("INPUT");
            container.appendChild(input);
            input.className = "question img-fluid col-md-6 col-sm-6 col-xs-12"
            input.type = "image";
            input.name = randomizeQuestion[i];
            input.addEventListener("click", quizMain)
        }

        //Associate input elements with corresponding images based on the randomly arranged name elements.
        var elem = document.getElementsByClassName("question")
        for (var i = 0; i < elem.length; i++) {
            if (elem[i].name == 1) {
                elem[i].src = "./Images/shrine.jpg";
            }
            if (elem[i].name == 2) {
                elem[i].src = "./Images/field.jpg";
            }
            if (elem[i].name == 3) {
                elem[i].src = "./Images/ranks.jpg";
            }
            if (elem[i].name == 4) {
                elem[i].src = "./Images/citywall.jpg";
            }
        }

    }

    //Question 2
    var ansArrayQ2 = ["He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
        "Happiness is the absence of the striving for happiness.", "It is human nature to choose safety and gain over danger and trouble.",
        "Suppose we try to locate the cause of disorder in the world, we shall find it lies in the want of mutual love."];


    if (questionNum === 1) {
        for (var i = 0; i < randomizeQuestion.length; i++) {
            var column = document.createElement("DIV");
            container.appendChild(column);
            column.className = "Col-md-6";
            var input = document.createElement("INPUT");
            column.appendChild(input);
            input.type = "radio";
            input.className = "question";
            input.name = randomizeQuestion[i];
            input.addEventListener("click", quizMain);
            var label = document.createElement("Label");
            column.appendChild(label);
            label.htmlFor = randomizeQuestion[i];
            label.name = randomizeQuestion[i];
            label.innerHTML = ansArrayQ2[randomizeQuestion[i] - 1];
        }

    }
    var ansArrayQ3 = ["Acts as a role model.", "Nothing.", "Enforces the rules", "Ensures everyone's well-being."]

    //Question 3
    if (questionNum === 2) {
        for (var i = 0; i < randomizeQuestion.length; i++) {
            var column = document.createElement("DIV");
            container.appendChild(column);
            column.className = "Col-md-6";
            var input = document.createElement("INPUT");
            column.appendChild(input);
            input.className = "question";
            input.name = randomizeQuestion[i];
            input.addEventListener("click", quizMain);
            input.type = "checkbox";
            var label = document.createElement("Label");
            column.appendChild(label);
            label.htmlFor = randomizeQuestion[i];
            label.name = randomizeQuestion[i];
            label.innerHTML = ansArrayQ3[randomizeQuestion[i] - 1];


        }
    }

    var ansArrayQ4 = ["Virtue", "Emptiness", "Order", "Equality"]
    //Question 4
    if (questionNum === 3) {
        for (var i = 0; i < randomizeQuestion.length; i++) {
            var column = document.createElement("DIV");
            container.appendChild(column);
            column.className = "Col-md-6";
            var input = document.createElement("INPUT");
            column.appendChild(input);
            input.className = "question";
            input.name = randomizeQuestion[i];
            input.addEventListener("click", quizMain);
            input.type = "button";
            input.value = ansArrayQ4[randomizeQuestion[i] - 1];
        }
    }

    var ansArrayQ5 = ["try to understand their proper place in the world", "stop trying to be great", "do what they are told", "care for each other unconditionally"]
    //Question 5
    if (questionNum === 4) {
        var select = document.createElement("select");
        container.appendChild(select);
        select.className = "menu";
        select.id = "q5"
        select.addEventListener("change", quizMain);
        var optionDefault = document.createElement("OPTION");
        optionDefault.text = "--pick--";
        optionDefault.setAttribute("selected", "selected");
        select.add(optionDefault);
        for (var i = 0; i < randomizeQuestion.length; i++) {
            var newOption = document.createElement("OPTION");
            newOption.value = randomizeQuestion[i];
            newOption.text = ansArrayQ5[randomizeQuestion[i] - 1];
            select.add(newOption);
        }


    }
}

