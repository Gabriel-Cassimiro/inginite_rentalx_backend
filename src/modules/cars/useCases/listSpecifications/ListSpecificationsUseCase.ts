import { inject, injectable } from "tsyringe"

import { Specification } from "../../entities/Specification"
import { ISpecificationRepositories } from "../../repositories/interfaces/ISpecificationRepository"

@injectable()
class ListSpecificationsUseCase {
	constructor(
		@inject("SpecificationRepository")
		private listSpecificationsUseCase: ISpecificationRepositories
	) {}

	async execute(): Promise<Specification[]> {
		const specifications = await this.listSpecificationsUseCase.list()

		return specifications
	}
}

export { ListSpecificationsUseCase }
