

## 28/06/25 17:40 pm - mk/refactor/habilidades-itens-estrutura

- Padronizei todos os arquivos em `/seed/data/habilidades/` para usar `module.exports = {…}` no final de cada arquivo (padrão CommonJS)
- Atualizei todos os arquivos em `/seed/data/habilidades/` para usar só `const` além de `export const` (padrão CommonJS)
- Padronizei todas as `const` para usar `camel_case` (ex: `habilidades_guerreiro`)
- Nova pasta `itens` em `seed/data`
- Todos os arquivos `.js` na pasta `itens` ja segue o padrão acima com `const`, `module.exports` e `camel_case`
- Novo `Model` no arquivo `schema.prisma` para cobrir os `itens`
- Novo arquivo na pasta `seed/` chamado de `itensSeed.js` para popular o banco com os `itens`
- Nova pasta `utils/` em `seed/` 
- Novo arquivo `loadAllItens.js` em `/seed/utils/`, esse arquivo é responsável por fazer o load de todos os `itens` em `itensSeed.js` para evitar encher `itensSeed.js` de imports e também evitar fazer uma `Array` enorme
- Movi o arquivo `seed.js` para a pasta `seed/utils/` para manter a organização
- Atualizei o `package.json` para usar o novo caminho do `seed.js`
- Atualizei o script `prisma-tools.js` para usar `require` seguindo o padrão do `CommonJS`
- Atualizei a tree no documento `PROJETO.md`
- Atualizei o documento `JOGO.md` para listar os itens disponíveis

## 28/06/25 02:00 am - Leonel Miguins - Criação da base do jogo

* Criação da base do jogo ``game/arkevia-rpg.js``
* Remoção "type": "module" do ``package.json``. Eu converti em CommonJS ``handlers/onMessage.js``, utilizando `require()` para importar módulos e `__dirname` para resolver caminhos de arquivos.
* Criação da função/comando  ``/ping`` em ``commands`` para verificar se o bot está rodando os comandos.
* Adicionado a pasta ``/auth`` no arquivo ``.gitignore``.
* Atualização da tree do projeto no documento PROJETO.md

> _28/06/25 09:30 am - commit do mk na branch `leo`, `Criação da base do jogo`_

- Nova dependencia instalada "dotenv": "^17.0.0" para carregar o .env já que estamos usando CommonJS
- Seeds agora usam require, seguindo o padrão do CommonJS
- Nova pasta tests na raiz com o arquivo localTest.js para fazer testes sem ter que rodar o bot
- Atualizei a tree do projeto no PROJETO.md
- Comentei o arquivo localTest.js com explicações, tudo bonitinho

---

## 27/06/25 22:40 pm - mk/feat/estrutura-inicial-banco-de-dados

* Organização de algumas pastas pra servir o banco
* Modelos no Prisma pra Jogador, Classes e Habilidades, tudo amarradinho e pronto pra usar.
* Modelo Jogador agora tem nome, número de WhatsApp, email, XP, energia, HP, moedas e referência pra classe.
* Classes e habilidades organizadinhas.
* Configuração do Prisma com Postgres pro banco funcionar redondo.
* Migrations criadas do zero, pra deixar tudo no esquema.
* Seed pra já ter as classes e skills no banco, sem precisar criar na mão.
* Atualização da tree do projeto no documento PROJETO.md
