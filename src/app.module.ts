import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetteModule } from './recette/recette.module';

@Module({
  imports: [
    
    RecetteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
