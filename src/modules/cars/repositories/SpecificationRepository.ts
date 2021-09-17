import { Specification } from "../entities/Specification"
import { getRepository, Repository } from "typeorm"

import {
	ICreateSpecificationDTO,
	ISpecificationRepositories
} from "./interfaces/ISpecificationRepository"

class SpecificationRepository implements ISpecificationRepositories {
	private repository: Repository<Specification>
	private static INSTACE: SpecificationRepository

	// Singleton
	constructor() {
		this.repository = getRepository(Specification)
	}

	public static getInstance(): SpecificationRepository {
		if (!SpecificationRepository.INSTACE) {
			SpecificationRepository.INSTACE = new SpecificationRepository()
		}
		return SpecificationRepository.INSTACE
	}

	async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
		const specification = this.repository.create()

		Object.assign(specification, { name, description, created_at: new Date() })

		await this.repository.save(specification)
	}

	async list(): Promise<Specification[]> {
		const specifications = await this.repository.find()
		return specifications
	}

	async findByName(name: string): Promise<Specification> {
		const specification = await this.repository.findOne({ name })
		return specification
	}
}

export { SpecificationRepository }
