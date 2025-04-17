import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ingredient_pour_recette } from "./ingredient_pour_recette.entity";
import { Outils_pour_recette } from "./outils_pour_recette.entity";

@Entity('recette')
export class Recette {
    
    @OneToMany(() => Ingredient_pour_recette, (ingredient_pour_recette) => ingredient_pour_recette.idRecette)   //relation entre recette et ingredient_pour_recette
    @OneToMany(() => Outils_pour_recette, (outils_pour_recette) => outils_pour_recette.idRecette)   //relation entre recette et outils_pour_recette
    @PrimaryGeneratedColumn()//id de la recette
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
