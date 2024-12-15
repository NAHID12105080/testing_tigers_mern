# integration testing

> copy the previous folder and rename it
> now start a postgres db in docker

### manual integration testing

```bash
docker run -p 5433:5432 -e POSTGRES_PASSWORD=SECRETPASS -d postgres
```

- to take down the docker instance

```bash
docker ps
docker kill container_id
```

## integration test using vitest

```bash
npm i vitest
```

> add a docker-compose with necessary services

```yaml
version: "3.8"
services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    ports:
      - "5434:5432"
```

- create src/test/helpers/reset-db.ts

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async () => {
  await prisma.$transaction([prisma.request.deleteMany()]);
};
```

- create a new script `scripts/run-integration.sh`

```bash
docker-compose up -d
```

- bring in `wait-for-it.sh` locally in `scripts/wait-for-it.sh`

```bash
curl -s https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -o scripts/wait-for-it.sh
```

- make the scripts executable

```bash
chmod +x scripts
```

\*\*
