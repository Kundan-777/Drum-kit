var numberOfDrumButtons = document.querySelectorAll(".drum").length

for(var i=0; i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
       var buttonSounds = this.innerHTML;

       makeSound(buttonSounds);
       
       buttonAnimation(buttonSounds);
       
    });
}



document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case"s":
          var tom1 =  new Audio("crash.mp3");
          tom1.play();
        break;

        case"a":
          var tom2 =  new Audio("kick-bass.mp3");
          tom2.play();
        break;

        case"n":
          var tom3 =  new Audio("tom-3.mp3");
          tom3.play();
        break;

        case"g":
          var tom4 =  new Audio("tom-4.mp3");
          tom4.play();
        break;

        case"e":
          var snare =  new Audio("snare.mp3");
          snare.play();
        break;
        case"w":
          var kick =  new Audio("tom-2.mp3");
          kick.play();
        break;

        case"t":
          var crash =  new Audio("tom-1.mp3");
          crash.play();
        break;

    default: console.log(buttonSounds);




      }

} 


function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   
   setTimeout(function(){
       activeButton.classList.remove("pressed");
   
  }


   )};