import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
	constructor(private createCategotyUseCase: CreateCategoryUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description } = request.body;

		await this.createCategotyUseCase.execute({ name, description });

		return response.status(201).json({ message: 'Categoria criada com sucesso!' });
	}
}

export { CreateCategoryController };
