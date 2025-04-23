import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { outils } from "./outils.entity";
import { recette } from "./recette.entity";

@Entity('outils_pour_recette')
export class outils_pour_recette {
    @ManyToOne(() => outils, (outils) => outils.ido)
    @JoinColumn({ name: 'idoutils' })
    @PrimaryColumn()
    idoutils: number; // id de l'outil

    @ManyToOne(() => recette, (recette) => recette.idr)
    @JoinColumn({ name: 'idrecette' })
    @PrimaryColumn()
    idrecette: number; // id de la recette dans laquelle se trouve l'outil

}
