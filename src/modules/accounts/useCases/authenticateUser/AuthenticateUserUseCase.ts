import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	user: {
		name: string;
		email: string;
	};
	token: string;
}

@injectable()
class AuthenticateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository
	) { }

	async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.usersRepository.findByEmail(email);

		if (!user) {
			throw new AppError('Email or password invalid');
		}

		const passwordMatched = await compare(password, user.password);

		if (!passwordMatched) {
			throw new AppError('Email or password invalid');
		}

		const token = sign({}, '8226ceffa74f527226c39f26ed6b0b88', {
			subject: user.id,
			expiresIn: '1d'
		});

		return {
			user: {
				name: user.name,
				email: user.email
			},
			token
		}
	}
}

export { AuthenticateUserUseCase };
