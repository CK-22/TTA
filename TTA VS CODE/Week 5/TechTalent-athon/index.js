let raceNumber = Math.floor(Math.random()*1000);
// check if reg was late or not 
let registeredEarly = true;
let registeredLate = true;
//runners age
const age = 18;
//if runner is older than 18
if(age > 18 && registeredEarly) {
  raceNumber += 1000 
  console.log(`${raceNumber}: your race time is at 9:30 am`);//<--early registrants
} else if(age > 18 && registeredLate) {
  raceNumber += 1000 
  console.log(`${raceNumber}: your race time is at 11:00 am`);//<--late registrants 
} else if(age < 18 ){
  raceNumber -=1000
  console.log(`${raceNumber}: your race time is at 12:30 pm, this is regardless of registration`);/*<--youth race at this time regardless of late or early registration*/
}else(age == 18)
  console.log('see registration desk');
//i dont know why it is only printing the last .log