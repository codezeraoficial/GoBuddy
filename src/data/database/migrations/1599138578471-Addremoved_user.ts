import {MigrationInterface, QueryRunner} from "typeorm";

export class AddremovedUser1599138578471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users ADD removed BIT default 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users DROP COLUMN removed`);
    }
}
