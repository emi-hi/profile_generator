const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`what is your name? `, (name) =>{
  console.log(`hello, ${name}!`);
  rl.question(`what is your favorite hobby? `, (hobby) => {
    rl.question(`what tunes do you listen to while doing that?? `, (tunes) => {
      rl.question(`what is your favorite meal of the day: breakfast, lunch, or dinner? `, (meal) => {
        rl.question(`What is your favorite thing to eat for ${meal}? `, (food) => {
          rl.question(`what sport is your favorite? `, (sport) => {
            rl.question(`what is your superpower? What are you amazing at? `, (superpower) => {
              console.log(`Thanks, ${name}! You love ${hobby}, listening to ${tunes}, and eating ${food} at ${meal}. You like ${sport}, and your superpower is ${superpower}. You seem really interesting, your profile will be generated shortly. Thanks for filling out this form!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

