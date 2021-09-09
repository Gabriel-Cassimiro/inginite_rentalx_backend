import { Specification } from "../../model/Specification"
import { ISpecificationRepositories } from "../../repositories/interfaces/ISpecificationRepository"

class ListSpecificationsUseCase {
	constructor(private listSpecificationsUseCase: ISpecificationRepositories) {}

	execute(): Specification[] {
		const specifications = this.listSpecificationsUseCase.list()

		return specifications
	}
}

export { ListSpecificationsUseCase }
