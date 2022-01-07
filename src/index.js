const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];// DB fake

/* ===== MIDDLEWARES ===== */


/* ===== ROTAS ===== */

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  // Inserindo repositório no DB fake
  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;// objeto com dados atualizados para o repositorio

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  //Verificando se repo existe
  if (repositoryIndex === -1) {
    return response.status(404).json({ error: "Repository not found" });
  }

  // Formatando novos valores no repo
  const updatedRepository = {
    ...repositories[repositoryIndex],
    title: title != undefined ? title : updatedRepository.title,
    url: url != undefined ? url : updatedRepository.url,
    techs: techs != undefined ? techs : updatedRepository.techs
  };

  // Inserindo repo atualizado no DB fake
  repositories[repositoryIndex] = updatedRepository;

  return response.json(updatedRepository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex > 0) {
    return response.status(404).json({ error: "Repository not found" });
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }

  const likes = ++repositories[repositoryIndex].likes;

  return response.json('likes');
});

module.exports = app;
