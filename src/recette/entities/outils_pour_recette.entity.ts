import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Outils } from "./outils.entity";
import { Recette } from "./recette.entity";

@Entity('outils_pour_recette')
export class Outils_pour_recette {
    @ManyToOne(() => Outils, (outils) => outils.idO)
    @PrimaryGeneratedColumn()
    idOutils: number;

    @ManyToOne(() => Recette, (Recette) => Recette.idR)
    @PrimaryGeneratedColumn()
    idRecette: number;//id de la recette dans laquelle se trouve l'outil

}
