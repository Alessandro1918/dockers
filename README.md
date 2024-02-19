# dockers

## 🚀 Projeto
Exemplos de projetos rodando em containers Docker.


## 🛠️ Tecnologias
- [Docker](https://www.docker.com)
- [Node.js](https://nodejs.org/en)
- [ExpressJS](https://expressjs.com)
- [Postgres](https://www.postgresql.org)
- [MySql](https://www.mysql.com)

## 🗂️ Utilização

### 🐑🐑 Clonando o repositório:

```bash
  $ git clone url-do-projeto.git
```

### ▶️ Rodando o App:

```bash
  $ cd dockers                 #change to that directory
  $ cd name-of-docker-project  #change to that directory
  $ cp .env.example .env       #create the ".env" file like the ".env.example" file
  $ npm install                #download dependencies
```

- Run @ localhost:
```bash
  $ npm run start:dev          #start the project
```

- Run @ Docker (with "docker-compose.yml"):
```bash
  $ docker compose up          #build the image and runs the container
  $ ctrl + C                   #stop the container
  $ docker compose down        #delete the container
```

- Run @ Docker (with "Dockerfile"):
```bash
  $ docker build -t name-of-docker-image .             #build the image
  $ docker run -it -p 4000:4000 name-of-docker-image   #run the container - interactive
  $ docker run -d -p 4000:4000 name-of-docker-image    #run the container - detached
  $ ctrl + C                                           #stop the interactive container
  $ docker stop name-of-docker-image                   #stop the detached container
```

## ⭐ Like, Subscribe, Follow!
Curtiu o projeto? Marque esse repositório com uma Estrela ⭐!
