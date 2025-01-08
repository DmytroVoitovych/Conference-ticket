export const defineEvent = (e) =>
  e?.dataTransfer
    ? e?.dataTransfer?.items[0].getAsFile()
    : e?.target?.files[0];
