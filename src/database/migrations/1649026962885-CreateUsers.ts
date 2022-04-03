import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1649026962885 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'username',
						type: 'varchar',
						isUnique: true,
						isNullable: false,
					},
					{
						name: 'password',
						type: 'varchar',
					},
					{
						name: 'email',
						type: 'varchar',
					},
					{
						name: 'driver_license',
						type: 'varchar',
					},
					{
						name: 'isAdmin',
						type: 'boolean',
						default: false
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					}
				]
			}),
		)

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users')
	}

}
