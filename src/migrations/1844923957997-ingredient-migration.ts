import { MigrationInterface, QueryRunner } from "typeorm";

export class IngredientMigration1681814400000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE ingredient (
                idI SERIAL PRIMARY KEY,
                nom VARCHAR(255) NOT NULL
        );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE ingredient;
        `);
    }
}
