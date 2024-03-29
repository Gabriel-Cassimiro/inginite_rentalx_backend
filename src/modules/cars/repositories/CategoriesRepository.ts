import { Category } from "../entities/Category"
import { getRepository, Repository } from "typeorm"

import {
	ICategoriesRepositories,
	ICreateCategoryDTO
} from "./interfaces/ICategoriesRespository"

class CategoriesRepository implements ICategoriesRepositories {
	private repository: Repository<Category>
	private static INSTACE: CategoriesRepository

	// Singleton
	constructor() {
		this.repository = getRepository(Category)
	}

	public static getInstance(): CategoriesRepository {
		if (!CategoriesRepository.INSTACE) {
			CategoriesRepository.INSTACE = new CategoriesRepository()
		}

		return CategoriesRepository.INSTACE
	}

	async create({ description, name }: ICreateCategoryDTO): Promise<void> {
		const category = this.repository.create()

		Object.assign(category, { name, description, created_at: new Date() })

		await this.repository.save(category)
	}

	async list(): Promise<Category[]> {
		const categories = await this.repository.find()
		return categories
	}

	async findByName(name: string): Promise<Category> {
		// Select * from categories where name = "name" limit 1
		const category = await this.repository.findOne({ name })
		return category
	}
}

export { CategoriesRepository }
