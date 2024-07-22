let lineThrough = document.querySelector('.strike');
let apostrophe = document.querySelector('.plural');
let myDiv = document.querySelectorAll('div');
let myClick = document.querySelectorAll('.click');
let myForm = document.querySelectorAll('form');
let wrongOne = document.querySelectorAll('.wrong1');
let correctOne = document.querySelector('#option2');
let wrongTwo = document.querySelector('#option5');
let correctTwos = document.querySelectorAll('.correct');
let memeOne = document.querySelector('#option8');
let wrongThree = document.querySelectorAll('.wrong2');
let correctThree = document.querySelector('#option12');
let myHint = document.querySelectorAll('.hint');
let nextBtn = document.querySelectorAll('.nextQues');
let myVideo = document.querySelector('iframe');
let lastText = document.querySelectorAll('.extraText');

setTimeout(strikeFunc, 7000);
function strikeFunc() {
  lineThrough.style.display = "none";
}

setTimeout(apostropheFunc, 8000);
function apostropheFunc() {
  apostrophe.style.display = "inline";
}

function myFunc(selBtn, delDiv, addDiv) {
  selBtn.addEventListener('click', function clickFunc() {
    delDiv.style.animationName = "fade-out";
    delDiv.style.animationPlayState = "running";
    setTimeout(function eraseFunc() {
      delDiv.style.display = "none";
      addDiv.style.display = "block";
      addDiv.style.animationPlayState = "running";
    }, 1000);
  });
}

function wrongOptionFunc(selWrongOption, writeWrongAlert, addHint) {
  selWrongOption.addEventListener('click', function wrongOnesFunc() {
    alert(writeWrongAlert);
    setTimeout(getHint, 1000);
		function getHint() {
			addHint.style.display = "inline";
			addHint.style.animationPlayState = "running";
		}
  });
}

function correctOptionFunc(selCorrectOption, writeCorrectAlert, addNextBtn) {
  selCorrectOption.addEventListener('click', function correctOnesFunc() {
    alert(writeCorrectAlert);
    setTimeout(getNextBtn, 1000);
		function getNextBtn() {
			addNextBtn.style.display = "block";
			addNextBtn.style.animationPlayState = "running";
		}
  });
}

function hintFunc(selHintBtn, writeHintAlert) {
  selHintBtn.addEventListener('click', function myAlert() {
    alert(writeHintAlert);
  });
}

for (let i = 0; i < myClick.length; i++) {
  myFunc(myClick[i], myDiv[0], myDiv[1]);
}

for (let i = 0; i < wrongOne.length; i++) {
  wrongOptionFunc(wrongOne[i], "Khud ka naam nahi maalum toh 12th me kaise aa gaya.", myHint[0]);
}

correctOptionFunc(correctOne, "Chalo kam se kam apna naam toh pata hai.", nextBtn[0]);

hintFunc(myHint[0], "School Register.");

myFunc(nextBtn[0], myDiv[1], myDiv[3]);

wrongOptionFunc(wrongTwo, "Aur chhotu, kaisa hai?", myHint[1]);

for (let i = 0; i < correctTwos.length; i++) {
  correctOptionFunc(correctTwos[i], "Mujhe exact nahi maalum, hoga tu 18-19 saal ka.", nextBtn[1]);
}

memeOne.addEventListener('click', function memeFunc() {
  myDiv[5].style.display = "block";
});

hintFunc(myHint[1], "Ab iss ke liye bhi hint chahiye?");

myFunc(nextBtn[1], myDiv[3], myDiv[6]);

for (let i = 0; i < wrongThree.length; i++) {
  wrongOptionFunc(wrongThree[i], "Bhai itne matches toh khele hai tere saath...", myHint[2]);
}

correctOptionFunc(correctThree, "Thank you itna dhyaan dene ke liye.", nextBtn[2]);

hintFunc(myHint[2], "Koi hint nahi milega!");

myFunc(nextBtn[2], myDiv[6], myDiv[8]);

for (let i = 0; i < lastText.length; i++) {
  nextBtn[2].addEventListener('click', function videoFunc() {
    myDiv[9].style.display = "block";
    lastText[i].style.animationPlayState = "running";
  });
}