## 28/06/25 - Leonel Miguins - Criação da base do jogo

* Criação da base do jogo ``game/arkevia-rpg.js``
* Remoção "type": "module" do ``package.json``. Eu converti em CommonJS ``handlers/onMessage.js``, utilizando `require()` para importar módulos e `__dirname` para resolver caminhos de arquivos.
* Criação da função/comando  ``/ping`` em ``commands`` para verificar se o bot está rodando os comandos.
* Adicionado a pasta ``/auth`` no arquivo ``.gitignore``.
* Atualização da tree do projeto no documento PROJETO.md

### Dependêcias Atualizadas:

```json
  "dependencies": {
    "@prisma/client": "^6.10.1",
    "@whiskeysockets/baileys": "^6.7.18",
    "pino": "^9.7.0",
    "prisma": "^6.10.1",
    "qrcode-terminal": "^0.12.0"
  },
  ```


## 27/06/25 - mk/feat/estrutura-inicial-banco-de-dados

* Organização de algumas pastas pra servir o banco
* Modelos no Prisma pra Jogador, Classes e Habilidades, tudo amarradinho e pronto pra usar.
* Modelo Jogador agora tem nome, número de WhatsApp, email, XP, energia, HP, moedas e referência pra classe.
* Classes e habilidades organizadinhas.
* Configuração do Prisma com Postgres pro banco funcionar redondo.
* Migrations criadas do zero, pra deixar tudo no esquema.
* Seed pra já ter as classes e skills no banco, sem precisar criar na mão.
* Atualização da tree do projeto no documento PROJETO.md