import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ingredient')
export class ingredient {
    @PrimaryGeneratedColumn()
    idi: number;

    @Column()
    nom:string;

}
