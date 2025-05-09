import { MigrationInterface, QueryRunner } from "typeorm";

/*

idR: number;

    @Column()
    nom:string;

    @Column()
    description:string;

    @Column()
    note: number;

    @Column()//cette chaine de caractère correspond à une image (PATH)
    Image: string;

    @Column()
    origine: string;

*/ 

export class Migrations1744923957997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE Recette (
              idR SERIAL PRIMARY KEY,
              note INTEGER,
              nom VARCHAR(255) NOT NULL,
              description TEXT,
              Image TEXT,
              origine TEXT,
              vegan BOOLEAN,
              sansgluten BOOLEAN,
              halal BOOLEAN
            );
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE Recette;
          `);
    }

}
