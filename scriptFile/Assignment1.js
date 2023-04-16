
//TASK 1
/* 
Calculate the zakat value, first, create a variable named "zakatPercentage" and
store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
named "userInput" and take the input from the user using the prompt. Make sure
the input value is of a type number by converting the input string to a number
using a suitable method. Then, create a variable named "result" and assign its value
to the multiplication of the zakat percentage and user input. Finally, use an alert
message to display the calculated zakat value. The message should look like this:
"Your zakat value is xxx".
 */

//CODING OF TASK 1
/* var zakatPercentage=0.025;
var userInput= prompt("Enter your Amount for calculating zakat");
userInput=Number(userInput);
var result=zakatPercentage*userInput;
alert("Your Zakat Amount is " + result);
 */

//TASK 2
/* 
calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.
1
*/
//CODING OF TASK 2
/*
alert("Welcome to Fitra calculation App");
var familyMembers= prompt("Enter Your Family Members...");
familyMembers=Number(familyMembers);
var fitraMethod= prompt("Choose a Fitrah method\n Wheat\nBarley\nDates\nRaisin");
var fitra=0;

if ( fitraMethod=='wheat' || fitraMethod== 'WHEAT'){
    fitra=familyMembers*250;
    alert("Your Fitra amount for the whole family will be " + fitra);
}
 else if
 
 ( fitraMethod=='barley' ||fitraMethod== 'BARLEY'){
    
    fitra=familyMembers*450;
    alert("Your Fitra amount for the whole family will be " + fitra);
} 
else if
( fitraMethod=='dates'|| fitraMethod=='DATES'){
    fitra=familyMembers*2150;
    alert("Your Fitra amount for the whole family will be " + fitra);
}
else if
( fitraMethod==='raisin' || fitraMethod=='RAISIN'){
    fitra=familyMembers*2800;
    alert("Your Fitra amount for the whole family will be " + fitra);
}
 else{
    alert ("Enter from given values");
 }
 /* 

 //TASK 3
 /* 
 
 Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again
 
 */
//CODING OF TASK 3
 /*
var secretNumber= 7;
var guessNumber = prompt ("Enter your Guess Number  ")
guessNumber=Number(guessNumber);
if (secretNumber==guessNumber)
{
alert("Congratz , you guess the secret number " + secretNumber )
}
else if (guessNumber>secretNumber){
    alert ("Opz your number is greater then secret number , guess again  " + secretNumber)
}
else if (guessNumber<secretNumber){
    alert("Opz your number is less then secret number , guess again" + secretNumber)
}
else
alert("Try Again");
 
*/

//TASK 4
/* 
Create a program that asks the user to enter a name, and then prints out the name
with the first letter capitalized (Make your name in capitalized case).

/*
CODING FOR TASK 4
const name=prompt("Enter your name ");

let extract=name.slice(0,1);
let letters=name.slice(1,10);

let uppercaseLetter=extract.toUpperCase();
//alert(uppercaseLetter);
let result=uppercaseLetter.concat(letters);
alert(result);
*/

//TASK 5
/* 
Task 5:
In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.
Make sure to use descriptive variable names and comment on your code for clarity

*/
//CODING FOR TASK 5


//CODING FOR TASK 5
/* 
const contactNames=[];                               // define our array
const contactNumbers=[];
for (var i = 0; i < 3; i++) {              // loop 10 times
  contactNames.push(prompt('Enter Your Names ' + (i+1))); // push the value into the array
contactNumbers.push(prompt('Enter Contact Numbers ' + (i+1))); 
}


   for(var j=0;j<3;j++){
    document.write("Name : "+ contactNames[j]+ " Contact Number: "+contactNumbers[j] +"<br>");
   }
    */

   //TASK 6
   /* 
   Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining.
2
   */
/* 
   var productNames=["1:coffee Maker\n" , "2: Blender\n","3 : Mixer\n", " 4 : Toaster\n" ,"5 : Microwave\n", " 6 : Stove\n", "7 : Kettle\n" , "8 : Rice Cooker"];
   //alert("Product Names \n" + productNames["1:coffee Maker","2:Blender","3:Mixer", "4:Toaster", "5:Microwave", "6:Stove", "7:Kettle", "8:Rice Cooker"]);
   var indexRemoved=+prompt(productNames +"Enter the product Number you want to remove");
  alert("Removed Item was  "+  productNames[indexRemoved-1]);
  productNames.splice(indexRemoved-1,1);
  
  alert ("The Remaining Products are\n " +productNames);
   */

  //TASK 7
  /* 
  
  Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote.
  */
//CODING FOR TASK 7
 /*
var nationality= prompt("Enter your Nationality");
var gender= prompt("Gender");
var age= +prompt("Enter your Age");
var martialStatus;
if (nationality==="pakistani" || nationality==='indian'){  
          if (age>18 && gender=="male"){
           alert("You are above 18  & male so Eligible for vote");
                                       }
              else if(age>18 && gender=="female"){
    martialStatus=prompt("Are you married or not");
     if(martialStatus=="yes"){
        alert("You are married so eligible for vote");
    }
    else{
        alert("You are not married , so not eligible for vote");
    }
}
else{
    alert(" You are below 18 or not female so Not Eligible for Vote");
}
}
else{
    alert("You are not Pakistani or Indian");
}
 */

//TASK 8
/* 
You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.
(Hint : Make sure it should not disturb the array that contains 15 players instead you have
to make a copy of this array)
3
*/

//CODING FOR TASK 8
/* 
var WorldCupSquad=[" Shadab Khan "," Haris Rauf " ," Iftikhar Ahmed "," Naseem Shah "," Haris Rauf "," Imad Waseem "," Shaheen Afridi ",
" Shan Masood "," M.Rizwan "," Fakhar Zaman "," M.Nawaz "," Zaman Khan "," M.Haris "," Saim Ayoub "," IhsanUllah "];
alert ("The WorldcupSquad team players are : " + WorldCupSquad)
var matchPlayers=WorldCupSquad.slice(0,11);
alert ("The selected Pakistani Team players are : " + matchPlayers);
 */