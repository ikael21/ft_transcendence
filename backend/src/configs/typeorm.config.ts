import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
	type: 'postgres',
	host: process.env.DATABASE_HOST,
	port: Number(process.env.DATABASE_PORT),
	username: process.env.POSTGRESQL_USERNAME,
	password: process.env.POSTGRESQL_PASSWORD,
	database: process.env.POSTGRESQL_DATABASE,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	synchronize: true,
}
