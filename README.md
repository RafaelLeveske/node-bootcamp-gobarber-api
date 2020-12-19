
<h3 align="center">
  Sistema Anamnese PI Senac-DF API
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

</p>

## 📝 Conteúdo

- [Sobre](#about)
- [Inicializando a aplicação](#getting_started)
- [Uso](#usage)
- [Ferramentas](#built_using)
- [Autores](#authors)
- [Considerações finais](#acknowledgement)

---

## 🏁 Sobre <a name = "about"></a>

- Projeto desenvolvido com o propósito acadêmico de servir a aplicação (mobile/web) do projeto Sistema de Anamnese, referente ao Projeto Interdisciplinar 5 da faculdade Senac DF. Desenvolvida usando Typescript como linguagem de programação e utilizando Repository & Service Pattern na estrutura de arquivos, a parte de banco de dados, foi se usado TypeORM como ORM para controle de queryes e PostgresSQL como banco de dados. A API tem a função de manter o serviço de cadastro e marcação de consultas psicologicas, com os psicólogos das clínicas.

## 🏁 Inicializando a aplicação <a name = "getting_started"></a>

- A back end da aplicação foi desenvolvido em [Node](https://nodejs.org/en/) - JavaScript runtime environment.


### Pré-requisitos
- Editor de códigos como o [Visual Studio Code](https://code.visualstudio.com/download), interpretador JavaScript [NodeJS](https://nodejs.org/pt-br/download/) de preferência na versão LTS 12.8, uma GUI cliente de banco de dados Postgres como [Postbird](https://www.electronjs.org/apps/postbird), e uma GUI cliente REST para se testar as rotas da API como o [Insomnia](https://insomnia.rest/download/) ou [Postman](https://www.postman.com/downloads/), e um gerênciador de pacotes [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) ou o próprio NPM que já vem embutido no NodeJS.

### Instalação

Para inicializar a aplicação primeiro abra o arquivo no terminal ou prompt de comando e digite o comando abaixo para instalar todas as dependências da API. OBS: caso tenha instalado o gerênciador de pacotes [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable), escolha a primeira opção caso esteja usando NPM escolha a segunda opção.

```
yarn
```

ou

```
npm install
```


### Inicializando o projeto

Primeiro configure as configuações de ENV copiando o arquivo .env.example para apenas .env, caso for utilizar algum banco de dados diferente de Postgres, será preciso instalar o driver do mesmo.
O typeORM da suporte para os bancos de dados: MySql ou MariaDB, SQLite, Microsoft SQL Server e Oracle caso queira instalar algum desses drivers digite algum dos comandos abaixo:

```
yarn add mysql
```
ou
```
npm install mysql
```

```
yarn add sqlite3
```
ou
```
npm install sqlite3
```

```
yarn add mssql
```
ou
```
npm install mssql
```

```
yarn add oracledb
```
ou
```
npm install oracledb
```

Fazendo isso crie a database com o mesmo nome que você colocou no arquvivo .env, para que o banco de dados possa ser iniciado sem problemas.

Com todas as dependências instaladas e o arquivo .env configurado para inicializar o servidor da aplicação digite o comando abaixo no terminal do arquivo:

```
yarn dev:server
```
ou
```
npm run dev:server
```

## 🎈 Uso <a name="usage"></a>

Atualmente a aplicação conta apenas com as funções de marcar um horario especifico e cadastrar clientes.


## ⛏️ Ferramentas <a name = "built_using"></a>

- [Node](https://nodejs.org/en/) - JavaScript runtime environment.
- [Express](https://expressjs.com/pt-br/) - Framework web.

## ✍️ Autores <a name = "authors"></a>

- [@RafaelLeveske](https://github.com/RafaelLeveske)
- Valdisson Nunes
- Leandro Raineri

## 🎉 Considerações finais <a name = "acknowledgement"></a>

- Esse projeto foi desenvolvido com intuito acadêmico para desenvolvimento da aplicação Sistema Anamnese para o Projeto Interdisciplinar 5 da Faculdade de Técnologia Senac DF.

### Requisitos do projeto

# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
- Cada agendamento deve durar 1h exatamente;
- O usuário não pode agendar em um horário já ocupado;
