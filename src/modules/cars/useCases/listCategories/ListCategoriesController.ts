import { Request, Response } from "express"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

	handle(request: Request, response: Response): Response {
		const getAll = this.listCategoriesUseCase.execute()
		return response.json(getAll)
	}
}

export { ListCategoriesController }
