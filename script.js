/*
// BASIC JS 
console.log('I am don');

const name = 'don'
const lastname = 'tamayo'

console.log(name, lastname);

const season = 'autumn season';
if(season === 'autumn season')
console.log(true);
else {
    console.log(false);
}

// season = true;

console.log(season);
*/

/*****************************
 * Variable mutation and type coercion
 */

/*
var firstNAme = 'DOn';
var age = 30; 
var isMarried = true; 
var job = 'freelancer'; 

//variale mutation;
age = 'thirty';
job = 'software engineer';


//coercion
console.log(firstNAme + ' is ' + age  + ' years old. ' + job + ' his work and he is married? ' + isMarried );
//alert(firstNAme + ' is ' + age  + 'years old. ' + job + ' his work and he is married? ' + isMarried );


var firstNAme = 'donato';
var lastname = prompt('what is your lastname?');
console.log( firstNAme + ' ' + lastname );

*/

/*****************************
 * Basic operators
 */
/*
var now, yearDOn, yearMon;

now = 2018;
yearDOn = 1988;
yearMon = 1990;

var don_age = ( now - yearDOn );
var mon_age = ( now - yearMon);

console.log( 'don age is ' + don_age + ' and  mon age is ' + mon_age );

var ages = yearDOn > yearMon;
console.log( ages );

//type of operator
console.log( typeof yearDOn);
*/

/*****************************
 * Operator precedence
 */
/*
var now = 2018;
var yearDOn = 1988;
var fullAge = 30;

var isFullage = now - yearDOn >= fullAge;

console.log(isFullage);

// Grouping
var ageJohn = now - yearDOn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log('multiple assignments ' + x,y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*
var Mark_mass = 70; //kg
var Mark_hieght = 1.72; // meters
var John_mass = 80; //kg
var John_height = 1.80; //meters


var Mark_BMI = Mark_mass / (Mark_hieght * Mark_hieght) //formula for bmi
var John_BMI = John_mass / (John_height * John_height)

console.log( Mark_BMI )
console.log( John_BMI )

var compareBMI = Mark_BMI > John_BMI;

console.log( compareBMI);
console.log( ' is mark\'s bmi is higher than john? ' + compareBMI)

*/

/*****************************
 * If / else statements
 */

/*
var firstNAme = 'john';
 var status = 'single';

// if (status === 'married'){
//     console.log(firstNAme + ' is married.');
    
// }else {
//     console.log(firstNAme + ' is '  + status);
// }

//--------boolean ----------//
 var isMarried = true; 

if (isMarried){
    console.log(firstNAme + ' is married.');
    
}else {
    console.log(firstNAme + ' is '  + status);
}
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);



if(BMIMark > BMIJohn){
    console.log('mark\'s BMI is higher than john');
}else{
    console.log('it is the opposite');
}
*/

/*****************************
 * Boolean logic
 */
/*
var firstNAme = 'Joey';
var age = 13;

if(age < 13 ) {
    console.log(`${firstNAme} is a boy` ); 
} else if(age >= 13 && age <= 19){ // between 13 -19 yrs olld
    console.log(`${firstNAme} is a a young teen ager` ); 
} else {
    console.log(`${firstNAme} is an adult` ); 
}

*/
/*****************************
* The Ternary Operator and Switch Statements
* condional operator that lets us write in one line
i.e (>, ?, :) if === ? else === : 
*/
/*
var firstNAme = 'Joey';
var age = 15;

age >= 16 ? console.log(`${firstNAme} can drink beer`)
: console.log(`${firstNAme} can drink juice only`)

var drink = age >= 16 ? 'beer' : 'juice';

console.log(drink);
*/

//=== SWTICH STATEMENT =====//
/*
var firstNAme = 'Joey';
var job = 'teacher';
job = 'engineer';

switch(job){
    case 'teacher':
        console.log(`${firstNAme} is a teacher`);
        break;
    case 'driver':
        console.log(`${firstNAme} is an uber driver`);
        break;
    case 'dancer':
        console.log(`${firstNAme} is a ballet dancer`);
    default:
        console.log(firstNAme + ' is a freelancer');
}
*/
/*
var firstNAme = 'Joey';
var age = 13; // age before 
age = 21 // he's getting old

switch(true){
    case age < 13:
        console.log(`${firstNAme} is a boy` ); 
        break;
    case age >= 13 && age <= 19:
        console.log(`${firstNAme} is a a young teen ager` );
        break;
    default:
        console.log(`${firstNAme} is an adult` ); 
}
*/

/*****************************
 * Truthy and Falsy values and equality operators
 */
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

//=======my solution=====//
/*
var johnPoints = (110 + 120 + 103) / 3; // orignal 89, 12,103
var MikePoints = (116 + 94 + 123 ) / 3;

console.log( johnPoints);
console.log(MikePoints);

// if(johnPoints > MikePoints){
//     console.log('the winner is john with the average of ' + johnPoints);
// } else if (johnPoints < MikePoints){
//     console.log('the winner is mike with the average of ' + MikePoints);
// }else if (johnPoints === MikePoints){
//     console.log('it\'s a draw');
// }else {
//     console.log('not sure');
// }

var winner = johnPoints >= MikePoints ? 'john is a winner' : 'mike is a winner';
console.log(winner);
*/

/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/

/*****************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var age_Mon = calculateAge(1990);
var age_DOn = calculateAge(1988);
var age_Elin = calculateAge(1994);
var age_Wil = calculateAge(1995);


console.log(age_Mon, age_DOn,  age_Elin,  age_Wil);


function  yearsUntilRetirement(year, firstNAme){
    // var age = calculateAge(year)
    // //console.log(calculateAge)
    // var retirement = 65- age // why 65 is the common retirement year 
    var retirement = 65 - calculateAge(year)

    if(retirement > 0){
        console.log(firstNAme + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstNAme + ' is already retired');
    }
}

yearsUntilRetirement(1990, 'mon');
yearsUntilRetirement(1995, 'wil');
yearsUntilRetirement(1964, 'papi');
yearsUntilRetirement(1988, 'don');
yearsUntilRetirement(1944, 'opa');

*/

/*****************************
 * Function Statements and Expressions
 */

/*
//function declaration
function whatDoyouDo(job, firstNAme) {} // do not give immediate result 


//function expression
var whatDoyouDo = function(job, firstNAme) { // produce immidiate result
    switch(job){
        case 'teacher':
            return firstNAme + ' teaches kids at public school';
        case 'driver':
            return firstNAme + ' drives uber and lift for newyork';
        case 'engineer':
            return firstNAme + ' makes 6 figure a year as a WD';
        default:
            return firstNAme + ' does something else';
    }
}
console.log(whatDoyouDo('teacher', 'Aunt BJ'));
console.log(whatDoyouDo('driver', 'larry'));
console.log(whatDoyouDo('engineer', 'ryan'));
console.log(whatDoyouDo('retired', 'ron quiba'));
*/

/*****************************
 * Arrays
 */
/*
//initialize new array
var names = ['ryan', 'larry', 'arthur'];
var years = new Array(1990, 1969, 1985);

//accessing the arrays 
console.log(names[0]);
console.log(names.length);

//mutating the array
names[1] = 'Ben';
console.log(names);

names[names.length] = 'donato'

//add data to an array
names[4] = 'mary';
console.log(names);

//different dta types 
var john = ['john', 'smith', 1990, 'designer', false];


//methods PUSH, UNSHIFT, POP, SHIFT, INDEXOF
john.push('blue'); // add new array at the end 
console.log(john);

john.unshift('MR.'); // add new array at the start
console.log(john);

john.pop(); // remove an array from the end
console.log(john);

john.shift(); // remove an array from the start
console.log(john);

console.log(john.indexOf(1990)); // will return the position of the specific array 

var isDesigner = john.indexOf('designer') === -1 ? 'john is not designer' : 'john is a disgner'
console.log(isDesigner); // ternary operator

*/

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

//========== MY SOLUTION =============//
/*
var restobills = [124,48,268];

function bills(ammount) {
    if(ammount < 50){
        console.log(20 / ammount);
    }else if (ammount >= 50 && ammount <= 200){
        console.log(15 / ammount  );
    }else if (ammount > 200) {
        console.log(10 / ammount);
    }
}
//console.log(restobills[0].bills(20, 50)); 
console.log(restobills);
console.log(restobills[0]);
console.log(bills(124));
*/

//========== INSTRUCTOR SOLUTION =============//
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);

*/

//========other solutions ==========//
/*
function calTip(bill) {
  var lessTip = 0.2; // 20%

  var betweenTip = 0.15; // 15%

  var moreTip = 0.1; // 10%

  if (bill < 50) {
    var totalTip = lessTip * bill; // $9.6
  } else if (bill >= 50 && bill < 200) {
    // $18.59

    var totalTip = betweenTip * bill;
  } else if (bill > 200) {
    var totalTip = moreTip * bill; // $26.8
  }

  return totalTip;
}

console.log(calTip(500));
*/

/*****************************
* Objects and properties
*/

/*
//Object literal
var john = {
    firstNAme: 'John',
    lastname: 'Smith',
    birthYear: 1990,
    family: ['jane', 'bob', 'emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john.family); // accessing them using dot'.'
console.log(john['lastname']); // other way of accessing it using array. 

var b = 'birthYear';
console.log(john[b]); // other way by shortening the name and create another variable.

// mutate means changing the data 
john.job = 'web dev';
john.isMarried = true;
console.log(john);

console.log(john.job); // already changed to new job

// new Object Syntax 
var jane = new Object();
jane.firstNAme = 'janeth';
jane.birthYear = 1992;
jane['lastName'] = 'Napoles';
console.log(jane);

console.log(jane.firstNAme);
*/


