import { Request, Response } from "express"
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase"

class ListSpecificationsController {
	constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

	handler(request: Request, response: Response): Response {
		const getAll = this.listSpecificationsUseCase.execute()
		return response.json(getAll)
	}
}

export { ListSpecificationsController }
