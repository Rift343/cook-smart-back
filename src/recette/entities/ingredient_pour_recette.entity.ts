import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { recette } from "./recette.entity";
import { ingredient } from "./ingredient.entity";

@Entity('ingredient_pour_recette')
export class ingredient_pour_recette {

    @ManyToOne(() => recette, (recette) => recette.idr)
    @JoinColumn({ name: 'idrecette' })
    @PrimaryColumn()
    idrecette: number; // id de la recette dans laquelle se trouve l'ingrédient

    @ManyToOne(() => ingredient, (ingredient) => ingredient.idi)
    @JoinColumn({ name: 'idingredient' })
    @PrimaryColumn()
    idingredient: number; // id de l'ingrédient dans la recette

    @Column()
    quantite: number; // quantité de l'ingrédient dans la recette

    @Column()
    unite: string; // gramme, litre, etc.

}
