import { getRepository } from "typeorm";
import { Category } from "../entites/Category";




export class DeleteCategoryService{
    /**
     * 
     * @param id 
     * @returns Error if does't exists or id of the entite deleted
     */
    async execute (id:string){
        const repo =getRepository(Category);
        
        if(!await repo.findOne(id)){

            return new Error ("category does not exists!")

        }

        await repo.delete(id);


    }


}


