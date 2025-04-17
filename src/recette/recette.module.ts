import { Module } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { RecetteController } from './recette.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'dpg-d00jd1hr0fns73eboad0-a.frankfurt-postgres.render.com',
    password: 'vu8oHx3vp0RAjv1JfPXok201ICGAnYOd', // Mot de passe fourni par Render
    database: 'dbcooksmart', // Nom de la base de données
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
