import { Router } from "express"
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationsController"
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController"

const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
const listSpecificationsController = new ListSpecificationsController()

specificationRoutes.post("/", createSpecificationController.handle)

specificationRoutes.get("/", listSpecificationsController.handle)

export { specificationRoutes }
