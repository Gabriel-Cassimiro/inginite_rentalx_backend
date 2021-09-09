import { CategoriesRepository } from "../../repositories/CategoriesRepository"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
import { ListCategoriesController } from "./ListCategoriesController"

const categoriesRepository = CategoriesRepository.getInstance()

const createCategoryUseCase = new ListCategoriesUseCase(categoriesRepository)

const listCategoriesController = new ListCategoriesController(createCategoryUseCase)

export { listCategoriesController }
