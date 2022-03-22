import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
	constructor(private createCategotyUseCase: CreateCategoryUseCase) { }

	handle(request: Request, response: Response): Response {
		const { name, description } = request.body;

		this.createCategotyUseCase.execute({ name, description });

		return response.status(201).json({ message: 'Categoria criada com sucesso!' });
	}
}

export { CreateCategoryController };
