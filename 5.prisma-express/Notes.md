# prisma-express-unit-testing

1st copy the previous folder and renamed it to

```bash
 cp -r 4.vitest-express 5.prisma-express
```

### Adding a database

- there are 2 approaches to take while adding external services to u r backend
- 1. mock out the external service calls(unit tests)
- 2. start the external service when the tests are running and stop them after the tests end(integration/ e2e testing)
- Add prisma

```bash
npm i prisma
npx prisma init
```

- add a basic schema in `schema.prisma`

- run to create the prisma client, don't need to migrate the models as we are just mocking not adding actual db

```bash
npx prisma generate
```
