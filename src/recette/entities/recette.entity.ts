import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('recette')
export class Recette {
    @PrimaryGeneratedColumn()
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

}
