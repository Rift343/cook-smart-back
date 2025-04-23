import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('outils')
export class outils {
    @PrimaryGeneratedColumn()
    ido: number;

    @Column()
    nom:string;

}
