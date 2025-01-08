import { dataTransformate } from "./dataTransformate.js";
import { defineEvent } from "./defineEvent.js";
import { observeAndHandleInputChanges } from "./emailInputHandler.js";
import { setErrorTextInTargetElement } from "./errorInfo.js";
import { getEl } from "./getElementBySelector.js";
import { mutationTrackingZoneFile } from "./observer.js";
import { returnToInitialState } from "./returnToInitialState.js";
import { runAnimation } from "./runAnimation.js";
import { setStyleByFile } from "./setStyleByFile.js";
import { stopAnimation } from "./stopAnimation.js";
import { getNameOfFile } from "./strSliceName.js";
import { setDataInTicketSection } from "./ticket.js";
import { uploadFile } from "./uploadFile.js";
import {
  validFileSize,
  validFileType,
} from "./validation.js";

export {
  setErrorTextInTargetElement,
  observeAndHandleInputChanges,
  getEl,
  mutationTrackingZoneFile,
  runAnimation,
  stopAnimation,
  getNameOfFile,
  setDataInTicketSection,
  validFileSize,
  validFileType,
  setStyleByFile,
  defineEvent,
  uploadFile,
  dataTransformate,
  returnToInitialState,
};
