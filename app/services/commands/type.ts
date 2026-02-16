import type { Command } from "../types/command";
import { builtins } from "../../constants/builtins";
import { checkIfCmdIsExeAndReturnPath } from "../functions/checkIfCmdIsExeAndReturnPath";

export const type: Command = (rl, args) => {
  if (builtins.includes(args[0])) {
    rl.write(`${args.join(" ")} is a shell builtin \n`);
  } else if (checkIfCmdIsExeAndReturnPath(args[0])) {
    rl.write(
      `${args[0]} is ${checkIfCmdIsExeAndReturnPath(args[0])}/${args[0]} \n`
    );
  } else {
    rl.write(`${args.join(" ")}: not found \n`);
  }
};
