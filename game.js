var score = 0;
var score1 = 0;
postToPage(score); // Print to the page

createButton('Dont click me', btnPress); // Make a button
changeTitle('Clicker Game');
createButton('click me', btnPressed);
setInterval(btnPress, 1000);

function btnPress() {
  score = score*2;

  postToPage(score);
}
function btnPressed() {
  score++;

  postToPage(score1);
}
