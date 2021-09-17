import { Category } from "../../entities/Category"
import { inject, injectable } from "tsyringe"
import { ICategoriesRepositories } from "../../repositories/interfaces/ICategoriesRespository"

@injectable()
class ListCategoriesUseCase {
	constructor(
		@inject("CategoriesRepository")
		private listCategoriesUseCase: ICategoriesRepositories
	) {}

	async execute(): Promise<Category[]> {
		const categories = await this.listCategoriesUseCase.list()

		return categories
	}
}

export { ListCategoriesUseCase }
