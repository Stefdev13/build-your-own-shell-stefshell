import type { Command } from "../types/command";
import fs from "fs";

export const cd: Command = (rl, args) => {
  switch (args[0][0]) {
    case "/":
      fs.existsSync(args[0])
        ? process.chdir(args[0])
        : rl.write(`cd: ${args}: No such file or directory \n`);
      break;
    default:
      rl.write(`cd: ${args}: No such file or directory \n`);
      break;
  }
};
