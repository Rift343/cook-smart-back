import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('outils')
export class Outils {
    @PrimaryGeneratedColumn()
    idO: number;

    @Column()
    nom:string;

}
