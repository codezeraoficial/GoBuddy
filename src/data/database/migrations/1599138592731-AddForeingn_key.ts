import {MigrationInterface, QueryRunner} from "typeorm";

export class AddForeingnKey1599138592731 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE buddies ADD constraint fk_buddies_users foreign key (userId) references users (id)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE buddies DROP constraint fk_buddies_users`);
    }

}
