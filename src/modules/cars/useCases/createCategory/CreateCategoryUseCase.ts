import { ICategoriesRepositories } from "../../repositories/interfaces/ICategoriesRespository"

interface IRequest {
	name: string
	description: string
}

class CreateCategoryUseCase {
	constructor(private categoriesRepository: ICategoriesRepositories) {}

	execute({ name, description }: IRequest): void {
		const categoryAlreadyExists = this.categoriesRepository.findByName(name)

		if (categoryAlreadyExists) {
			throw new Error(`Category ${name} already exists`)
		}

		this.categoriesRepository.create({ name, description })
	}
}

export { CreateCategoryUseCase }
