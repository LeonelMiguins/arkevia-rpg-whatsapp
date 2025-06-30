/**
 * 
 * Esse módulo carrega automaticamente todos os arquivos `.js` da pasta `commands`
 * (inclusive os que estão em subpastas), e executa o comando correto quando o usuário
 * envia uma mensagem começando com `/`.
 * 
 * Como funciona:
 * - Lê recursivamente a pasta `commands`
 * - Importa dinamicamente os comandos (export default)
 * - Usa o nome do arquivo como nome do comando (ex: `menu.js` vira `/menu`)
 * - No evento `onMessage`, identifica o comando digitado e executa a função correspondente
 * 
 * Observações:
 * - Eu converti em CommonJS, utilizando `require()` para importar módulos
 *   e `__dirname` para resolver caminhos de arquivos.
*
 * - Caso agente migre para ES Modules, será preciso adaptar a importação dos comandos
 *   para usar `import()` dinâmico e ajustar o caminho dos arquivos.
 * 
 * - Eu removi também o "type": "module" do package.json
 */


const fs = require('fs');
const path = require('path');

const commandsDir = path.resolve(__dirname, '../commands');

const commands = {};

function carregarComandos(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      carregarComandos(fullPath);
    } else if (file.endsWith('.js')) {
      const commandName = '/' + file.replace('.js', '');
      const commandModule = require(fullPath);
      commands[commandName] = commandModule.default || commandModule;
    }
  }
}

carregarComandos(commandsDir);
// onMessage agora recebe o parâmetro sock. @IsaStwart
async function onMessage(msg, sock) {
  const texto = msg.body.trim();
  const [cmd, ...args] = texto.split(' ');

  const comando = commands[cmd];

if (comando) {
  /* 
    Aqui temos que passar o 'sock' também para os comandos,
    porque alguns comandos podem precisar acessar o socket diretamente,
    por exemplo, para enviar imagens, arquivos ou mensagens formatadas.
    
    Por isso, ao invés de apenas:
      return comando(msg, args);
    fazemos:
      return comando(msg, args, sock); @IsaStwart
  */
  return comando(msg, args, sock);
}


  if (cmd.startsWith('/')) {
    return msg.reply('❓ Comando desconhecido. Use /help');
  }
  // Ignora se não for comando
}

module.exports = onMessage;
