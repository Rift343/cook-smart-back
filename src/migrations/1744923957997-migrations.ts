import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1744923957997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE recette (
              id SERIAL PRIMARY KEY,
              name VARCHAR(255) NOT NULL,
              description TEXT
            );
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE recette;
          `);
    }

}
