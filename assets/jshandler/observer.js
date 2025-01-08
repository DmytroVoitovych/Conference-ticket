const config = {
  childList: true,
};

const checkNodeName = (node, nodeStr) => node === nodeStr;

const filesBtnHandler = (e, elList, newEl) => {
  e.preventDefault();
  if (e.target.nodeName === "BUTTON") {
    if (e.target.classList.contains("remove-image")) {
      const box = elList[0];
      const inputFile = elList[1];

      box.lastElementChild.replaceWith(newEl);
      inputFile.style.opacity = 1;
      inputFile.parentElement.style.background = "";
      inputFile.value = "";
      return;
    }
  }
};

export const mutationTrackingZoneFile = (el, ...rest) => {
  const callback = (mutationList) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        if (
          checkNodeName(
            mutation.removedNodes[0].nodeName,
            "P"
          )
        ) {
          rest.forEach((e) =>
            e.setAttribute("tabindex", "-1")
          );

          mutation.addedNodes[0].addEventListener(
            "click",
            (e) =>
              filesBtnHandler(
                e,
                rest,
                mutation.removedNodes[0]
              )
          );
        } else {
          rest.forEach((e) =>
            e.setAttribute("tabindex", "1")
          );
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(el, config);
  return observer;
};
