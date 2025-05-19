import { Module } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { RecetteController } from './recette.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'dpg-d0lfsjjuibrs73a9i5t0-a.frankfurt-postgres.render.com',
    password: '6Q1i162772P9HMMI9UP9qKqVxptpfivI', // Mot de passe fourni par Render
    database: 'dbcooksmart_ndc3', // Nom de la base de données
    port: 5432,
    ssl: {
      rejectUnauthorized: false, // Nécessaire pour Render
    },
    username : 'root',
    entities: ['dist/**/*.entity{.ts,.js}'],
  }),],
  controllers: [RecetteController],
  providers: [RecetteService],
})
export class RecetteModule {}
