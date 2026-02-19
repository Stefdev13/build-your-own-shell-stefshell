import type { Command } from "../types/command";
import fs from "fs";

export const cd: Command = (rl, args) => {
  try {
    switch (args[0][0]) {
      //Absolute paths
      case "/":
        fs.existsSync(args[0])
          ? process.chdir(args[0])
          : rl.write(`cd: ${args}: No such file or directory \n`);
        break;

      //Relative paths
      case ".":
        let currentDirAsArray: string[];
        if (process.cwd().includes("/")) {
          currentDirAsArray = process.cwd().split("/");
        } else {
          currentDirAsArray = process.cwd().split("\\");
        }

        for (const section of args[0].split("/")) {
          if (section == "..") {
            currentDirAsArray.pop();
          } else if (section != ".") {
            currentDirAsArray.push(section);
          }
        }

        process.chdir(currentDirAsArray.join("/"));
        break;

      default:
        rl.write(`cd: ${args}: No such file or directory \n`);
        break;
    }
  } catch {
    rl.write(`cd: ${args}: No such file or directory \n`);
  }
};
