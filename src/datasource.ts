import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'dpg-d00jd1hr0fns73eboad0-a.frankfurt-postgres.render.com',
    password: 'vu8oHx3vp0RAjv1JfPXok201ICGAnYOd', // Mot de passe fourni par Render
    database: 'dbcooksmart', // Nom de la base de données
    port: 5432,
    ssl: {
        rejectUnauthorized: false, // Nécessaire pour Render
    },
    username: 'root',
    entities: ['dist/**/*.entity.js'], // Utilisez uniquement les fichiers .js après compilation
    migrations: ['dist/migrations/**/*.js'], // Utilisez uniquement les fichiers .js après compilation
    migrationsTableName: "custom_migration_table",
});