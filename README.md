# adoption_dog_website

## Model Creation

1. The new model creation can use the command line `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string` to create new model
2. `npx sequelize-cli db:migrate` to migrate the database

## Migration Creation

1. Edit migration can use the command line `npx sequelize-cli migration:create --name modify`
2. To write the migration file can find in https://sequelize.org/master/manual/migrations.html

## Creating the first Seed

1. Create seed file `npx sequelize-cli seed:generate --name demo-user`
2. Run seeds `npx sequelize-cli db:seed:all`
3. To write the migration file can find in https://sequelize.org/master/manual/migrations.html
