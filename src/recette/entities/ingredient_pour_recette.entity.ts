import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recette } from "./recette.entity";
import { Ingredient } from "./ingredient.entity";

@Entity('ingredient_pour_recette')
export class Ingredient_pour_recette {

    @ManyToOne(() => Recette, (recette) => recette.idR)
    @PrimaryGeneratedColumn()
    idRecette: number;//id de la recette dans laquelle se trouve l'ingrédient

    @ManyToOne(() => Ingredient, (ingredient) => ingredient.idI)
    @PrimaryGeneratedColumn()
    idIngredient: number;//id de l'ingrédient dans la recette

    @Column()
    quantite:number;//quantité de l'ingrédient dans la recette

    @Column()
    unite:String;//gramme, litre, etc...

}
