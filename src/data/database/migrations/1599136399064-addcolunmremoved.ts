import {MigrationInterface, QueryRunner} from "typeorm";

export class addcolunmremoved1599136399064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE buddies ADD removed BIT default 0`);
        await queryRunner.query(`ALTER TABLE buddies ADD userId varchar(255)`);
        // await queryRunner.query(`ALTER TABLE buddies ADD constraint fk_buddies_users foreing key userId references users (id)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE buddies DROP COLUMN removed`);
        await queryRunner.query(`ALTER TABLE buddies DROP COLUMN userId`);
    }
}
