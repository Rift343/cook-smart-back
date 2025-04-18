import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class IngredientPourRecetteMigration1981814400005 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE ingredient_pour_recette (
                idRecette INTEGER NOT NULL,
                idIngredient INTEGER NOT NULL,
                quantite INTEGER NOT NULL,
                unite VARCHAR(255) NOT NULL,
                PRIMARY KEY (idRecette, idIngredient),
                FOREIGN KEY (idRecette) REFERENCES recette(idR) ON DELETE CASCADE,
                FOREIGN KEY (idIngredient) REFERENCES ingredient(idI) ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ingredient_pour_recette");
    }
}