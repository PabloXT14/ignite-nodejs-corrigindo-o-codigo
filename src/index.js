const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];// DB fake


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
  const updatedDatas = request.body;// objeto com dados atualizados para o repositorio

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  //Verificando se repo existe
  if (repositoryIndex === -1) {
    return response.status(404).json({ error: "Repository not found" });
  }

  // Formatando novos valores no repo
  const updatedRepository = {
    ...repositories[repositoryIndex],
    title: updatedDatas.title || repositories[repositoryIndex].title,
    url: updatedDatas.url || repositories[repositoryIndex].url,
    techs: updatedDatas.techs || repositories[repositoryIndex].techs
  };

  // Inserindo repo atualizado no DB fake
  repositories[repositoryIndex] = updatedRepository;

  return response.json(updatedRepository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;


  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex === -1) {
    return response.status(404).json({ error: "Repository not found" });
  }

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex === -1) {
    return response.status(404).json({ error: "Repository not found" });
  }

  // Atualizando likes do repo
  const likes = ++repositories[repositoryIndex].likes;

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
