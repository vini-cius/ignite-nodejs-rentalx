import { Specification } from "../entities/Specification";

interface ICreateSpecificatioDTO {
	name: string;
	description: string;
}

interface ISpecificationsRepository {
	create({ description, name }: ICreateSpecificatioDTO): Promise<void>;
	findByName(name: string): Promise<Specification>;
}

export { ICreateSpecificatioDTO, ISpecificationsRepository };
