import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDataIntoRelationTables1981814400002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert data into the 'ingredient_pour_recette' table
    await queryRunner.query(`
      INSERT INTO ingredient_pour_recette (idrecette, idingredient, quantite, unite) VALUES
      (1, 1, 100, 'g'),   -- Tiramisu, sucre roux
      (1, 2, 200, 'g'),   -- Tiramisu, biscuits à la cuillère
      (1, 3, 1, 'tasse'), -- Tiramisu, café
      (1, 4, 250, 'g'),   -- Tiramisu, mascarpone
      (1, 5, 3, 'pcs'),   -- Tiramisu, oeufs

      (2, 6, 200, 'g'),   -- Pate à la bolognaise, pâtes
      (2, 7, 150, 'g'),   -- Pate à la bolognaise, viande hachée
      (2, 8, 400, 'g'),   -- Pate à la bolognaise, tomates concassées
      (2, 9, 1, 'pcs'),   -- Pate à la bolognaise, oignon
      (2, 10, 1, 'pcs'),  -- Pate à la bolognaise, ail
      (2, 11, 2, 'càs'),  -- Pate à la bolognaise, huile d'olive
      (2, 12, 1, 'càc'),  -- Pate à la bolognaise, sel
      (2, 13, 1, 'càc'),  -- Pate à la bolognaise, poivre
      (2, 14, 5, 'feuilles'), -- Pate à la bolognaise, basilic frais

      (3, 15, 100, 'g'),  -- Salade Vegan, salade verte
      (3, 16, 1, 'pcs'),  -- Salade Vegan, avocat
      (3, 17, 100, 'g');  -- Salade Vegan, Mozzarella
    `);

    // Insert data into the 'outils_pour_recette' table
    await queryRunner.query(`
      INSERT INTO outils_pour_recette (idrecette, idoutils) VALUES
      (1, 1), -- Tiramisu, Couteau
      (1, 2), -- Tiramisu, Planche à découper
      (2, 4), -- Pate à la bolognaise, Poêle
      (2, 5), -- Pate à la bolognaise, Casserole
      (3, 6), -- Salade Vegan, Saladier
      (3, 1); -- Salade Vegan, Couteau
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove data from the 'ingredient_pour_recette' table
    await queryRunner.query(`DELETE FROM ingredient_pour_recette WHERE recette_id IN (1, 2, 3);`);

    // Remove data from the 'outils_pour_recette' table
    await queryRunner.query(`DELETE FROM outils_pour_recette WHERE recette_id IN (1, 2, 3);`);
  }
}