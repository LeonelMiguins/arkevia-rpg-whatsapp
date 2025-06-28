import readline from 'readline';
import onMessage from '../game/handlers/onMessage.js'; // seu handler real

// Classe mock da mensagem, pra deixar o reply certinho
class MockMessage {
  constructor(body, from) {
    this.body = body;
    this.from = from;
  }

  async reply(text) {
    console.log(`[BOT RESPONDEU] ${text}`);
  }
}

// Função que simula o envio da mensagem para o handler onMessage
async function simulateMessage(text, from) {
  const mockMsg = new MockMessage(text, from);
  await onMessage(mockMsg);
}

// Usuários fake pra simular troca
const usuarios = {
  '5511999992222@c.us': 'mk',
  // adiciona outros usuários fake aqui
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>> '
});

console.log('Bot local iniciado. Digite comandos tipo !login nome senha');
console.log('Para testar como outro usuário, digite: /user <whatsappId>');
console.log('Usuários disponíveis:', Object.keys(usuarios).join(', '));

let currentUserId = '5511999992222@c.us'; // usuário padrão

rl.prompt();

rl.on('line', async (line) => {
  line = line.trim();

  if (line.startsWith('/user ')) {
    const userId = line.split(' ')[1];
    if (usuarios[userId]) {
      currentUserId = userId;
      console.log(`[INFO] Usuário atual setado para ${usuarios[userId]} (${currentUserId})`);
    } else {
      console.log(`[ERRO] Usuário desconhecido. Use um dos disponíveis: ${Object.keys(usuarios).join(', ')}`);
    }
    rl.prompt();
    return;
  }

  // Simula envio da mensagem com usuário atual
  await simulateMessage(line, currentUserId);

  rl.prompt();
}).on('close', () => {
  console.log('Bot local encerrado');
  process.exit(0);
});
