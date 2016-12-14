
var makeQuizFrame = function(){

    //Change style of the quizFrame div

    document.getElementById("quizFrame").className = "initiated";

    //Makes two container divs. One for top image, the other for the inputs.

    var container = document.createElement("div");
    container.className = "image container"
    document.getElementById('quizFrame').appendChild(container);
    container.setAttribute("id", "imageContainer");

    var container = document.createElement("div");
    container.className = "input container"
    document.getElementById('quizFrame').appendChild(container);
    container.setAttribute("id", "inputContainer");
    
}

var mainQuiz = function(){

        var start = document.getElementById("startTheQuiz");
        start.parentNode.removeChild(start);
        makeQuizFrame();
        question()



}
