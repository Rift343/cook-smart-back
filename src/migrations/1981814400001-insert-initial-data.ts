import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInitialData1971814400001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert data into the 'recette' table
    await queryRunner.query(`
      INSERT INTO recette (nom, description, note, Image, origine, vegan, sansgluten, halal) VALUES
      ('Recette 1', 'Description de la recette 1', 5, 'path/to/image1.jpg', 'France', true, false, true),
      ('Recette 2', 'Description de la recette 2', 4, 'path/to/image2.jpg', 'Italy', false, true, false);
    `);

    // Insert data into the 'ingredient' table
    await queryRunner.query(`
      INSERT INTO ingredient (nom) VALUES
      ('Tomate'),
      ('Basilic'),
      ('Mozzarella');
    `);

    // Insert data into the 'outils' table
    await queryRunner.query(`
      INSERT INTO outils (nom) VALUES
      ('Couteau'),
      ('Planche à découper'),
      ('Four');
    `);
    }
  

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove data from the 'recette' table
    await queryRunner.query(`DELETE FROM recette WHERE nom IN ('Recette 1', 'Recette 2');`);

    // Remove data from the 'ingredient' table
    await queryRunner.query(`DELETE FROM ingredient WHERE nom IN ('Tomate', 'Basilic', 'Mozzarella');`);

    // Remove data from the 'outils' table
    await queryRunner.query(`DELETE FROM outils WHERE nom IN ('Couteau', 'Planche à découper', 'Four');`);
    
  }
}