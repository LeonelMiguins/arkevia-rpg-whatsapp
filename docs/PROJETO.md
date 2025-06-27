## Organização e estrutura projeto:


```
Arkevia-rpg-whatsapp/
├── docs/ ← Arquivos .MD com informações
├── htm/
│   └── index.html           ← Site do jogo
│
│
├── node_modules/
├── config/
│   └── config.js               ← Configurações do bot (nome, prefixo, etc)
│
├── sessions/                   ← Armazena a autenticação da sessão do Baileys
│
├── commands/
│   ├── status.js               ← Exibe status do jogador
│   ├── batalhar.js            ← Simula batalha
│   ├── inventario.js          ← Mostra inventário
│   └── ajuda.js               ← Lista de comandos
│
├── database/
│   └── database.db            ← Banco de dados
│
├── functions/
│   ├── commandHandler.js       ← Detecta e executa comandos
│   ├── playerManager.js        ← Lê, grava e cria jogadores
│   └── utils.js                ← Funções auxiliares (tempo, random, etc)
│
├── server.js                    ← Arquivo principal que inicia o bot
├── package.json
└── README.md
```


## Sobre as BRANCHS:

###  2. Ramo Principal (main/master)

✅ Protegido contra push direto.

✅ Toda mudança só entra via Pull Request.

✅ Requer aprovação

### Estratégia de Branches

```bash

main              ← código estável (produção)
│
├── dev           ← onde todos trabalham juntos
│   ├── feature/nome-da-feature
│   ├── bugfix/ajuste-x
│   └── refactor/alguma-mudança
```