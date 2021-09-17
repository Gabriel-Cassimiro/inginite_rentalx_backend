import { inject, injectable } from "tsyringe"
import { ISpecificationRepositories } from "../../repositories/interfaces/ISpecificationRepository"

interface IRequest {
	name: string
	description: string
}
@injectable()
class CreateSpecificationUseCase {
	constructor(
		@inject("SpecificationRepository")
		private specificationsRepository: ISpecificationRepositories
	) {}

	async execute({ name, description }: IRequest): Promise<void> {
		const specificationAlreadyExists =
			await this.specificationsRepository.findByName(name)

		if (specificationAlreadyExists) {
			throw new Error(`Specification ${name} already exists`)
		}

		this.specificationsRepository.create({ name, description })
	}
}

export { CreateSpecificationUseCase }
