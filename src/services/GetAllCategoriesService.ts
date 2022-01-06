import { getRepository } from "typeorm";
import { Category } from "../entites/Category";

export class GetAllCategoriesService{
    async execute(){
        const repo =getRepository(Category);


        const categories = await repo.find();


        return categories;


    }



}