import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function run() {
  rl.question("$ ", (command) => {
    if (command.toLowerCase() == "exit") {
      process.exit();
    } else {
      console.log(`${command}: command not found`);
    }
    run();
  });
}

run();
