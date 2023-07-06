const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 70;
var select = [];

function calResult(){
  var firstLetterArray = select.slice(0,10);
  var secondLetterArray = select.slice(11,30);
  var thridLetterArray = select.slice(31,50);
  var fourthLetterArray = select.slice(51,70);
  let nubE = firstLetterArray.filter(x => x=='0').length;
  let nubI = firstLetterArray.filter(x => x=='1').length;
  let nubS = secondLetterArray.filter(x => x=='0').length;
  let nubN = secondLetterArray.filter(x => x=='1').length;
  let nubT = thridLetterArray.filter(x => x=='0').length;
  let nubF = thridLetterArray.filter(x => x=='1').length;
  let nubJ = fourthLetterArray.filter(x => x=='0').length;
  let nubP = fourthLetterArray.filter(x => x=='1').length;
  var firstLetter
  var secondLetter
  var thridLetter
  var fourthLetter
  if(nubE>nubI){
    firstLetter='E';
  } else{
    firstLetter='I';
  }
  if(nubS>nubN){
    secondLetter='S';
  } else{
    secondLetter='N';
  }
  if(nubT>nubF){
    thridLetter='T';
  } else{
    thridLetter='F';
  }
  if(nubJ>nubP){
    fourthLetter='J';
  } else{
    fourthLetter='P';
  }
  var yourMBTI = firstLetter+secondLetter+thridLetter+fourthLetter;
  if(yourMBTI == 'ISTJ'){
    yourMBTI=0;
  } else if (yourMBTI =='ISFJ'){
    yourMBTI=1;
  } else if (yourMBTI =='INFJ'){
    yourMBTI=2;
  } else if (yourMBTI =='INTJ'){
    yourMBTI=3;
  } else if (yourMBTI =='ISTP'){
    yourMBTI=4;
  } else if (yourMBTI =='ISFP'){
    yourMBTI=5;
  } else if (yourMBTI =='INFP'){
    yourMBTI=6;
  } else if (yourMBTI =='INTP'){
    yourMBTI=7;
  } else if (yourMBTI =='ESTP'){
    yourMBTI=8;
  } else if (yourMBTI =='ESFP'){
    yourMBTI=9;
  } else if (yourMBTI =='ENFP'){
    yourMBTI=10;
  } else if (yourMBTI =='ENTP'){
    yourMBTI=11;
  } else if (yourMBTI =='ESTJ'){
    yourMBTI=12;
  } else if (yourMBTI =='ESFJ'){
    yourMBTI=13;
  } else if (yourMBTI =='ENFJ'){
    yourMBTI=14;
  } else if (yourMBTI =='ENTJ'){
    yourMBTI=15;
  }
  console.log(yourMBTI);
  console.log(thridLetter);
  console.log(nubT);
  console.log(nubF);
  return yourMBTI;
}

function setResult(){
  let point = calResult();
  console.log(point);
  
  const resultName = document.querySelector('.resultName');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      select[qIdx] = idx;
        for(let i = 0; i < children.length; i++){
          children[i].style.display = 'none';
        }
        goNext(++qIdx);
      },450)
    }, false)};

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
