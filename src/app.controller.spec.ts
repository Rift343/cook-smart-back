import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { recette } from './recette/entities/recette.entity';
import { ingredient } from './recette/entities/ingredient.entity';
import { outils } from './recette/entities/outils.entity';
import { ingredient_pour_recette } from './recette/entities/ingredient_pour_recette.entity';
import { outils_pour_recette } from './recette/entities/outils_pour_recette.entity';
import { DataSource } from 'typeorm';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

describe('Database Integration Test', () => {
  let dataSource: DataSource;

  beforeAll(async () => {
    dataSource = new DataSource({
      type: 'postgres',
      host: 'dpg-d00jd1hr0fns73eboad0-a.frankfurt-postgres.render.com',
      port: 5432,
      username: 'root',
      password: 'vu8oHx3vp0RAjv1JfPXok201ICGAnYOd',
      database: 'dbcooksmart',
      ssl: { rejectUnauthorized: false },
      entities: [recette, ingredient, outils, ingredient_pour_recette, outils_pour_recette],
    });

    await dataSource.initialize();
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('should retrieve recettes from the database', async () => {
    const recetteRepository = dataSource.getRepository(recette);
    const recettes = await recetteRepository.find();
    expect(recettes).toBeDefined();
    expect(recettes.length).toBeGreaterThan(0);
  });

  it('should retrieve ingredients from the database', async () => {
    const ingredientRepository = dataSource.getRepository(ingredient);
    const ingredients = await ingredientRepository.find();
    expect(ingredients).toBeDefined();
    expect(ingredients.length).toBeGreaterThan(0);
  });

  it('should retrieve outils from the database', async () => {
    const outilsRepository = dataSource.getRepository(outils);
    const outilsData = await outilsRepository.find();
    expect(outilsData).toBeDefined();
    expect(outilsData.length).toBeGreaterThan(0);
  });

  it('should retrieve ingredient_pour_recette from the database', async () => {
    const ingredientPourRecetteRepository = dataSource.getRepository(ingredient_pour_recette);
    const ingredientPourRecette = await ingredientPourRecetteRepository.find();
    expect(ingredientPourRecette).toBeDefined();
    expect(ingredientPourRecette.length).toBeGreaterThan(0);
  });

  it('should retrieve outils_pour_recette from the database', async () => {
    const outilsPourRecetteRepository = dataSource.getRepository(outils_pour_recette);
    const outilsPourRecette = await outilsPourRecetteRepository.find();
    expect(outilsPourRecette).toBeDefined();
    expect(outilsPourRecette.length).toBeGreaterThan(0);
  });
});
