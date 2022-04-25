const express = require('express');
const {v4: uuidv4} = require('uuid');

const app = express()

app.use(express.json());

const respositories = [];


/* ===== MIDDLEWARES ===== */


/* ===== ROTAS ===== */

app.get('/repositories', (request, response) => {
  return response.status(200).json(respositories);
});

app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body;

  const newRepository = {
    id: uuidv4(),
    title,
    url,
    techs,
    likes: 0
  }

  respositories.push(newRepository);

  return response.status(201).json(newRepository);

});

app.put('/repositories/:id', (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoryIndex = respositories.findIndex(repository => repository.id === id);

  // Checando se repositorio existe
  if(repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }

  // Atualizando dados do repositorio
  const repository = { 
    ...respositories[repositoryIndex],
    title: title ? title : respositories[repositoryIndex].title,
    url: url ? url : respositories[repositoryIndex].url,
    techs: techs ? techs : respositories[repositoryIndex].techs
  };

  respositories[repositoryIndex] = repository;

  return response.status(201).json(repository);
});

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const repositoryIndex = respositories.findIndex(repository => repository.id === id)

  if(repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }

  respositories.splice(repositoryIndex, 1);

  return response.status(204).end();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = respositories.findIndex(respository => respository.id === id);

  if(repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }

  ++respositories[repositoryIndex].likes;
  const repositoryUpdated = respositories[repositoryIndex];

  return response.status(201).json(repositoryUpdated);
});

module.exports = app;