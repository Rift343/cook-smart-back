import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class IngredientPourRecetteMigration1961814400003 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE ingredient_pour_recette (
                idrecette INTEGER NOT NULL,
                idingredient INTEGER NOT NULL,
                quantite INTEGER NOT NULL,
                unite VARCHAR(255) NOT NULL,
                PRIMARY KEY (idrecette, idingredient),
                FOREIGN KEY (idrecette) REFERENCES recette(idr) ON DELETE CASCADE,
                FOREIGN KEY (idingredient) REFERENCES ingredient(idi) ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ingredient_pour_recette");
    }
}