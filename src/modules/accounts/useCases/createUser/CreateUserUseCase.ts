import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository
	) { }

	async execute({ name, driver_license, email, password, username }: ICreateUserDTO): Promise<void> {
		await this.usersRepository.create({
			name,
			driver_license,
			email,
			password,
			username
		})
	}
}

export { CreateUserUseCase };
