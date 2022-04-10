import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(request: Request, respose: Response, next: NextFunction) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new AppError('Token is missing', 401);
	}

	const [, token] = authHeader.split(' ');

	try {
		const { sub: userId } = verify(token, '8226ceffa74f527226c39f26ed6b0b88') as IPayload;

		const usersRepository = new UsersRepository();

		const user = await usersRepository.findById(userId);

		if (!user) {
			throw new AppError('User not found', 401);
		}

		return next();
	} catch {
		throw new AppError('Invalid token', 401);
	}
}
