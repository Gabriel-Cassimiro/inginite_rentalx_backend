//Not used in anything at this moment.

import { Category } from "../model/category"
import { ICategoriesRepositories, ICreateCategoryDTO } from "./ICategoriesRespository"

class PostgressCategoryRepository implements ICategoriesRepositories {
	findByName(name: string): Category {
		return null
	}
	list(): Category[] {
		return null
	}
	create({ name, description }: ICreateCategoryDTO): void {
		console.log(name, description)
	}
}

export { PostgressCategoryRepository }
