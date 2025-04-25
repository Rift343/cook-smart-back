import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';

@Controller('recette')
export class RecetteController {
  constructor(private readonly recetteService: RecetteService) {}
  

  @Get('getAll')
  getAll(){
    console.log("getAllRecette");
    return this.recetteService.getAllRecette();
  }

  @Get('getById/:id')
  getById(@Param('id') id: number){
    console.log("getById");
    return this.recetteService.getRecetteById(id);
  }

  @Get('getRecetteForIngredient/:ingredient')
  getRecetteForIngredients(@Param('ingredient') ingredient: string){
    console.log("getRecetteForIngredient");
    return this.recetteService.getRecetteForIngredient(ingredient);
  }

  @Post()
  create(@Body() createRecetteDto: CreateRecetteDto) {
    return this.recetteService.create(createRecetteDto);
  }

  @Get()
  findAll() {
    return this.recetteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recetteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecetteDto: UpdateRecetteDto) {
    return this.recetteService.update(+id, updateRecetteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recetteService.remove(+id);
  }
}
