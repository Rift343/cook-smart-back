import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'dpg-d0lfsjjuibrs73a9i5t0-a.frankfurt-postgres.render.com',
    password: '6Q1i162772P9HMMI9UP9qKqVxptpfivI', // Mot de passe fourni par Render
    database: 'dbcooksmart_ndc3', // Nom de la base de données
    port: 5432,
    ssl: {
        rejectUnauthorized: false, // Nécessaire pour Render
    },
    username: 'root',
    entities: ['dist/**/*.entity.js'], // Utilisez uniquement les fichiers .js après compilation
    migrations: ['dist/migrations/**/*.js'], // Utilisez uniquement les fichiers .js après compilation
    migrationsTableName: "custom_migration_table",
});