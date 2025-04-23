import { DataSource } from 'typeorm';
import { Recette } from '../src/recette/entities/recette.entity';
import { Ingredient } from '../src/recette/entities/ingredient.entity';
import { Outils } from '../src/recette/entities/outils.entity';
import { Ingredient_pour_recette } from '../src/recette/entities/ingredient_pour_recette.entity';
import { Outils_pour_recette } from '../src/recette/entities/outils_pour_recette.entity';

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
      entities: [Recette, Ingredient, Outils, Ingredient_pour_recette, Outils_pour_recette],
    });

    await dataSource.initialize();
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('should retrieve recettes from the database', async () => {
    const recetteRepository = dataSource.getRepository(Recette);
    const recettes = await recetteRepository.find();
    expect(recettes).toBeDefined();
    expect(recettes.length).toBeGreaterThan(0);
  });

  it('should retrieve ingredients from the database', async () => {
    const ingredientRepository = dataSource.getRepository(Ingredient);
    const ingredients = await ingredientRepository.find();
    expect(ingredients).toBeDefined();
    expect(ingredients.length).toBeGreaterThan(0);
  });

  it('should retrieve outils from the database', async () => {
    const outilsRepository = dataSource.getRepository(Outils);
    const outils = await outilsRepository.find();
    expect(outils).toBeDefined();
    expect(outils.length).toBeGreaterThan(0);
  });

  it('should retrieve ingredient_pour_recette from the database', async () => {
    const ingredientPourRecetteRepository = dataSource.getRepository(Ingredient_pour_recette);
    const ingredientPourRecette = await ingredientPourRecetteRepository.find();
    expect(ingredientPourRecette).toBeDefined();
    expect(ingredientPourRecette.length).toBeGreaterThan(0);
  });

  it('should retrieve outils_pour_recette from the database', async () => {
    const outilsPourRecetteRepository = dataSource.getRepository(Outils_pour_recette);
    const outilsPourRecette = await outilsPourRecetteRepository.find();
    expect(outilsPourRecette).toBeDefined();
    expect(outilsPourRecette.length).toBeGreaterThan(0);
  });
});