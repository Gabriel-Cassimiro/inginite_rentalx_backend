import { Specification } from "../../entities/Specification"

//DTO => Data transfer object
interface ICreateSpecificationDTO {
	name: string
	description: string
}
interface ISpecificationRepositories {
	create({ name, description }: ICreateSpecificationDTO): Promise<void>
	list(): Promise<Specification[]>
	findByName(name: string): Promise<Specification>
}

export { ISpecificationRepositories, ICreateSpecificationDTO }
