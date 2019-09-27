var score = 1; // Create a variable to store the score in
var hey = new Button('Good Luck', btn)
var title = new Title('Welcome to the worlds most famous bakery in the whole world!!'); // Create a title element
var button = new Button('', btnPress);   // Create a button element HEAD
var hidden = new Button('Gather dough', booHide);
//hidden.hide();
var gather = 1                  // Create a text element
             // Create a text element
//changes
setInterval(btnPress, 1000);   // Set up a loop
//setInterval()
function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
}

  function btn() {
    score = score-1;         // Increase the score
    scr.edit(score); // Update the page with the new score
  if(score > 15) {
    //hidden.hide(500);
  }
}
//HEAD
//=======
function btnPress() {
  score++;
  scr.edit(score);
//>>>>>>> upstream/master
}
//if(score = 1000){

 //}
//if(gather > 100){
  //hidden.show()
//}
if(score > 100){
  hidden.show()
}
 function booHide() {
   hidden.hide(1);

 }
