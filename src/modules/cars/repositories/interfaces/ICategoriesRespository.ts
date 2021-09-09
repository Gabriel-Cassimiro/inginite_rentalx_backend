import { Category } from "../../model/Category"

//DTO => Data transfer object
interface ICreateCategoryDTO {
	name: string
	description: string
}
interface ICategoriesRepositories {
	create({ name, description }: ICreateCategoryDTO): void
	list(): Category[]
	findByName(name: string): Category
}

export { ICategoriesRepositories, ICreateCategoryDTO }
