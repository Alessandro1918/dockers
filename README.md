# dockers

## 🚀 Projeto
Exemplos de projetos rodando em containers Docker.

<div align="center">
  <img width="50%" src="/github_assets/docker_logo.png" alt="docker logo"/>
</div>

## 🛠️ Tecnologias
- [Docker](https://www.docker.com)
- [Node.js](https://nodejs.org/en)
- [ExpressJS](https://expressjs.com)
- [Python](https://www.python.org)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/#)
- [Postgres](https://www.postgresql.org)
- [MySql](https://www.mysql.com)
- [Redis](https://redis.io)

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
```

- Run @ localhost:
```bash
  $ npm install                #download dependencies
  $ npx prisma migrate dev     #if using prisma: init db file and create tables 
  $ npm run dev                #if javascript: start the project by running the package.json script
  $ python src/server.py       #if python: start the project by running the src/server.py file
```

- Run @ Docker (with "docker-compose.yaml"):
```bash
  $ docker compose up          #build the image and runs the container
  $ ctrl + C                   #stop the container
  $ docker compose down        #delete the container
```

- Run @ Docker (with "Dockerfile"):
```bash
  $ docker build -t name-of-docker-image .     #build the image
  $ docker run [flags] name-of-docker-image    #run the container
                                               #flags:
                                               # -it: run in the foreground
                                               # -d: run in the background
                                               # -p 4000:4000: map port used by the host -> port used by the container
                                               # -env-file .env: get environment vars from the ".env" file
  $ ctrl + C                                   #stop the foreground container
  $ docker stop name-of-docker-image           #stop the background container
```

## ⭐ Like, Subscribe, Follow!
Curtiu o projeto? Marque esse repositório com uma Estrela ⭐!
