import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
	name: string;
	description: string;
}

@injectable()
class CreateSpecificationUseCase {
	constructor(
		@inject('SpecificationsRepository')
		private specificationsRepository: ISpecificationsRepository) { }

	execute({ name, description }: IRequest): void {
		const specificationAlredyExists = this.specificationsRepository.findByName(name);

		if (specificationAlredyExists) {
			throw new Error('Specification alredy exists!');
		}

		this.specificationsRepository.create({ name, description });
	}
}

export { CreateSpecificationUseCase };
