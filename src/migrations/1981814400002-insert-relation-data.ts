import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDataIntoRelationTables1981814400002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert data into the 'ingredient_pour_recette' table
    await queryRunner.query(`
      INSERT INTO ingredient_pour_recette (idrecette, idingredient, quantite, unite) VALUES
      (1, 1, 2, 'kg'),
      (1, 2, 5, 'g'),
      (2, 3, 1, 'piece');
    `);

    // Insert data into the 'outils_pour_recette' table
    await queryRunner.query(`
      INSERT INTO outils_pour_recette (idrecette, idoutils) VALUES
      (1, 1),
      (1, 2),
      (2, 3);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove data from the 'ingredient_pour_recette' table
    await queryRunner.query(`DELETE FROM ingredient_pour_recette WHERE idrecette IN (1, 2);`);

    // Remove data from the 'outils_pour_recette' table
    await queryRunner.query(`DELETE FROM outils_pour_recette WHERE idrecette IN (1, 2);`);
  }
}