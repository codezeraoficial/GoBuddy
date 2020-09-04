import {MigrationInterface, QueryRunner} from "typeorm";

export class AddcolunmBuddy1599070717606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE buddies ADD  tag VARCHAR(255) DEFAULT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE buddies DROP COLUMN  tag`);
    }

}
