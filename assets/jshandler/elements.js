import { getEl } from "./getElementBySelector.js";

const accentName = getEl(".accent-namejs");
const ticketName = getEl(".ticket-namejs");
const accentEmail = getEl(".accent-emailjs");
const ticketSocial = getEl(".ticket-socialjs");
const ticketId = getEl(".ticketId");
const avatar = getEl(".avatarjs");
const sectionConf = getEl(".codingConf");
const sectionTicket = getEl(".ticket");
const dragZoneEl = getEl("#dropTarget");
const fileContainerEl = getEl(".fileDecor");
const inputFileEl = getEl("#avatar");
const dropInfoSpan = getEl(".formDropzone + span");
const inputEmail = getEl("input[type=email]");
const form = getEl("form");
const emailBlock = getEl(
  ".formInput-block:has(input[type=email])"
);

export {
  accentName,
  ticketName,
  accentEmail,
  ticketId,
  ticketSocial,
  avatar,
  sectionConf,
  sectionTicket,
  dragZoneEl,
  fileContainerEl,
  inputFileEl,
  dropInfoSpan,
  inputEmail,
  form,
  emailBlock,
};
