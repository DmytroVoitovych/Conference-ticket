import { arrOfInputAnimEls } from "./assets/jshandler/animation.js";
import {
  dragZoneEl,
  dropInfoSpan,
  fileContainerEl,
  form,
  inputEmail,
  inputFileEl,
} from "./assets/jshandler/elements.js";
import {
  observeAndHandleInputChanges,
  setErrorTextInTargetElement,
  mutationTrackingZoneFile,
  runAnimation,
  stopAnimation,
  getNameOfFile,
  setDataInTicketSection,
  validFileSize,
  validFileType,
  setStyleByFile,
  defineEvent,
  returnToInitialState,
  uploadFile,
  dataTransformate,
} from "./assets/jshandler/index.js";
import {
  errorString,
  stringForEl,
} from "./assets/jshandler/stringContent.js";

const createListOfButtonForFileUpload = () => {
  if (dragZoneEl.lastElementChild.nodeName !== "P") return;
  const ulEl = document.createElement("ul");
  ulEl.classList.add("dropZone-btnlist");

  const ulChildren = [
    stringForEl.buttonRemove,
    stringForEl.buttonChange,
  ].map((e) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = e;
    btn.classList.add(e.toLowerCase().replace(" ", "-"));
    li.appendChild(btn);
    return li;
  });

  ulEl.append(...ulChildren);
  dragZoneEl.lastElementChild.replaceWith(ulEl);
};

const dropFile = (e) => {
  e.preventDefault();
  const file = defineEvent(e);

  if (file) {
    const { type, size, name } = file;
    const isSuitType = validFileType(type);
    const isSuitSize = validFileSize(size);

    if (!isSuitType) {
      setErrorTextInTargetElement(
        dropInfoSpan,
        `${errorString.dropZoneErrorType} ${getNameOfFile(
          name
        )}`
      );

      return;
    } else if (!isSuitSize.suitSize()) {
      setErrorTextInTargetElement(
        dropInfoSpan,
        `${errorString.dropZoneErrorSize}`
      );

      return;
    } else {
      e?.dataTransfer &&
        (inputFileEl.files = e.dataTransfer.files);
      returnToInitialState(dropInfoSpan, "errorInfo");
      setStyleByFile(fileContainerEl, inputFileEl, file);
      createListOfButtonForFileUpload();
    }
  }
};

const setDataFromForm = (e) => {
  e.preventDefault();
  e.target.setAttribute("disabled", true);
  runAnimation(arrOfInputAnimEls);
  let start = false;

  const formData = new FormData(e.target);
  const data = {};

  for (let [key, val] of formData.entries()) {
    data[key] =
      val instanceof File
        ? URL.createObjectURL(val)
        : dataTransformate(val);
  }

  stopAnimation(arrOfInputAnimEls, () => {
    !start && setDataInTicketSection(data);
    start = true;
  });
};

dragZoneEl.addEventListener("dragover", (event) =>
  event.preventDefault()
);
dragZoneEl.addEventListener("drop", dropFile);
dragZoneEl.addEventListener("click", uploadFile);
dragZoneEl.addEventListener("keydown", (e) => {
  if (
    e?.key === "Enter" &&
    !e?.target?.classList?.contains("remove-image")
  )
    uploadFile(e);
  return;
});
inputFileEl.addEventListener("change", dropFile);
inputEmail.addEventListener(
  "change",
  observeAndHandleInputChanges
);
form.addEventListener("submit", setDataFromForm);

mutationTrackingZoneFile(
  dragZoneEl,
  dragZoneEl,
  inputFileEl
);
