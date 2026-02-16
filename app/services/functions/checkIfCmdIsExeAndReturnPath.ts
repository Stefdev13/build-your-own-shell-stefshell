import { env } from "process";
import fs, { constants } from "fs";

export const checkIfCmdIsExeAndReturnPath = (cmd: string) => {
  const splitPath: string[] = env.PATH?.split(":") ?? [];

  for (const dir of splitPath) {
    //Check if this directory contains a file with the name = args[0] and if it is executable
    try {
      fs.accessSync(`${dir}/${cmd}`, constants.X_OK);
      return dir;
    } catch {}
  }

  return "";
};
