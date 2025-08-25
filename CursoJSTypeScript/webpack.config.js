const path = require('path');

module.exports = {
  // Define o modo para 'development' para ter um build mais rápido e com mais informações de debug
  mode: 'development',
  // Ponto de entrada da sua aplicação
  entry: './.vscode/src/aula18-webpack/aula18-webpack.ts',
  // Configuração de como os módulos (arquivos) devem ser tratados
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Expressão regular que busca por arquivos .ts e .tsx
        use: 'ts-loader', // Usa o ts-loader para transpilar esses arquivos
        exclude: /node_modules/, // Exclui a pasta node_modules do processo
      },
    ],
  },
  // Define como o Webpack resolve as importações de módulos
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Permite importar arquivos sem a extensão
  },
  // Configuração do arquivo de saída
  output: {
    filename: 'bundle.js', // Nome do arquivo final
    // Caminho absoluto para a pasta de saída, correspondendo ao 'outDir' do tsconfig
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
  // Habilita source maps para facilitar o debug no navegador
  devtool: 'source-map',
};   