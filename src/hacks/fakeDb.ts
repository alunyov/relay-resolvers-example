// A hacky way of reading/saving things

import { readFileSync, writeFileSync, existsSync } from "fs";

function getDbPath(dbName: string): string {
  return `${process.env["PWD"]}/.next/cache/${dbName}`;
}

export function getThings<T>(dbName: string): Map<string, T> | undefined {
  const path = getDbPath(dbName);
  if (existsSync(path)) {
    return new Map(JSON.parse(readFileSync(path, "utf-8")));
  }
}

export function setThings<T>(dbName: string, things: Map<string, T>) {
  writeFileSync(
    getDbPath(dbName),
    JSON.stringify(Array.from(things.entries()))
  );
}
