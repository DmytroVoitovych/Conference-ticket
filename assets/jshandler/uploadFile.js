import { getEl } from "./index.js";

export const uploadFile = (e) => {
  if (e?.target?.type === "submit") e.preventDefault();

  !e?.target?.classList?.contains("remove-image") &&
    getEl("#avatar").click();
  return;
};
