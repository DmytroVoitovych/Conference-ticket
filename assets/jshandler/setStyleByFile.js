export const setStyleByFile = (elMain, elExtra, img) => {
  const convertedUrl = `url(${URL.createObjectURL(img)})`;

  elMain.style.backgroundImage = convertedUrl;
  elMain.style.backgroundSize = "cover";
  elMain.style.backgroundReapet = "no-reapet";
  elMain.style.backgroundPosition = "center";
  elExtra.style.opacity = 0;
  return;
};
