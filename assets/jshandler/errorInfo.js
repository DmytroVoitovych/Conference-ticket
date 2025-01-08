export const setErrorTextInTargetElement = (el, text) => {
  el.textContent = text;
  el.classList.add("errorInfo");
  console.dir(el);
  return;
};
