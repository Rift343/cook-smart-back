import { Injectable } from '@nestjs/common';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';
import { DataSource } from 'typeorm';
import { recette } from './entities/recette.entity';
import { ingredient } from './entities/ingredient.entity';
import { outils } from './entities/outils.entity';
import { ingredient_pour_recette } from './entities/ingredient_pour_recette.entity';
import { outils_pour_recette } from './entities/outils_pour_recette.entity';
import * as fs from 'fs';
import * as path from 'path';
import { console } from 'inspector';

@Injectable()
export class RecetteService {
  
  recettes: any;

  dataSource: DataSource;
  
    

  constructor() {
    this.dataSource = new DataSource({
        type: 'postgres',
        host: 'dpg-d0lfsjjuibrs73a9i5t0-a.frankfurt-postgres.render.com',
        port: 5432,
        username: 'root',
        password: '6Q1i162772P9HMMI9UP9qKqVxptpfivI',
        database: 'dbcooksmart_ndc3',
        ssl: { rejectUnauthorized: false },
        entities: [recette, ingredient, outils, ingredient_pour_recette, outils_pour_recette],
      });

    this.dataSource.initialize().then(() => {
      console.log('Data Source has been initialized!');
    }).catch((err) => {
      console.error('Error during Data Source initialization:', err);
    });
  }

  create(createRecetteDto: CreateRecetteDto) {
    // Assuming you are using a database like TypeORM or Prisma, here's an example using a simple in-memory array for demonstration purposes.

    beforeAll(async () => {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: 'dpg-d0lfsjjuibrs73a9i5t0-a.frankfurt-postgres.render.com',
        port: 5432,
        username: 'root',
        password: '6Q1i162772P9HMMI9UP9qKqVxptpfivI',
        database: 'dbcooksmart_ndc3',
        ssl: { rejectUnauthorized: false },
        entities: [recette, ingredient, outils, ingredient_pour_recette, outils_pour_recette],
      });
  
      await this.dataSource.initialize();
      console.log('Data Source has been initialized!');
    });

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

  findAll() {}

  findOne(id: number) {
    return `This action returns a #${id} recette`;
  }

  update(id: number, updateRecetteDto: UpdateRecetteDto) {
    return `This action updates a #${id} recette`;
  }

  remove(id: number) {
    return `This action removes a #${id} recette`;
  }

  async getAllRecette(){

    let response: {
      idr: number;
      nom: string;
      description: string;
      note: number;
      image: string;
      origine: string;
      ingredients: (ingredient | undefined)[];
      outils: (outils | undefined)[];
    }[] = [];

    const recettes = await this.dataSource.getRepository(recette).find();
    recettes.forEach(async (recette) => {console.log(recette);});

    const ingredients = await this.dataSource.getRepository(ingredient).find();
    ingredients.forEach(async (ingredient) => {console.log(ingredient);});

    const tools = await this.dataSource.getRepository(outils).find();
    tools.forEach(async (outils) => {console.log(outils);});

    const ingredientsForRecipe = await this.dataSource.getRepository(ingredient_pour_recette).find();
    ingredientsForRecipe.forEach(async (ingredient_pour_recette) => {console.log(ingredient_pour_recette);});

    const toolsForRecipe = await this.dataSource.getRepository(outils_pour_recette).find();
    toolsForRecipe.forEach(async (outils_pour_recette) => {console.log(outils_pour_recette);});

    response = recettes.map((recette) => {
      const recetteIngredients = ingredientsForRecipe
      .filter((ifr) => ifr.idrecette === recette.idr)
      .map((ifr) => {
        const ingredientDetails = ingredients.find((ingredient) => ingredient.idi === ifr.idingredient);
        return ingredientDetails
        ? {
          ...ingredientDetails,
          quantite: ifr.quantite,
          unite: ifr.unite,
          }
        : undefined;
      });

      const recetteTools = toolsForRecipe
      .filter((tfr) => tfr.idrecette === recette.idr)
      .map((tfr) => tools.find((tool) => tool.ido === tfr.idoutils));

      return {
      ...recette,
      ingredients: recetteIngredients,
      outils: recetteTools,
      };
    });

    response = response.map((recette) => {
      const imagePath = path.resolve(__dirname, '../../ressource/', recette.image);
      return {
        ...recette,
        image: `data:image/png;base64,${fs.readFileSync(imagePath).toString('base64')}`,
      };
    });
    
    console.log('Current path:', __dirname);

    const resourcePath = path.resolve(__dirname, '../../ressource/');
    fs.readdir(resourcePath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }
      console.log('Files in ../../ressource/:', files);
    });

    return response;
  }

  async getRecetteById(id: number) {

    let response: {
      idr: number;
      nom: string;
      description: string;
      note: number;
      image: string;
      origine: string;
      ingredients: (ingredient | undefined)[];
      outils: (outils | undefined)[];
    }[] = [];

    const recettes = await this.dataSource.getRepository(recette).find();
    recettes.forEach(async (recette) => {console.log(recette);});

    const ingredients = await this.dataSource.getRepository(ingredient).find();
    ingredients.forEach(async (ingredient) => {console.log(ingredient);});

    const tools = await this.dataSource.getRepository(outils).find();
    tools.forEach(async (outils) => {console.log(outils);});

    const ingredientsForRecipe = await this.dataSource.getRepository(ingredient_pour_recette).find();
    ingredientsForRecipe.forEach(async (ingredient_pour_recette) => {console.log(ingredient_pour_recette);});

    const toolsForRecipe = await this.dataSource.getRepository(outils_pour_recette).find();
    toolsForRecipe.forEach(async (outils_pour_recette) => {console.log(outils_pour_recette);});

    response = recettes.map((recette) => {
      const recetteIngredients = ingredientsForRecipe
      .filter((ifr) => ifr.idrecette === recette.idr)
      .map((ifr) => {
        const ingredientDetails = ingredients.find((ingredient) => ingredient.idi === ifr.idingredient);
        return ingredientDetails
        ? {
          ...ingredientDetails,
          quantite: ifr.quantite,
          unite: ifr.unite,
          }
        : undefined;
      });

      const recetteTools = toolsForRecipe
      .filter((tfr) => tfr.idrecette === recette.idr)
      .map((tfr) => tools.find((tool) => tool.ido === tfr.idoutils));

      return {
      ...recette,
      ingredients: recetteIngredients,
      outils: recetteTools,
      };
    });

    response = response.map((recette) => {
      const imagePath = path.resolve(__dirname, '../../ressource/', recette.image);
      return {
        ...recette,
        image: `data:image/png;base64,${fs.readFileSync(imagePath).toString('base64')}`,
      };
    });
    
    console.log('Current path:', __dirname);

    const resourcePath = path.resolve(__dirname, '../../ressource/');
    fs.readdir(resourcePath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }
      console.log('Files in ../../ressource/:', files);
    });
    response = response.filter((recette) => recette.idr == id);

    return response;
  }


  async getRecetteForIngredient(ingredient: string) {
    console.log("cocou");
    let response: {
      idr: number;
      nom: string;
      description: string;
      note: number;
      image: string;
      origine: string;
      ingredients: (ingredient | undefined)[];
      outils: (outils | undefined)[];
    }[] = [];

    console.log("cocou");

    response = await this.getAllRecette();

    ingredient.toLowerCase();
    const ingredients = ingredient.split("-");
    console.log(ingredients);

    let response2:any = []; //on utilise les même objet que response

    response.forEach(element => {
      element.ingredients.forEach(ing => {
        if (ing && ingredients.includes(ing.nom.toLowerCase()) ) {
          response2.push(element);
        }
      }
    );
    });
    return response2;
  }

}
