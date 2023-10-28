# REQUISITOS

É preciso ter o NodeJS instalado.

https://nodejs.org/en  

# O QUE O APP FAZ

O app comprimi ou redimensiona a imagem que você especificar.  

# COMO UTILIZAR

Abra sua linha de comando dentro da pasta do projeto e digite os comandos listados abaixo de acordo com o que quer fazer.  

# REDIMENSIONAR IMAGEM

Use o comando (sem as aspas): "npm run resize <caminho_imagem> <tamanho_largura_imagem>"  

Caso queira utilizar o Yarn, o comando ficará assim (sem as aspas): "yarn resize <caminho_imagem> <tamanho_largura_imagem>"  

Exemplo NPM: npm run resize C:\\Users\\MyUser\\images\\teste.png 200
Com Yarn: yarn resize C:\\Users\\MyUser\\images\\teste.png 200  

O exemplo acima irá redimensionar a imagem 'teste.png' para 200 de largura e irá fazer com que a altura seja proporcionalmente aumentada ou diminuida.  

Nota: o exemplo utiliza o caminho total, mas pode ser usado o caminho relativo.  

As imagens podem ser achadas no caminho "tmp/resized"  

# COMPRIMIR IMAGEM

Use o comando (sem as aspas): "npm run compress <caminho_imagem>"  

Caso queira utilizar o Yarn, o comando ficará assim (sem as aspas): "yarn compress <caminho_imagem>"  

Exemplo NPM: npm run compress /home/user/images/teste.png
Com Yarn: yarn compress /home/user/images/teste.png

O exemplo acima irá comprimir a imagem 'teste.png' para ter um tamanho menor, fazendo o mínimo de perda de qualidade possível.  

Nota: o exemplo utiliza o caminho total, mas pode ser usado o caminho relativo.  

As imagens podem ser achadas no caminho "tmp/compressed"
