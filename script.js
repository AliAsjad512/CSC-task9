// Reverse the string
function reverse (str){
    var s1= str.split("");
    var s2=s1.reverse();
    return s2.join("");
 }
 
 let text = prompt("Enter the string: ");
 console.log(reverse(text));
 
 // switches all uppercase characters to lowercase and lowercase charcaters to uppercase

 function convert(str)
{
    let letters = str.split('')
    let newArray = []
    
    for(let letter of letters)
    {
        if(letter === letter.toUpperCase())
        {
            newArray.push(letter.toLowerCase())
        }
        else
        {
            newArray.push(letter.toUpperCase())
        }
    }
    return newArray.join('')
}

let input = prompt("Enter string: ")
let string = convert(input)
console.log(string)


//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map


const celConv = [23,32,41,50,59];
const newArray = celConv.map(toCelcius);
function toCelcius(array){
    let val= 5/9*(array-32);

    return  val;
    

}

console.log(newArray);







//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map



const pass = [20, 30, 50, 80, 90, 100];
const pasFai =pass.map(
    function passOrFail(array){
        if(array < 75){
            return false;
        }
    
        else  {
            return  true;
        }
    
    }
    
    )
    console.log(pasFai);



 










//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map 

function germanNumbers() {
    const cardinalNumbers = [2, 3, 4, 5, 6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    let val = [];
    for (let i = 0; i < cardinalNumbers.length; i++) {
        val[i]=cardinalNumbers[i] + ' is ' + germanNumbers[i];
    }
    return val;
}

console.log(germanNumbers());





// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter


function returnPrimeNumbers(item){
    
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
     for (let x = 2; item > x; x++) {

    if (item % x == 0) {

      return false;

    }

  }

  return item > 1;

}

console.log(numbers.filter(returnPrimeNumbers));
    






//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:

function numAndSt(){
    for(let i=1;i<=100;i++){
        if(i%3==0){
            console.log('CSC225 RULES');
        }
        else if(i%3==0 && i%5==0 ){
            console.log("CSC225 RULES I LOVE JAVASCRIPT")
        }
        else if(i%5==0){
            console.log('I LOVE JAVASCRIPT')
        }
        else {
            console.log(i);
        }
    }
}
 numAndSt();






