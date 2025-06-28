import readline from 'readline';
import { exec } from 'child_process';
import { promisify } from 'util';

const run = promisify(exec);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
📦 Prisma Tools - Escolha uma opção:

[1] Criar migration
[2] Resetar banco (CUIDADO)
[3] Rodar seed
[4] Gerar Prisma Client
[5] Abrir Prisma Studio
[0] Sair

Digite o número da opção: `;

rl.question(menu, async (res) => {
  switch (res.trim()) {
    case '1':
      rl.question('Digite o nome da migration: ', async (nome) => {
        console.log(`🚀 Criando migration "${nome}"...`);
        await run(`npx prisma migrate dev --name ${nome}`);
        rl.close();
      });
      break;
    case '2':
      console.log('⚠️ Resetando banco...');
      await run(`npx prisma migrate reset --force`);
      rl.close();
      break;
    case '3':
      console.log('🌱 Rodando seed...');
      await run(`npm run seed`);
      rl.close();
      break;
    case '4':
      console.log('⚙️ Gerando Prisma Client...');
      await run(`npm run generate`);
      rl.close();
      break;
    case '5':
      console.log('🔍 Abrindo Prisma Studio...');
      await run(`npm run studio`);
      rl.close();
      break;
    case '0':
      console.log('👋 Saindo...');
      rl.close();
      break;
    default:
      console.log('❌ Opção inválida');
      rl.close();
  }
});