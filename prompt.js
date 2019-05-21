const readline = require('readline');
// Readline with node for a CLI 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

//Clear console
process.stdout.write('\033c');

//import ToDoList functions
var toDoList = require('./script');

// for testing purposes
var testList = [];

// Creates 15 entries
// for testing purposes.
for (let i = 0; i < 15; i++) {
    testList = toDoList.addListItem(
        testList,
        "Title Goes here",
        "Description is here",
        new Date()
    );
}

function createNewListObject(){

    rl.on('line', (line) => {
        console.log('you wrote:' + line.trim());
        rl.close();
    });
};

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim().toLowerCase()) {
    case 'n':
        rl.on('line', (line) => {
            console.log(line)
        });
        createNewListObject();
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
