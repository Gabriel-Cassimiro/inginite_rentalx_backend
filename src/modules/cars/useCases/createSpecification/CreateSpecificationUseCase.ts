import { ISpecificationRepositories } from "../../repositories/interfaces/ISpecificationRepository"

interface IRequest {
	name: string
	description: string
}

class CreateSpecificationUseCase {
	constructor(private specificationsRepositories: ISpecificationRepositories) {}
	execute({ name, description }: IRequest): void {
		const specificationAlreadyExists =
			this.specificationsRepositories.findByName(name)

		if (specificationAlreadyExists) {
			throw new Error(`Specification ${name} already exists`)
		}

		this.specificationsRepositories.create({ name, description })
	}
}

export { CreateSpecificationUseCase }
