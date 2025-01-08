import { stringForEl } from "./stringContent.js";

export const returnToInitialState = (el, cl) => {
  if (el.classList.contains("errorInfo")) {
    el.classList.remove(cl);
    el.textContent = stringForEl.dropZoneInfoSpan;
    return;
  }
};
