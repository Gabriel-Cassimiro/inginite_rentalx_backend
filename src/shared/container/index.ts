import { container } from "tsyringe"

import { ICategoriesRepositories } from "../../modules/cars/repositories/interfaces/ICategoriesRespository"
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository"

import { ISpecificationRepositories } from "../../modules/cars/repositories/interfaces/ISpecificationRepository"
import { SpecificationRepository } from "../../modules/cars/repositories/SpecificationRepository"

container.registerSingleton<ICategoriesRepositories>(
	"CategoriesRepository",
	CategoriesRepository
)

container.registerSingleton<ISpecificationRepositories>(
	"SpecificationRepository",
	SpecificationRepository
)
