import { createInterface } from "readline";
import { builtins } from "./constants/builtins";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function run() {
  rl.question("$ ", (command: string) => {
    const splitCommand: string[] = command.split(" ");

    switch (splitCommand[0]) {
      case "q":
        process.exit();
      case "exit":
        process.exit();
      case "echo":
        rl.write(`${splitCommand.slice(1).join(" ")} \n`);
        break;
      case "type":
        if (builtins.includes(splitCommand.slice(1).join(" "))) {
          rl.write(`${splitCommand.slice(1).join(" ")} is a shell builtin \n`);
        } else {
          console.log(`${splitCommand.slice(1).join(" ")}: not found`);
        }
        break;
      default:
        console.log(`${command}: command not found`);
        break;
    }

    run();
  });
}

run();

//Run the following to test your shell:
//  -> bun run ./app/main.ts

//Commands:
// "codecrafters test" -> test solution
// "codecrafters submit" -> submit solution
