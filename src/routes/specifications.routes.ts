import { Router } from "express"
import { createSpecificationController } from "../modules/cars/useCases/createSpecification"
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications"

const specificationRoutes = Router()

specificationRoutes.post("/", (request, response) => {
	return createSpecificationController.handler(request, response)
})

specificationRoutes.get("/", (request, response) => {
	return listSpecificationsController.handler(request, response)
})

export { specificationRoutes }
