
var questionNum = 0;
var imageArray = ['./Images/image1.jpg', './Images/image2.jpg', './Images/image3.jpg', './Images/image4.jpg', './Images/image5.jpg'];

var getPicture = function (){
    var image = document.createElement("img");
    document.getElementById("imageContainer").appendChild(image);
    image.setAttribute("src",imageArray[questionNum]);
}


var question = function(){
    
    if (questionNum === 0){
        getPicture();
    }
    
}