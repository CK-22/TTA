//today's forcast
const kelvin = 293;
//conversion to celsius
const celsius = kelvin - 273;
//calc for fahrenheit
let fahrenheit = celsius*(9/5)+32;
//will give decimal so .floor will round down
fahrenheit = Math.floor(fahrenheit);

/* sting templates need ti be wrapped in backticks `` not "" or ''*/
console.log(`The Temperature is ${fahrenheit} degrees Fahrenheit.`);
