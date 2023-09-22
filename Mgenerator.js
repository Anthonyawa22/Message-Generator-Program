
// This is arrays of differnt guote.
const motivationalMessage = [
"As long you are breathing there is still hope, dont give up yet.", 
"You can get everything you want in life, if you will just help enough other people get what they want.", "Inspiration does exist, but it must find you working.", "Show up, show up, show up, and after a while the muse shows up, too.", 
"noone is born for less, you can see your future through your dream, dont stop your imaginary ability, keep dreaming", 
" dream is a sign there is still hope, dont stop dreaming."
];

const jokes = [
"There is no sunrise so beautiful that it is worth waking me up to see it.", "I always cook with wine.and it taste like wine", 
"People say money is not the key to happiness, but I have always figured if you have enough money, you can have a key made.", 
"Do not take life too seriously, those that take life seriously and sleeping in the grave"
];

const countriesGreetingsSlogan = [
"USA greeting slogan is  'Hi, how are you?' ", "CHINA greeting slogan is  'Gong hei fat choy(which means 'Best wishes)' ", "UNITED KINGDOM greeting slogan is 'Hey up' ", "NIGERIA greeting slogan is  'hafa' ", 
"SCOTLAND greeting slogan is 'Hiya' ", "INDAIN greeting slogan is 'Jai Hind'  ", "UAE greeting slogan is 'Make it Happen' "
];
// this is an empty array that takes in all the generated Messages
const generatedMessages = [];
// this is a function that randomly generated messages from the list of defined arrays
function generateRandomMessages(){
    const arrayMessages = [motivationalMessage, jokes, countriesGreetingsSlogan][Math.floor(Math.random() * 3)];
    const newArrayMessages = arrayMessages[Math.floor(Math.random() * arrayMessages.length)];
    return newArrayMessages;
}

/* this line of code is used to create a simple command-line interface for
 user input and output in a Node.js environment.*/

console.log("Welcome to the Message Generator Program!");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// this is the funstion that run that speak to the arrays and return output in random manner

function userInput(){ readline.question("Type in 'generate' to generate  random messages or type 'all messages' to display the list of all generated Messages  or type 'exit' to exit from the program: ", input => {
    if(input === 'generate'){
        const listOfMessage = generateRandomMessages();
        generatedMessages.push(listOfMessage); // this pushes the generatedMessages to a NEW array
        console.log(listOfMessage);
        userInput();
 }

    else if (input === 'all messages'){
     console.log("Generated Messages: ");
     generatedMessages.forEach((listOfMessage, index) => { // this print out the list of all the Generated Messages.
         console.log(`${index + 1} ${listOfMessage}`);
        });
     userInput();
 } 
    
    else if ( input === 'exit'){ // this exit or stop the program once 'exit is typed
        console.log('Goodbye, thanks for playing the random generated Message puzzle');
        readline.close();
    } else { // this return invalid if the character type are not in accordance with the directives
        console.log(" something is wrong! Run the progam again and please type in 'generate' or 'exit' or 'all messages in small letter words");
    } 
  });
 } 
 userInput();// this is a call function
