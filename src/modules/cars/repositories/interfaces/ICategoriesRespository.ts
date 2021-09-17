import { Category } from "../../entities/Category"

//DTO => Data transfer object
interface ICreateCategoryDTO {
	name: string
	description: string
}
interface ICategoriesRepositories {
	create({ name, description }: ICreateCategoryDTO): Promise<void>
	list(): Promise<Category[]>
	findByName(name: string): Promise<Category>
}

export { ICategoriesRepositories, ICreateCategoryDTO }
