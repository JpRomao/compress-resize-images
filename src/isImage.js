const path = require('path');

const verifyFileisImage = inputFilePath => {
  const extension = path.extname(inputFilePath);

  if(
    (extension === '.png' || extension === '.jpg' || extension === '.jpeg' || extension === '.gif')
      ||
    (extension === '.PNG' || extension === '.JPG' || extension === '.JPEG' || extension === '.GIF')
  ) {
    return inputFilePath;
  }

  return false;
};

module.exports = verifyFileisImage;