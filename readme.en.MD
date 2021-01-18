# REQUIREMENTS

Necessary Node and NPM or YARN previously installed.

# WHAT THE APP DOES

The app compress or resize an image especified by the user.

# HOW TO USE

Open your command line(CLI) inside the app folder and the commands listed below.

# RESIZING AN IMAGE

Use the command (without quotes): "npm run resize <caminho_imagem> <tamanho_largura_imagem>"
For those who uses Yarn (without quotes): "yarn resize <caminho_imagem> <tamanho_largura_imagem>"  
NPM example: npm run resize /home/user/images/teste.png 200
Yarn example: yarn resize /home/user/images/teste.png 200  
These examples will resize an image called 'teste.png' for 200 width and the height will be resized proportionally.

Note: the example uses the absolute path, but can be used the relative path.

The image can be found at the path: "tmp/resized/"

# COMPRESSING AN IMAGE

Use the command (without quotes): "npm run compress <caminho_imagem>"
For those who uses Yarn: "yarn compress <caminho_imagem>"  
NPM example: npm run compress C:\\Users\\MyUser\\images\\teste.png  
Yarn example: yarn compress C:\\Users\\MyUser\\images\\teste.png  
The example above will compress the image teste.png

Note: the example uses the absolute path, but can be used the relative path.

The image can be found at the path: "tmp/compressed/"
