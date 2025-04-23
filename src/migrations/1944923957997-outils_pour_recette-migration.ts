import { MigrationInterface, QueryRunner } from "typeorm";

export class OutilsPourRecetteMigration1944923957997 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE outils_pour_recette (
                idrecette INT NOT NULL,
                idoutils INT NOT NULL,
                CONSTRAINT pk_outils_pour_recette PRIMARY KEY (idrecette, idoutils),
                CONSTRAINT fk_recette FOREIGN KEY (idrecette) REFERENCES recette(idr) ON DELETE CASCADE,
                CONSTRAINT fk_outil FOREIGN KEY (idoutils) REFERENCES outils(ido) ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE outils_pour_recette;
        `);
    }
}