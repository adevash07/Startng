const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;

//questions and options and answers

const questions=[
    {
        q:`<div class="hero-img" class="question">
          <img src="img/khan1.jpeg" id="img1" class="img" width="300em" height="300em">
          <img src="img/khan2.jpeg" id="img2" class="img" width="300em" height="300em">
          <img src="img/khan3.gif" id="img3" class="img" width="300em" height="300em">
          <img src="img/khan4.jpeg" id="img4" class="img" width="300em" height="300em">
        </div>'`,
        
        options: ["Strectcy","MZ Marvel","Fantastical", "Raven"],
        answer: 1 
    },

    {
        q:`<div class="hero-img" class="question">
          <img src="img/hawk1.jpg" id="img1" class="img" width="300em" height="300em">
          <img src="img/hawk2.jpg" id="img2" class="img" width="300em" height="300em">
          <img src="img/hawk3.gif" id="img3" class="img" width="300em" height="300em">
          <img src="img/hawk4.jpg" id="img4" class="img" width="300em" height="300em">
        </div>`,
        
        options: ["Angel winds","starfire","X-Warrior","Hawkgirl"],
        answer: 3 
    },

    {
        q:`<div class="hero-img" class="question">
          <img src="img/vixen1.jpg" id="img1" class="img" width="300em" height="300em">
          <img src="img/vixen2.jpg" id="img2" class="img" width="300em" height="300em">
          <img src="img/vixen3.gif" id="img3" class="img" width="300em" height="300em">
          <img src="img/vixen4.jpg" id="img4" class="img" width="300em" height="300em">
        </div>`,
        
        options: [ "Vixen","Anima-Morph", "Checha-Cat","Raven" ],
        answer: 0 
    },

    {
        q:`<div class="hero-img" class="question">
          <img src="img/zatana1.jpg" id="img1" class="img" width="300em" height="300em">
          <img src="img/zatana2.jpg" id="img2" class="img" width="300em" height="300em">
          <img src="img/zatana3.gif"  id="img3" class="img" width="300em" height="300em">
          <img src="img/zatana1.jpg" id="img4" class="img" width="300em" height="300em">
        </div>`,
        
        options: [ "Starfire","Mz Magic","Zatana","Raven" ],
        answer: 2 
    },

    {
        q:`<div class="hero-img" class="question">
          <img src="img/katana1.jpg" id="img1" class="img" width="300em" height="300em">
          <img src="img/katana2.jpg" id="img2" class="img" width="300em" height="300em">
          <img src="img/katana3.gif"  id="img3" class="img" width="300em" height="300em">
          <img src="img/katana4.jpg" id="img4" class="img" width="300em" height="300em">
        </div>`,
        
        options: ["X-warrior","Black sword","Xi mingze","Katana"],
        answer: 3 
    }


   
]
//set question and question number
totalQuestionSpan.innerHTML=questions.length;
function load(){
         questionNumberSpan.innerHTML=index+1;
         question.innerHTML=questions[questionIndex].q;
         op1.innerHTML=questions[questionIndex].options[0];
         op2.innerHTML=questions[questionIndex].options[1];
         op3.innerHTML=questions[questionIndex].options[2];
         op4.innerHTML=questions[questionIndex].options[3];
         index++;
}
//checking if option is correct or not
function check(element){
   //console.log(element.id);to check if the index of the options are in place,when clicked
   if(element.id==questions[questionIndex].answer){
      element.classList.add("correct");
      updateAnswerTracker("correct");
      score++;
      console.log("score:"+score);
   }
   else{
       element.classList.add("wrong");
       updateAnswerTracker("wrong");
   }
   //to disable all other options once the user selects his answer
   disabledOptions()
}
function disabledOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
        //if the answer clicked is wrong and you wanna show the correct answer
        if(options[i].id==questions[questionIndex].answer) {
            options[i].classList.add("correct");   
        }
    }
}
function enableOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.remove("disabled","correct","wrong");
    }
}
   //for the next action button;but first le me check if the user clicked an option,if not,i give alert
   function ValidityState(){
       if(!options[0].classList.contains("disabled")) {
       //if options[0] does not have class"disabled" then alert
       alert("Please Select one option")
       }
       else{
        enableOptions();
        randomQuestion();
       }
   }

   function next(){
       ValidityState();
       //let me check for question duplicacy
   }

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;  
    if(index==questions.length) {
            //console.log("quiz Qver")
            quizOver();
        }
        else {
            if(myArray.length>0){
            for(let i=0; i<myArray.length; i++) {
            if(myArray[i]==randomNumber){
                hitDuplicate=1;
                break;
    //the above is if myArray[item] equals randomNumber then hitDuplicate found and if found then hitDuplicate=1,break for the loop
            }
        }
        if(hitDuplicate==1){
            randomQuestion();
        }
        else{
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
        }
    }
            if(myArray.length==0){
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
            }
        
        myArray.push(randomNumber);
        //console.log("myArray:"+myArray) found out that some num were repeating itself
       
        }
}
function answerTracker() {
    for(let i=0; i<questions.length; i++) {
        const div=document.createElement("div");
        answerTrackerContainer.appendChild(div);
    }
}
function updateAnswerTracker(classNam) {
  answerTrackerContainer.children[index-1].classList.add(classNam);
}
 //let question index= any index num of ques but we need random questions,so we shuffle,there we remove index
function quizOver(){
  document.querySelector(".quiz-over").classList.add("show");
  correctAnswerSpan.innerHTML=score;
  totalQuestionSpan2.innerHTML=questions.length;
  percentage.innerHTML=(score/questions.length)*100 + "%";
}
function tryAgain(){
    window.location.reload();
}
 window.onload=function(){
     randomQuestion();
     this.answerTracker();
}
