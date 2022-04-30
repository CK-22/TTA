//
const userName = 'Candide';
//ternary expression
if (userName) {
  console.log(`Hello, ${userName}!`);/*will print hello +name*/
} else {
  console.log('Hello!');//will print just hello
}
//question user asks
const userQuestion = '';
console.log(`${userName} asked, ${userQuestion}`);
//random number generator
const randomNumber = Math.floor(Math.random()*8);
//
let eightBall = '';
switch (randomNumber){
  case 0: eightBall = 'Reply hazy try again';
    break
  case 1: eightBall = 'Cannot predict now';
    break
  case 2: eightBall = 'Do not count on it';
    break
  case 3: eightBall = 'My sources say no';
    break
  case 4: eightBall = 'Outlook not so good';
    break
  case 5: eightBall = 'Signs point yes';
    break
  case 6: eightBall = 'it is decidingly so';
    break
  case 7: eightBall = 'It is certain';
}
console.log(`The Magic Eight Ball says: ${eightBall}`)