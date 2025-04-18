import { MigrationInterface, QueryRunner } from "typeorm";

export class OutilsMigration1744923957997 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE outils (
                idO SERIAL PRIMARY KEY,
                nom VARCHAR(255) NOT NULL,
                description TEXT,
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now()
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE outils;
        `);
    }
}