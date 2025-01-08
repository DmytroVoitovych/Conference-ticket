import { emailBlock } from "./elements.js";
import { setErrorTextInTargetElement } from "./index.js";
import { errorString } from "./stringContent.js";

let childErrorEl = null;

export const observeAndHandleInputChanges = (e) => {
  const valid = e.target.checkValidity();

  if (!valid && childErrorEl === null) {
    const spanEl = document.createElement("span");
    setErrorTextInTargetElement(
      spanEl,
      errorString.emailInputNotValid
    );
    emailBlock.appendChild(spanEl);
    childErrorEl = spanEl;
    return;
  } else {
    if (childErrorEl !== null && valid) {
      emailBlock.removeChild(childErrorEl);
      childErrorEl = null;
    }
    return;
  }
};
