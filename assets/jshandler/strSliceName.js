export const getNameOfFile = (str) =>
  `"[.${str.split(".").at(-1)}]"`;
