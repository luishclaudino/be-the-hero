Instalar Node.js ==> https://nodejs.org/en/download/

// Rota / Recurso
/**
    Métodos HTTP :
    Get: Buscar uma informação do back-end
    Post: Criar uma informação no back-end
    Put: Alterar uma informação no back-end
    Delete: Deletar uma informação no back-end

  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" Ex: ?name=Luis
  * 
  * Route Params: Parâmetros utilizados para identificar recursos
  * 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


criar pasta backend

npm init -y

Dependência para serem instaladas ao fazer o backend

npm install express => instalar o módulo de backend

npx create-react-app frontend

npm install nodemon -D => apenas para desenvolvimento

Entidades
- ONG
- Casos

Funcionalidades
- Login de ONG
- Cadastro de ONG
- Logout de ONG
- Cadastrar novos casos
- Deletar novos casos
- Listar todos os casos
- Entrar em contato com a ONG

Instalar o knex
npm install knex

npm install sqlite3 => o banco de dados para utilizar no nex

npx knex init => cria o arquivo de configurações do knex

npx knex migrate:make create_ongs => cria o arquivo de migrations do knex (Como se fosse um Log) para criar a tabela das ongs

npx knex migrate:latest => executa todos os ups na migrations

npx knex migrate:make create_incidents => cria a tabela de casos

npx knex migrate:rollback => desfaz a ultima migrate que você fez

npx knex migrate:status => vê todas as migrations executadas

instalar o cors => npm install cors

npm install react-icons => baixa a biblioteca com vários icons

npm install react-router-dom => cria rotas para as páginas

npm install axios => Instala um cliente HTTP que faz chamadas para a API do Backend

instalar o expo => npm install -g expo-cli

expo init mobile => cria um projeto expo com nome mobile

npm install @react-navigation/stack

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack => instalar as stacks de navegação

expo install expo-constants

expo install expo-mail-composer => biblioteca de enviar email

npm install intl => fazer na pasta mobile para suprir a necessidade de usar o intl igual na web