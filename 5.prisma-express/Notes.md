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

# Mocking dependencies

- wehn writing unit tests, u mock out all external service calls.
- This means you test the core of your logic and assume the database calls would succeed.
- this is done so tests can run without starting a database/external services

# Mocking

-Mocking the behavious of a file/class/variable when tests are running

### creating a mock

-

### Deep mocking

- Another way to mock variables is to let `vitest` figure out the types and mock out all the attributes of the object being mocked

- for example, the `prismaClient` object has a lot of functions-

```bash
console.log(Object.keys(primaryClient))
```

## Deep mocking in vitest

- install vitest-mock-extended

```bash
npm i -D vitest-mock-extended
```

- create `__mocks__/db.ts`

```javascript
import {PrismaClient} from '@prisma/client'
import {beforeEach} from 'vitest'
import {mockDeep,mockReset} from 'vitest-mock-extended'

export const prismaClient= mockDeep<PrismaClient>()
```

- Remove the mock we added in `index.test.ts` , simply add a `vi.mock("../db")`;

- run the tests

```bash
npm run test
```

## mocking return values

- u can mock the values returned from a `mock` by using `mockResolvedValue`
- Update `index.test.ts`

```bash
import {prismaClient} from '../__mocks__/db'

prismaClient.sum.create.mockResolvedValue({
    id:1,
    a:1,
    b:1,
    result:3
})
```
