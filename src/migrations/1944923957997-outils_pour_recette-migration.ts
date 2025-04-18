import { MigrationInterface, QueryRunner } from "typeorm";

export class OutilsPourRecetteMigration1944923957997 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE outils_pour_recette (
            recette_id INT NOT NULL,
            outil_id INT NOT NULL,
            CONSTRAINT pk_outils_pour_recette PRIMARY KEY (recette_id, outil_id),
            CONSTRAINT fk_recette FOREIGN KEY (recette_id) REFERENCES recette(idR) ON DELETE CASCADE,
            CONSTRAINT fk_outil FOREIGN KEY (outil_id) REFERENCES outils(idO) ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE outils_pour_recette;
        `);
    }
}