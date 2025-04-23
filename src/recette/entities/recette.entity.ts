import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ingredient_pour_recette } from "./ingredient_pour_recette.entity";
import { outils_pour_recette } from "./outils_pour_recette.entity";

@Entity('recette')
export class recette {
    
    @OneToMany(() => ingredient_pour_recette, (ingredient_pour_recette) => ingredient_pour_recette.idrecette)   //relation entre recette et ingredient_pour_recette
    @OneToMany(() => outils_pour_recette, (outils_pour_recette) => outils_pour_recette.idrecette)   //relation entre recette et outils_pour_recette
    @PrimaryGeneratedColumn()//id de la recette
    idr: number;

    @Column()
    nom:string;

    @Column()
    description:string;

    @Column()
    note: number;

    @Column()//cette chaine de caractère correspond à une image (PATH)
    image: string;

    @Column()
    origine: string;

}
