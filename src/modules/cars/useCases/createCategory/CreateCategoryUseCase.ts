import { inject, injectable } from "tsyringe"
import { ICategoriesRepositories } from "../../repositories/interfaces/ICategoriesRespository"

interface IRequest {
	name: string
	description: string
}

@injectable()
class CreateCategoryUseCase {
	constructor(
		@inject("CategoriesRepository")
		private categoriesRepository: ICategoriesRepositories
	) {}

	async execute({ name, description }: IRequest): Promise<void> {
		const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

		if (categoryAlreadyExists) {
			throw new Error(`Category ${name} already exists`)
		}

		this.categoriesRepository.create({ name, description })
	}
}

export { CreateCategoryUseCase }
