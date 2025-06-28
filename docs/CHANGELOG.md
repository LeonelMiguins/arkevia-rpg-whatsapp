## 28/06/25 12:50 pm - mk/refactor/modularizar-seeds

- Organização dos dados: Separei as habilidades em arquivos individuais dentro da pasta `seed/data/habilidades/` pra deixar o projeto mais modular e fácil de manter.

- Import/export ajeitado: Padronizei os imports dos arquivos `localTest.js`, `classesSeed.js` usando `require` (CommonJS) para evitar conflitos de módulo e problemas com ESModules, já que o projeto não está usando "type": "module".

- Comentários e estrutura: Atualizei os arquivos `PROJETO.md` e `CHANGELOG.md`

---

## 28/06/25 02:00 am - Leonel Miguins - Criação da base do jogo

* Criação da base do jogo ``game/arkevia-rpg.js``
* Remoção "type": "module" do ``package.json``. Eu converti em CommonJS ``handlers/onMessage.js``, utilizando `require()` para importar módulos e `__dirname` para resolver caminhos de arquivos.
* Criação da função/comando  ``/ping`` em ``commands`` para verificar se o bot está rodando os comandos.
* Adicionado a pasta ``/auth`` no arquivo ``.gitignore``.
* Atualização da tree do projeto no documento PROJETO.md

> _28/06/25 09:30 am - commit do mk na branch `leo`, `Criação da base do jogo`_

- Nova dependencia instalada "dotenv": "^17.0.0" para carregar o .env já que estamos usando CommonJS
- O arquivo `seed.js` agora usa require, seguindo o padrão do CommonJS
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
