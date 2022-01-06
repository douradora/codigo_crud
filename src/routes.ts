import { Router } from "express";
import { CreateCategoryController } from "./Controllers/CreateCategoryController";
import { DeleteCategoryController } from "./Controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./Controllers/GetAllCategoriesController";

const routes =Router();

routes.post('/categories',new CreateCategoryController().handle);
routes.get('/categories',new GetAllCategoriesController().handle);
routes.delete('/categories/:id',new DeleteCategoryController().handle);

export {routes}