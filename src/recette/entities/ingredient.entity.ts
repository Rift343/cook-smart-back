import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ingredient')
export class Ingredient {
    @PrimaryGeneratedColumn()
    idI: number;

    @Column()
    nom:string;

}
