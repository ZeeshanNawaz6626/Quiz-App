const quizDB = [
    {
      question: 'What is the capital of France?',
      a: 'Paris', 
      b:'London', 
      c:'Berlin',
      d:'Madrid',
      answer: 'ans1',
    },
    {
      question: 'Where is lahore?',
      a: 'pakistan', 
      b:'London', 
      c:'Berlin',
      d:'Madrid',
      answer: 'ans1',
    },
    {
      question: 'who is the pm of pakistan?',
      a: 'shehbaz sharif', 
      b:'imran khan', 
      c:'fazllul rehman',
      d:'bilawal',
      answer: 'ans1',
    },
    {
      question: 'What is the capital of France?',
      a: 'Paris', 
      b:'London', 
      c:'Berlin',
      d:'Madrid',
      answer: 'ans1',
    },
]
const question = document.getElementById("question");
const option1  = document.getElementById("option1");
const option2  = document.getElementById("option2");
const option3  = document.getElementById("option3");
const option4  = document.getElementById("option4");
const submit =  document.getElementById("submit");
const answers =  document.getElementsByName("answer");
const showScore = document.getElementById("showScore");
let questioncount=0;
let score = 0;
const loadquestion=()=>{
  const questionlist = quizDB[questioncount];
  question.innerHTML = questionlist.question;
  option1.innerHTML = questionlist.a;
  option2.innerHTML = questionlist.b;
  option3.innerHTML = questionlist.c;
  option4.innerHTML = questionlist.d;
 
}
loadquestion();

const getcheckanswer=()=>{
  console.log("dj");
  let answer;
  console.log(answers);
  answers.forEach((curanselem) => {
    if (curanselem.checked ){
      answer=curanselem.id;
     console.log("this is selected by user"+answer);
    }
  });
  
  return answer;
}
getcheckanswer();

submit.addEventListener("click", ()=>{
  console.log("ck");

  const checkanswer =getcheckanswer();
  console.log('this is selected'+checkanswer) 
  if(checkanswer==quizDB[questioncount].answer){
    score++
    // console.log(score);
   
  };
  questioncount++;
  if(questioncount<quizDB.length){
    loadquestion();
  }
  else{
    console.log(score);
    showScore.innerHTML= `<h3>your score is ${score}/${quizDB.length}
    <br>
    <button class="btn" onclick="location.reload()">play again</button>`;
    showScore.classList.remove("scoreArea");
  }
});
