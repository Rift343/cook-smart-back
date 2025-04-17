import { Injectable } from '@nestjs/common';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';

@Injectable()
export class RecetteService {
  recettes: any;
  create(createRecetteDto: CreateRecetteDto) {
    // Assuming you are using a database like TypeORM or Prisma, here's an example using a simple in-memory array for demonstration purposes.

    const newRecette = {
      id: Date.now(), // Generate a unique ID (replace with DB-generated ID if using a database)
      ...createRecetteDto,
    };

    // Simulate saving to a database or in-memory storage
    // Replace this with actual database logic
    this.recettes = this.recettes || [];
    this.recettes.push(newRecette);

    return newRecette;


  }

  findAll() {
    return `This action returns all recette`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recette`;
  }

  update(id: number, updateRecetteDto: UpdateRecetteDto) {
    return `This action updates a #${id} recette`;
  }

  remove(id: number) {
    return `This action removes a #${id} recette`;
  }
}
