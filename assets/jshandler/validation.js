const fileTypes = ["image/jpeg", "image/png"];
const limitedsize = 500;

export const validFileType = (type) =>
  fileTypes.includes(type);

export const validFileSize = (size) => ({
  sizeString: `${(size / 1e3).toFixed(1)} KB`,
  kbsize: size / 1e3,

  suitSize() {
    return this.kbsize <= limitedsize;
  },
});
