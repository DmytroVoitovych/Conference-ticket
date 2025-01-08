export const stopAnimation = (animArr, callback) =>
  animArr.forEach((e) => e.finished.then(callback));
