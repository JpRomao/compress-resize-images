const resize = require('./src/resizeImage');
// const compress = require('./src/compressImage');

const operation = process.argv[2];

if(operation === 'resize' || operation === 'RESIZE') {
  return resize();
}
else if(operation === 'compress' || operation === 'COMPRESS') {
  return compress();
}
else {
  return "Choose an operation that exists. (resize or compress)";
}