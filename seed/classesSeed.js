// import usando require padrão CommonJS
const { habilidadesGuerreiro } = require('./data/habilidades/guerreiro.js');
const { habilidadesMago } = require('./data/habilidades/mago.js');
const { habilidadesArqueiro } = require('./data/habilidades/arqueiro.js');
const { habilidadesPaladino } = require('./data/habilidades/paladino.js');
const { habilidadesLadino } = require('./data/habilidades/ladino.js');
const { habilidadesNecromante } = require('./data/habilidades/necromante.js');
const { habilidadesMonge } = require('./data/habilidades/monge.js');
const { habilidadesDruida } = require('./data/habilidades/druida.js');
const { habilidadesCavaleiro } = require('./data/habilidades/cavaleiro.js');
const { habilidadesElementista } = require('./data/habilidades/elementista.js');

const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config();

const prisma = new PrismaClient();

const classes = [
  {
    id: 'guerreiro',
    nome: 'Guerreiro',
    descricao: 'Especialista em combate corpo a corpo com força bruta.',
    habilidades: habilidadesGuerreiro,
  },
  {
    id: 'mago',
    nome: 'Mago',
    descricao: 'Manipulador de energias arcanas, especialista em dano mágico.',
    habilidades: habilidadesMago,
  },
  {
    id: 'arqueiro',
    nome: 'Arqueiro',
    descricao: 'Especialista em ataques à distância e precisão mortal.',
    habilidades: habilidadesArqueiro,
  },
  {
    id: 'paladino',
    nome: 'Paladino',
    descricao: 'Guerreiro sagrado, equilíbrio entre ataque e cura.',
    habilidades: habilidadesPaladino,
  },
  {
    id: 'ladino',
    nome: 'Ladino',
    descricao: 'Mestre da furtividade, velocidade e dano crítico.',
    habilidades: habilidadesLadino
  },
  {
    id: 'necromante',
    nome: 'Necromante',
    descricao: 'Controlador de mortos-vivos e magia sombria.',
    habilidades: habilidadesNecromante,
  },
  {
    id: 'monge',
    nome: 'Monge',
    descricao: 'Lutador disciplinado que usa o corpo como arma.',
    habilidades: habilidadesMonge,

  },
  {
    id: 'druida',
    nome: 'Druida',
    descricao: 'Guardião da natureza, domina magias de cura e veneno.',
    habilidades: habilidadesDruida,
  },
  {
    id: 'cavaleiro',
    nome: 'Cavaleiro',
    descricao: 'Protetor com armadura pesada e lealdade inabalável.',
    habilidades: habilidadesCavaleiro,
  },
  {
    id: 'elementalista',
    nome: 'Elementalista',
    descricao: 'Dobrador dos elementos: fogo, gelo, raio e terra.',
    habilidades: habilidadesElementista
  },
];


async function main() {
  for (const classe of classes) {
    await prisma.classes.upsert({
      where: { id: classe.id },
      update: {},
      create: {
        id: classe.id,
        nome: classe.nome,
        descricao: classe.descricao,
        habilidades: {
          create: classe.habilidades.map(h => ({
            id: h.id,
            nome: h.nome,
            descricao: h.descricao,
            xpRequerido: h.xpRequerido,
            custoEnergia: h.custoEnergia,
          })),
        },
      },
    });
    console.log(`🌟 Classe ${classe.nome} seedada!`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('✅ Seed das classes finalizado.');
  })
  .catch(async (e) => {
    console.error('❌ Erro na seed das classes:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
