### Diet API

#### Estrutura inicial 
- [x] Adicionar Typescript
- [x] Adicionar eslint 
- [x] Criar Prisma schema
- [x] Criar o Docker-compose
- [x] Connecter o prisma com o postgresql

#### Prisma Schema
  ##### User
    - Nome
    - Id
    - Está relacionado com varias Meal
  
  ##### Meal
    - Id
    - Nome
    - Description
    - Consume_date
    - In Diet
    - Está relacionado com um User

  Tipo de Relacionamento **one-to-many**
    User -> Meals

#### Casos de usos
- [x] Deve ser capaz de criar um usuário
- [x] O usuário deve ser capaz de registrar uma meal
- [x] O usuário deve ser capaz de editar uma meal especifica
- [x] O usuário deve ser capaz de deletar uma meal especifica
- [x] O usuário deve ser capaz de listar todas as suas meals registradas
- [x] O usuário deve ser capaz de listar um meal especifica
- [x] O usuário deve ser capaz de recuperar suas métricas
- [ ] O usuário deve ser capaz de se autenticar

#### Requisitos não funcionais
- [ ] para criar, editar , deletar e listar as meals o usuário deve está logado.