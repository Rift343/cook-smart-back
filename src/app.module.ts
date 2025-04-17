import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbAccessController } from './db_access/db_access.controller';
import { RecetteModule } from './recette/recette.module';

@Module({
  imports: [
    
    RecetteModule
  ],
  controllers: [AppController, DbAccessController],
  providers: [AppService],
})
export class AppModule {}
