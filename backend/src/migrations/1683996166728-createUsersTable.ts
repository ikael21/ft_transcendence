import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1683996166728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'username',
                  type: 'varchar',
                },
                {
                  name: 'email',
                  type: 'varchar',
                },
                {
                  name: 'password',
                  type: 'varchar',
                },
              ],
            }),
            true,
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }
}
