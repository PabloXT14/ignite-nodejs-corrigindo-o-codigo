# Projeto Corrigindo o Código
* Esta é uma aplicação NodeJS que realiza o CRUD (Create, Read, Update, Delete) de repositórios de projetos. Além disso, é possível dar likes em repositórios cadastrados, aumentando a quantidade de likes em 1 a cada vez que a rota é chamada

* O objetivo principail foi corrigir erros na criação das rota da aplicação.

* Contudo, este é um projeto desenvolvido como Desafio do curso Ignite NodeJS da [Rocketseat](https://www.rocketseat.com.br/).

* Caso goste do projeto marque a estrelinha⭐ para me ajudar 👍 e me siga para ver outros projetos que postar

## 🚀 Technologies
✔ [NodeJS](https://nodejs.org/en/)
<br>
✔ [JavaScript](https://www.javascript.com/)
<br>
✔ [Library Express](https://expressjs.com/)
<br>
✔ [Package Nodemon](https://www.npmjs.com/package/nodemon)
<br>
✔ [Package uuid](https://www.npmjs.com/package/uuid)
<br>
✔ [VS Code](https://code.visualstudio.com/)


## ⚙ Settings
* Segue os comandos para baixar e executar o projeto na sua máquina:
    - `git clone` + `URL do Projeto`: clonar este repositório
    - `cd Pasta_do_Projeto`: acessa a pasta do projeto no terminal
    - `yarn`: para baixar as dependências do projeto
    - `yarn dev`:
        * Executa/Roda o servidor da aplicação.
        * Abra http://localhost:3333 para ver o servidor rodando.
        * O servidor será recarregado se você fizer edições no código, e se tiver algum erro será mostrado.
        > 🚨 Dica
        > Você pode utilizar o [Insômnia](https://insomnia.rest/download) para testar as rotas da aplicação.
    - `yarn test`: para rodar os arquivos de teste da aplicação.


## Routes

### /repositories(GET)
* Descrição: retornar uma lista contendo todos os repositórios cadastrados.
* Parâmetros: nenhum parâmetro.

### /repositories(POST)
* Descrição: rota para cadastrar um novo repositório.
* Parâmetros:
    - `title`(string): pelo body da requisição
    - `url`(string): pelo body da requisição
    - `techs`(Array<strings>): pelo body da requisição

### /repositories/:id(PUT)
* Descrição: rota para atualizar dados de um repositório existente.
* Parâmetros:
    - `id`(string): pela rota da requisição
    - `title`(string): pelo body da requisição (opcional)
    - `url`(string): pelo body da requisição (opcional)
    - `techs`(Array<strings>): pelo body da requisição (opcional)

### /repositories/:id(DELETE)
* Descrição: rota para deletar um repositório existente.
* Parâmetros:
    - `id`(string): pela rota da requisição

### /repositories/:id/like(POST)
* Descrição: rota para dar like em um repositório existente.
* Parâmetros:
    - `id`(string): pela rota da requisição


## ✍ Author
<img alt="PabloXT14" title="PabloXT14" src="https://avatars.githubusercontent.com/u/71723595?s=400&u=f7a1ec0c2e1f7cd1acf79f61043dbc75b1079de6&v=4" width="100">
<p>
    Made with 💜 by PabloXT14
</p>
<p align="left">
    <a href="https://www.linkedin.com/in/pabloalan/" target="_blank">
        <img align="center" src="https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Pablo Alan" />
    </a>
    <a href="mailto:pabloxt14@gmail.com" target="_blank">
        <img align="center" src="https://img.shields.io/badge/Gmail-FF0000?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Pablo Alan" />
    </a>
</p>