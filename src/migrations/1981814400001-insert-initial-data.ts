import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInitialData1971814400001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert data into the 'recette' table
    await queryRunner.query(`
      INSERT INTO recette (nom, description, note, Image, origine, vegan, sansgluten, halal) VALUES
      (
      'Tiramisu',
      'Séparer les blancs des jaunes;Fouetter les jaunes avec le sucre;Ajouter le mascarpone;Monter les blancs en neige;Incorporer délicatement les blancs;Tremper les biscuits dans le café@120;Alterner biscuits et crème;Réserver au frais@240',
      5,
      'path/to/tiramusu.jpg',
      'France',
      false,
      false,
      true
      ),
      (
      'Pate à la bolognaise',
      'Émincer l''oignon et l''ail;Faire revenir dans l''huile d''olive@5;Ajouter la viande hachée et cuire@10;Verser les tomates concassées;Assaisonner avec sel, poivre, basilic;Laisser mijoter@30;Cuire les pâtes@10;Mélanger les pâtes et la sauce',
      4,
      'path/to/patebolo.jpg',
      'Italy',
      false,
      false,
      false
      ),
      (
      'Salade Vegan',
      'Laver la salade verte;Couper l''avocat et la mozzarella;Mélanger tous les ingrédients;Assaisonner selon le goût@2;Servir frais',
      4,
      'path/to/salade-vegan-800x600.jpg',
      'France',
      true,
      true,
      true
      );
    `);

    // Insert data into the 'ingredient' table
    await queryRunner.query(`
      INSERT INTO ingredient (nom) VALUES
      ('sucre roux'),
      ('biscuits à la cuillère'),
      ('café'),
      ('mascarpone'),
      ('oeufs'),
      ('pâtes'),
      ('viande hachée'),
      ('tomates concassées'),
      ('oignon'),
      ('ail'),
      ('huile d''olive'),
      ('sel'),
      ('poivre'),
      ('basilic frais'),
      ('salade verte'),
      ('avocat'),
      ('Mozzarella');
    `);

    // Insert data into the 'outils' table
    await queryRunner.query(`
      INSERT INTO outils (nom) VALUES
      ('Couteau'),
      ('Planche à découper'),
      ('Four'),
      ('Poêle'),
      ('Casserole'),
      ('Saladier'),
      ('Cuillère en bois');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove data from the 'recette' table
    await queryRunner.query(`DELETE FROM recette WHERE nom IN (
      'Tiramisu',
      'Pate à la bolognaise',
      'Salade Vegan'
    );`);

    // Remove data from the 'ingredient' table
    await queryRunner.query(`DELETE FROM ingredient WHERE nom IN (
      'sucre roux',
      'biscuits à la cuillère',
      'café',
      'mascarpone',
      'oeufs',
      'pâtes',
      'viande hachée',
      'tomates concassées',
      'oignon',
      'ail',
      'huile d''olive',
      'sel',
      'poivre',
      'basilic frais',
      'salade verte',
      'avocat',
      'Mozzarella'
    );`);

    // Remove data from the 'outils' table
    await queryRunner.query(`DELETE FROM outils WHERE nom IN ('Couteau', 'Planche à découper', 'Four');`);
  }
}