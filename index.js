var numdrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < numdrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;
listenEven(buttonInnerHtml);
animation(buttonInnerHtml);

  });

}


function listenEven(buttonInnerHtml){

  switch (buttonInnerHtml) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'l':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;





    default: console.log(buttonInnerHtml);

  }

}

document.addEventListener("keydown", function(event){

  listenEven(event.key);
  animation(event.key)

});


function animation(currentKey){

  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

// object
// var booker={
//   name: "mahmut",
//   age:35;
//   job:"Chef"
// }

// constructer Function

// function Bellboy(name, age, language, workPermit){
//   this.name=name;
//   this.age=age;
//   this.language=language;
//   this.workPermit=workPermit;
// }
//
// var belllboy= new Bellboy("mahmut",25,"english",true);



// var audio= new Audio("sounds/crash.mp3");
// audio.play();


// function add(num1, num2){
//   return num1+num2;
// }
// function multply(num1, num2){
//   return num1*num2;
// }
// function sub(num1, num2){
//   return num1-num2;
// }
// function divide(num1, num2){
//   return num1/num2;
// }
//
// function calculator(num1, num2, operator){
//   return operator(num1,num2);
// }
//
// alert(calculator(51,50, divide));;


// document.querySelectorAll("button")[1].addEventListener("click", function(){
//   alert("i got clcik");
// });
//
//
// document.querySelectorAll("button")[2].addEventListener("click", function(){
//   alert("i got click");
// });
//
// document.querySelectorAll("button")[3].addEventListener("click", function(){
//   alert("i got click");
//
// });
//
// document.querySelectorAll("button")[4].addEventListener("click", function() {
//   alert("hey");
// });
