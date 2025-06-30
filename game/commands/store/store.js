/* 
Loja do Arkevia-rpg feita por @IsaStwart :)

funções de banco de dados nescessárias:


/store - abre o menu da loja
*/

const mensagensBoasVindas = {
  msg1: `*Mercador diz:* _Olá, aventureiro! Bem-vindo à *Loja de Arkevia*! Temos novos itens forjados e poções fresquinhas esperando por você._`,
  msg2: `*Mercador diz:* _Saudações, viajante! Após tantos ciclos, é ótimo revê-lo. Espadas, escudos e descontos te aguardam!_`,
  msg3: `*Mercador diz:* _Olha só quem voltou! Seja bem-vindo, herói. Entre, tome um chá e escolha com sabedoria — seu ouro vale muito aqui._`,
  msg4: `*Mercador diz:* _Quanto tempo, guerreiro! Novos equipamentos, poções turbinadas e relíquias esquecidas te esperam. Mas cuidado com maldições..._`,
  msg5: `*Mercador diz:* _Ei, você voltou! O brilho das espadas até reacendeu. Pegue seu equipamento e boa sorte nas próximas batalhas!_`
};

const armas = [
  '⚔️ Espada de Fogo - 350 moedas',
  '🪓 Machado Troll - 500 moedas',
  '🏹 Arco da Lua Negra - 420 moedas'
];

const pocoes = [
  '🧪 Poção de Vida (+50 HP) - 120 moedas',
  '🥤 Poção de Energia - 100 moedas',
  '🔥 Poção de Fúria (+20% ataque) - 200 moedas'
];

const itens = [
  '🎯 Pergaminho de Identificação - 60 moedas',
  '📦 Caixa Misteriosa - 300 moedas',
  '🔐 Chave Antiga - 90 moedas'
];

export default async function (msg, args, sock) {
  const jid = msg.key.remoteJid;

  if (jid.endsWith('@g.us')) {
    return await sock.sendMessage(jid, {
      text: '🚫 Este comando só pode ser usado no privado.\nEnvie uma mensagem no PV com o comando */store* para acessar a loja!',
      quoted: msg
    });
  }

  const subcomando = args.slice(0).join(' ').toLowerCase();

  /*
  resposta de subcomandos específicos:
  como são apenas menus de apresentações de informações,
  optei pode deixar tudo dentro do comando store, como subcomandos!
  */
  if (subcomando === 'armas list') {
    await sock.sendPresenceUpdate('composing', jid);
    await new Promise(resolve => setTimeout(resolve, 1500));
    await sock.sendMessage(jid, {
    text: `*Mercador diz:* _Ótima escolha aventureiro! Os ferreiros de Arkevia são os melhores!_`,
    quoted: msg
  });

  return await sock.sendMessage(jid, {
text: 
`
╠══𖠁𖥤 *MERCADO DE ARKEVIA*

👤 Aventureiro: *ISABELLA*            
💰 Ouro: *3750 moedas* 

╠══𖠁𖥤 *ARMAS:*  

${armas.join('\n')}
\n\nUse: *!comprar arma [número]*`,
  quoted: msg
});
  }


  if (subcomando === 'porcao list') {
    return await sock.sendMessage(jid, {
      text: `🧪 *Poções disponíveis:*\n\n${pocoes.join('\n')}\n\nUse: *!comprar porção [número]*`,
      quoted: msg
    });
  }

  if (subcomando === 'item list') {
    return await sock.sendMessage(jid, {
      text: `🎁 *Itens diversos disponíveis:*\n\n${itens.join('\n')}\n\nUse: *!comprar item [número]*`,
      quoted: msg
    });
  }

  if (subcomando === 'exit') {
    return await sock.sendMessage(jid, {
      text: '🚪 Você saiu da loja. Volte sempre que precisar, aventureiro!',
      quoted: msg
    });
  }

// menu principal da loja:
  const caption = `
╠══𖠁𖥤 *MERCADO DE ARKEVIA*

 👤 Aventureiro: *ISABELLA*            
 💰 Ouro: *3750 moedas* 

╠══𖠁𖥤 *COMANDOS:*    
                                      
 ⚔️ */store arma list*
 ↳ _"Espadas, machados e arcos forjados nas chamas de Eldorath"_

 🧪 */store porcao list*
 ↳ _"Poções místicas preparadas pela bruxa do bosque"_

 🎁 */store item list*
 ↳  _"Relíquias e bugigangas do mercado negro de Ark’Tar"_

 ↳ 🚪 */store exit*
 
╠══𖠁𖥤
`;

  const mensagens = Object.values(mensagensBoasVindas);
  const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

  // adicionei um delay de quase 2 segundos para não ficar muito robótico!
  // também há uma simulação de digitando...!
  await sock.sendPresenceUpdate('composing', jid);
  await new Promise(resolve => setTimeout(resolve, 1800));
  await sock.sendMessage(jid, { text: mensagemAleatoria });

  await new Promise(resolve => setTimeout(resolve, 1500));
  await sock.sendMessage(jid, {
    image: { url: 'game/imgs/store/store.jpg' },
    caption
  });
}
