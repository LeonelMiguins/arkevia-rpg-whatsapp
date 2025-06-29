

const pergaminho_tp = {
  id: 'pergaminho_tp',
  nome: 'Pergaminho de Teletransporte',
  tipo: 'consumivel',
  descricao: 'Permite teletransportar para a cidade mais próxima.',
  atributos: {},
  efeitos: {
    teletransporte: true, //Esse teletransporte: true facilita se futuramente quiser diferenciar entre TP de cidade, TP de grupo, TP aleatório
    usoUnico: true,
  },
  raridade: 'raro',
};

module.exports = { pergaminho_tp };


