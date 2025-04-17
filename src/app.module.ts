import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbAccessController } from './db_access/db_access.controller';
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
      username : 'root'})
  ],
  controllers: [AppController, DbAccessController],
  providers: [AppService],
})
export class AppModule {}
