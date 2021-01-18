const path = require('path');
const fs = require('fs');
const compressImages = require('compress-images');

const verifyFileIsImage = require('./isImage');

const filePath = verifyFileIsImage(process.argv[2]);
const outputPath = path.resolve('tmp', 'compressed') + '/';
const options = {
  compress_force: false,
  statistics: true,
  autoupdate: true
}

function compress(inputFilesPath = filePath, outputFilePath = outputPath) {
  compressImages(inputFilesPath, outputFilePath, options, false,
      { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
      { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
      { svg: { engine: "svgo", command: "--multipass" } },
      { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
      (error, completed, statistic) => {
        if(error){
          throw error;
        }

        console.log(statistic);

        if(process.argv[3] == 'delete') {
          fs.unlink(inputFilesPath, error => {
            if(error) {
              throw error;
            }
            return "Arquivos originais deletados.";
          });
        }
  });
}

compress();

module.exports = compress;