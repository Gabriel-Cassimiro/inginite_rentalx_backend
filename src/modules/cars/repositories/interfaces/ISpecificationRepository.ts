import { Specification } from "../../model/Specification"

//DTO => Data transfer object
interface ICreateSpecificationDTO {
	name: string
	description: string
}
interface ISpecificationRepositories {
	create({ name, description }: ICreateSpecificationDTO): void
	list(): Specification[]
	findByName(name: string): Specification
}

export { ISpecificationRepositories, ICreateSpecificationDTO }
