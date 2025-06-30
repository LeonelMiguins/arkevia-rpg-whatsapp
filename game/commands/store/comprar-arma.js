export default async function (msg, args, sock) {
  const jid = msg.key.remoteJid;

  const armas = [
    '⚔️ Espada de Fogo - 350 moedas',
    '🪓 Machado Troll - 500 moedas',
    '🏹 Arco da Lua Negra - 420 moedas'
  ];

  const texto = `🛡️ *Armas disponíveis:*\n\n${armas.join('\n')}\n\nUse: *!comprar arma [número]*`;

  await sock.sendMessage(jid, { text: texto }, { quoted: msg });
}
