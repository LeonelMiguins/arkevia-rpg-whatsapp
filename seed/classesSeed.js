import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const classes = [
  {
    id: 'guerreiro',
    nome: 'Guerreiro',
    descricao: 'Especialista em combate corpo a corpo com força bruta.',
    habilidades: [
      {
        id: 'golpe_furioso',
        nome: 'Golpe Furioso',
        descricao: 'Causa 150% do ataque em dano físico.',
        xpRequerido: 0,
        custoEnergia: 10,
      },
      {
        id: 'defesa_de_ferro',
        nome: 'Defesa de Ferro',
        descricao: 'Aumenta sua defesa em +10 por 3 turnos.',
        xpRequerido: 100,
        custoEnergia: 8,
      },
      {
        id: 'investida_brutal',
        nome: 'Investida Brutal',
        descricao: 'Ataca e empurra o inimigo, chance de atordoar.',
        xpRequerido: 300,
        custoEnergia: 15,
      },
      {
        id: 'resistencia_total',
        nome: 'Resistência Total',
        descricao: 'Reduz todo dano recebido em 20% por 2 turnos.',
        xpRequerido: 600,
        custoEnergia: 12,
      },
      {
        id: 'colera_do_guerreiro',
        nome: 'Cólera do Guerreiro',
        descricao: 'Aumenta seu ataque em 50% por 1 turno.',
        xpRequerido: 1000,
        custoEnergia: 18,
      },
    ],
  },
  {
    id: 'mago',
    nome: 'Mago',
    descricao: 'Manipulador de energias arcanas, especialista em dano mágico.',
    habilidades: [
      {
        id: 'bola_de_fogo',
        nome: 'Bola de Fogo',
        descricao: 'Lança uma bola de fogo causando dano mágico.',
        xpRequerido: 0,
        custoEnergia: 12,
      },
      {
        id: 'escudo_arcano',
        nome: 'Escudo Arcano',
        descricao: 'Cria uma barreira que absorve dano mágico.',
        xpRequerido: 100,
        custoEnergia: 10,
      },
      {
        id: 'raio_concentrado',
        nome: 'Raio Concentrado',
        descricao: 'Ataca um único inimigo com alto dano mágico.',
        xpRequerido: 300,
        custoEnergia: 16,
      },
      {
        id: 'teleporte_rapido',
        nome: 'Teleporte Rápido',
        descricao: 'Evita qualquer ataque no próximo turno.',
        xpRequerido: 600,
        custoEnergia: 9,
      },
      {
        id: 'tempestade_eterna',
        nome: 'Tempestade Eterna',
        descricao: 'Chuva mágica que atinge todos os inimigos.',
        xpRequerido: 1000,
        custoEnergia: 25,
      },
    ],
  },
  {
    id: 'arqueiro',
    nome: 'Arqueiro',
    descricao: 'Especialista em ataques à distância e precisão mortal.',
    habilidades: [
      {
        id: 'flecha_precisa',
        nome: 'Flecha Precisa',
        descricao: 'Ataque certeiro com chance de crítico aumentada.',
        xpRequerido: 0,
        custoEnergia: 9,
      },
      {
        id: 'chuva_de_flechas',
        nome: 'Chuva de Flechas',
        descricao: 'Ataca todos os inimigos próximos.',
        xpRequerido: 100,
        custoEnergia: 14,
      },
      {
        id: 'flecha_envenenada',
        nome: 'Flecha Envenenada',
        descricao: 'Dano contínuo por veneno.',
        xpRequerido: 300,
        custoEnergia: 11,
      },
      {
        id: 'visao_de_aguila',
        nome: 'Visão de Águia',
        descricao: 'Aumenta esquiva e crítico por 3 turnos.',
        xpRequerido: 600,
        custoEnergia: 10,
      },
      {
        id: 'tiro_mortal',
        nome: 'Tiro Mortal',
        descricao: 'Disparo com dano massivo. Chance de eliminar instantaneamente alvos fracos.',
        xpRequerido: 1000,
        custoEnergia: 20,
      },
    ],
  },
  {
    id: 'paladino',
    nome: 'Paladino',
    descricao: 'Guerreiro sagrado, equilíbrio entre ataque e cura.',
    habilidades: [
      {
        id: 'golpe_sagrado',
        nome: 'Golpe Sagrado',
        descricao: 'Dano extra contra criaturas das trevas.',
        xpRequerido: 0,
        custoEnergia: 10,
      },
      {
        id: 'cura_divina',
        nome: 'Cura Divina',
        descricao: 'Cura a si mesmo ou um aliado.',
        xpRequerido: 100,
        custoEnergia: 12,
      },
      {
        id: 'escudo_da_fe',
        nome: 'Escudo da Fé',
        descricao: 'Reduz 50% do dano recebido por 1 turno.',
        xpRequerido: 300,
        custoEnergia: 10,
      },
      {
        id: 'golpe_da_luz',
        nome: 'Golpe da Luz',
        descricao: 'Ataque mágico de luz.',
        xpRequerido: 600,
        custoEnergia: 13,
      },
      {
        id: 'bencao_final',
        nome: 'Bênção Final',
        descricao: 'Revive um aliado ou cura totalmente.',
        xpRequerido: 1000,
        custoEnergia: 20,
      },
    ],
  },
  {
    id: 'ladino',
    nome: 'Ladino',
    descricao: 'Mestre da furtividade, velocidade e dano crítico.',
    habilidades: [
      {
        id: 'golpe_rapido',
        nome: 'Golpe Rápido',
        descricao: 'Ataca primeiro neste turno.',
        xpRequerido: 0,
        custoEnergia: 8,
      },
      {
        id: 'invisibilidade',
        nome: 'Invisibilidade',
        descricao: 'Fica invisível por 1 turno.',
        xpRequerido: 100,
        custoEnergia: 10,
      },
      {
        id: 'ataque_sombra',
        nome: 'Ataque das Sombras',
        descricao: 'Dano dobrado ao sair da invisibilidade.',
        xpRequerido: 300,
        custoEnergia: 12,
      },
      {
        id: 'roubo',
        nome: 'Roubo',
        descricao: 'Rouba moedas ou item do inimigo.',
        xpRequerido: 600,
        custoEnergia: 7,
      },
      {
        id: 'critico_certeiro',
        nome: 'Crítico Certeiro',
        descricao: 'Próximo ataque tem 100% de chance de crítico.',
        xpRequerido: 1000,
        custoEnergia: 15,
      },
    ],
  },
  {
    id: 'necromante',
    nome: 'Necromante',
    descricao: 'Controlador de mortos-vivos e magia sombria.',
    habilidades: [
      {
        id: 'toque_mortal',
        nome: 'Toque Mortal',
        descricao: 'Dano sombrio contínuo.',
        xpRequerido: 0,
        custoEnergia: 10,
      },
      {
        id: 'levantar_morto',
        nome: 'Levantar Morto',
        descricao: 'Invoca um esqueleto aliado.',
        xpRequerido: 100,
        custoEnergia: 14,
      },
      {
        id: 'corrente_da_alma',
        nome: 'Corrente da Alma',
        descricao: 'Divide o dano recebido com aliado morto-vivo.',
        xpRequerido: 300,
        custoEnergia: 10,
      },
      {
        id: 'nuvem_maligna',
        nome: 'Nuvem Maligna',
        descricao: 'Envenena todos os inimigos por 2 turnos.',
        xpRequerido: 600,
        custoEnergia: 13,
      },
      {
        id: 'mestre_das_trevas',
        nome: 'Mestre das Trevas',
        descricao: 'Aumenta dano sombrio em 50% por 3 turnos.',
        xpRequerido: 1000,
        custoEnergia: 20,
      },
    ],
  },
  {
    id: 'monge',
    nome: 'Monge',
    descricao: 'Lutador disciplinado que usa o corpo como arma.',
    habilidades: [
      {
        id: 'soco_duplo',
        nome: 'Soco Duplo',
        descricao: 'Dois ataques rápidos consecutivos.',
        xpRequerido: 0,
        custoEnergia: 8,
      },
      {
        id: 'foco_interno',
        nome: 'Foco Interno',
        descricao: 'Recupera 10 de energia.',
        xpRequerido: 100,
        custoEnergia: 0,
      },
      {
        id: 'chute_giratorio',
        nome: 'Chute Giratório',
        descricao: 'Ataque em área com chance de atordoar.',
        xpRequerido: 300,
        custoEnergia: 13,
      },
      {
        id: 'pele_de_aço',
        nome: 'Pele de Aço',
        descricao: 'Reduz o dano físico por 2 turnos.',
        xpRequerido: 600,
        custoEnergia: 10,
      },
      {
        id: 'golpe_perfeito',
        nome: 'Golpe Perfeito',
        descricao: 'Ataque certeiro com dano crítico garantido.',
        xpRequerido: 1000,
        custoEnergia: 15,
      },
    ],
  },
  {
    id: 'druida',
    nome: 'Druida',
    descricao: 'Guardião da natureza, domina magias de cura e veneno.',
    habilidades: [
      {
        id: 'espinhos_terra',
        nome: 'Espinhos da Terra',
        descricao: 'Lança espinhos do chão para causar dano.',
        xpRequerido: 0,
        custoEnergia: 9,
      },
      {
        id: 'cura_natural',
        nome: 'Cura Natural',
        descricao: 'Regenera vida ao longo de 3 turnos.',
        xpRequerido: 100,
        custoEnergia: 11,
      },
      {
        id: 'forma_urso',
        nome: 'Forma de Urso',
        descricao: 'Aumenta força e defesa temporariamente.',
        xpRequerido: 300,
        custoEnergia: 15,
      },
      {
        id: 'raizes_paralisantes',
        nome: 'Raízes Paralisantes',
        descricao: 'Prende o inimigo impedindo de agir.',
        xpRequerido: 600,
        custoEnergia: 13,
      },
      {
        id: 'ciclo_da_vida',
        nome: 'Ciclo da Vida',
        descricao: 'Cura aliados e envenena inimigos ao mesmo tempo.',
        xpRequerido: 1000,
        custoEnergia: 20,
      },
    ],
  },
  {
    id: 'cavaleiro',
    nome: 'Cavaleiro',
    descricao: 'Protetor com armadura pesada e lealdade inabalável.',
    habilidades: [
      {
        id: 'golpe_escudo',
        nome: 'Golpe com Escudo',
        descricao: 'Dano moderado e chance de atordoar.',
        xpRequerido: 0,
        custoEnergia: 10,
      },
      {
        id: 'proteger_aliado',
        nome: 'Proteger Aliado',
        descricao: 'Recebe o dano no lugar de um aliado por 1 turno.',
        xpRequerido: 100,
        custoEnergia: 12,
      },
      {
        id: 'postura_defensiva',
        nome: 'Postura Defensiva',
        descricao: 'Reduz todo dano recebido pela equipe por 1 turno.',
        xpRequerido: 300,
        custoEnergia: 15,
      },
      {
        id: 'corte_heroico',
        nome: 'Corte Heroico',
        descricao: 'Ataque poderoso que ignora parte da defesa inimiga.',
        xpRequerido: 600,
        custoEnergia: 14,
      },
      {
        id: 'juramento_de_gloria',
        nome: 'Juramento de Glória',
        descricao: 'Aumenta ataque e defesa de todos os aliados por 2 turnos.',
        xpRequerido: 1000,
        custoEnergia: 20,
      },
    ],
  },
  {
    id: 'elementalista',
    nome: 'Elementalista',
    descricao: 'Dobrador dos elementos: fogo, gelo, raio e terra.',
    habilidades: [
      {
        id: 'chama_viva',
        nome: 'Chama Viva',
        descricao: 'Causa dano contínuo de fogo.',
        xpRequerido: 0,
        custoEnergia: 11,
      },
      {
        id: 'escudo_de_gelo',
        nome: 'Escudo de Gelo',
        descricao: 'Reduz dano e pode congelar quem atacar.',
        xpRequerido: 100,
        custoEnergia: 12,
      },
      {
        id: 'raio_cadeia',
        nome: 'Raio em Cadeia',
        descricao: 'Ataca até 3 inimigos com eletricidade.',
        xpRequerido: 300,
        custoEnergia: 15,
      },
      {
        id: 'terra_viva',
        nome: 'Terra Viva',
        descricao: 'Recupera energia e vida ao usuário.',
        xpRequerido: 600,
        custoEnergia: 10,
      },
      {
        id: 'furia_elemental',
        nome: 'Fúria Elemental',
        descricao: 'Libera os quatro elementos de uma vez.',
        xpRequerido: 1000,
        custoEnergia: 25,
      },
    ],
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
