import { Category } from "../../model/Category"
import { ICategoriesRepositories } from "../../repositories/interfaces/ICategoriesRespository"

class ListCategoriesUseCase {
	constructor(private listCategoriesUseCase: ICategoriesRepositories) {}

	execute(): Category[] {
		const categoires = this.listCategoriesUseCase.list()

		return categoires
	}
}

export { ListCategoriesUseCase }
