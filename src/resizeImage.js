const path = require('path');
const sharp = require('sharp');

const verifyFileIsImage = require('./isImage');

const verifyFileWidth = width => isNaN(width) ? false : width;

const filePath = verifyFileIsImage(process.argv[3]);
const fileWidth = verifyFileWidth(process.argv[4]); 

if(!filePath || !fileWidth){
  return "Dados inseridos não estão corretos, verifique novamente.";
}

function resizeImage(inputFilePath = filePath, width = fileWidth) {
  width = Number(width);

  const newfileName = () => {
    const name = path.basename(inputFilePath).split('.')[0]
    return `${name}-compressed-${Date.now()}${path.extname(inputFilePath)}`;
  };

  const resizedFilePath = path.resolve('tmp','resized',`${newfileName()}`);

  sharp(inputFilePath).resize({ width }).toFile(resizedFilePath, error => {
    if(error){
      return error;
    }
    return `Imagem redimensionada com sucesso. Localizado em: ${resizedFilePath}`;
  });
}

module.exports = resizeImage;