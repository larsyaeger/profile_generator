const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});
let answer1 = '';
let answer2 = '';
let answer3 = '';
let answer4 = '';
let answer5 = '';
let answer6 = '';
let answer7 = '';

//rl.setPrompt
//rl.prompt
//rl.close --- closes the application
//rl.on --- is the listener, ex: rl.on('close', () => console.log('correct'))
rl.question('What is your full legal name? Nicknames are UNNACEPTABLE \n', (userInput) => {
  console.log(`${userInput}, that is a cool name.`);
  var answer1 = userInput;
  rl.question("What's an activity you like doing?\n", (userInput) => {
    console.log(`You like ${userInput}?? Wow that's so cool! SO AWESOME`);
    var answer2 = userInput;
    rl.question(`Alright ${answer1}, what do you listen to while doing that activity?\n`, (userInput) => {
      var answer3 = userInput;
      console.log(`You also listen to ${userInput}?! I do all the time too`);
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.\n`, (userInput) => {
        console.log(`so cool!`);
        var answer4 = userInput;
        rl.question(`What's your favourite thing to eat for that meal?\n`, (userInput) => {
          console.log(`tubular!!!`);
          var answer5 = userInput;
          rl.question(`What's your FAVOURITE sport?\n`, (userInput) => {
            console.log(`That's cool`);
            var answer6 = userInput;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\n`, (userInput) => {
              console.log(`Yup that's a useful superpower`);
              var answer7 = userInput;
              console.log(`Here is all the info I gathered from you.\n You're name is: ${answer1}\n An enjoyable activity for you is: ${answer2}\n While you do that activity you like to listen to: ${answer3}\n You're favourite meal of the day is: ${answer4}\n You're favourite food for that meal is: ${answer5}\n Your favourite sport is: ${answer6}\n Your superpower is: ${answer7}\n thank you for taking this survey`);
              rl.close();
            });
          });
        });
      });
    });
  });
});