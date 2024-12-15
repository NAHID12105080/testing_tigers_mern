# docker-compose up -d
# echo ' - waiting for db to be ready...'
# ./scripts/wait-for-it.sh "postgresql://postgres:postgres@localhost:5435/postgres" --echo ' - Database is ready'
# npx prisma migrate dev --name init
# npm run test
# docker-compose down


# Start Docker services in detached mode
docker-compose up -d

# Wait for the database to be ready
echo " - Waiting for the database to be ready..."
./scripts/wait-for-it.sh localhost:5433 -- echo " - Database is ready"

# Apply Prisma migrations to set up the database schema
npx prisma migrate dev --name init

# Run tests
npm run test

# Stop and remove Docker services
docker-compose down


