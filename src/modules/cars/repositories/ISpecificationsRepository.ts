import { Specification } from "../entities/Specification";

interface ICreateSpecificatioDTO {
	name: string;
	description: string;
}

interface ISpecificationsRepository {
	create({ description, name }: ICreateSpecificatioDTO): void;
	findByName(name: string): Specification;
}

export { ICreateSpecificatioDTO, ISpecificationsRepository };
