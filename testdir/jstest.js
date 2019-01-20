console.log('startjs'); 

//////////////////////////////
// data types
//////////////////////////////
// they can be JS can be:
// numbers
// strings
// arrays
// objects
//////////////////////////////

/*
//////////////////////////////////////////////////////////
// variables 
// can contain letters, numbers, dollar signs
// they should beging with a letter or an _ or a $
//and they are CaSe SeNsItIvE!!
//////////////////////////////////////////////////////////

var number1 = '35';
console.log('TestNumber1');
var number2 = 40;
console.log('estNumber2');

alert ('2x35=' +number1*2);
alert ('komt er nu maar 40 te staan? ' +number2+ ' ..oke mooizo!')
*/

/*
var test = 'this is lower case test';
console.log('LowerCaseTest');
var Test = 'this is CAPITAL LETTER test';
console.log('CapitalLetterTest');

alert(test);
alert(Test);
*/
////////////////////////////////////////////////////////////////
// coding styles
////////////////////////////////////////////////////////////////
// camel case style
// (every word EXCEPT the first starts with a capital letter)
// var thisIsCamelCase

// partial case style
// (every word INCLUDING the first starts with a capital letter)
// var ThisIsPartialCase

//underscore style
// (each word is separated with an underscore)
// this_is_underscore_style
////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// arrays
//////////////////////////////////////////
//var colors = [ 'red', 'blue', 'green']

////////////////////////////////////////////////////////////////
// alert(colors[2]);
// console.log('ArrayTest1');

 var colors = new Array('red', 'yellow', 'orange');

// alert (colors[0]);
// console.log('ArrayTest2');
//////////////////////////////////////////////////////////////
// you can add more after 'orange', but also like this:
//////////////////////////////////////////////////////////////
// colors[3] = 'green';
// alert (colors[1]);
/////////////////////////////////////////////////////////////////
// as you might not know how many arrays you have, this would be //the best way to add more to the existing array!
/////////////////////////////////////////////////////////////////
colors.push('purple');
alert (colors[3]);
console.log ('ArrayTest3');



