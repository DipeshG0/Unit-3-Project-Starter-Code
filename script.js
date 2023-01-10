/* Declare variables below to save the different sections (divs) of your story*/
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let optionThree = document.querySelector(".option-three");
let Yes = document.querySelector(".option-one");
let No = document.querySelector(".option-two");
let opening = document.querySelector(".story-opening");
let optionEndTwo = document.querySelector(".option-two-end");
let optionEndOne = document.querySelector(".option-one-end");
let Continue = document.querySelector(".option-ikeda");
let Reset = document.querySelector(".option-reset");
let Reset2 = document.querySelector(".option-reset2");
let paragraph=document.querySelector("p");

Yes.innerHTML = "Yes";

Yes.onclick = function() {
    opening.style.display = "none";
    optionOne.style.display = "block";
    Yes.style.display = "none";
    No.style.display = "none";
};

No.onclick = function() {
    opening.style.display = "none";
    optionTwo.style.display = "block";
    No.style.display = "none";
    Yes.style.display = "none";
};

Continue.onclick = function() {
    optionEndOne.style.display = "block";
    optionOne.style.display = "none";
};

optionThree.onclick = function() {

    optionEndTwo.style.display = "block";
    optionEndOne.style.display = "none";
};

Reset.onclick = function() {
    optionEndTwo.style.display = "none";
    opening.style.display = "block";
    Yes.style.display = "block";
    No.style.display = "block";
};

Reset2.onclick = function() {
    optionTwo.style.display = "none";
    opening.style.display = "block";
    Yes.style.display = "block";
    No.style.display = "block";
};

paragraph.onmouseover=function(){
   paragraph.innerHTML="Congrats!";
};








/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/