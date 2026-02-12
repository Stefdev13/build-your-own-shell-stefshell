import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function run() {
  rl.question("$ ", (command: string) => {
    const indexOfFirstSpace: number = command.indexOf(" ");
    const firstCommand: string =
      indexOfFirstSpace > 0
        ? command.slice(0, indexOfFirstSpace)
        : command.slice(0);

    const commandParams: string =
      indexOfFirstSpace > 0 ? command.slice(indexOfFirstSpace).trim() : "";

    switch (firstCommand.toLowerCase()) {
      case "q":
        process.exit();
      case "exit":
        process.exit();
      case "echo":
        rl.write(`${commandParams} \n`);
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
