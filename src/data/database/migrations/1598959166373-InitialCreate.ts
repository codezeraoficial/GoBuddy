import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class InitialCreate1598959166373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name: 'buddies',
        columns:[
            {
                name: 'id',
                type: 'varchar',               
                isPrimary: true,                
                generationStrategy: "uuid"
            },
            {
                name: 'name',
                type: 'varchar', 
                isNullable: false             
            },
            {
                name: 'birthDate',
                type: 'datetime', 
                isNullable: false  
            },
            {
                name: 'breed',
                type: 'varchar', 
                isNullable: false  
            },
            {
                name: 'details',
                type: 'varchar', 
                isNullable: false  
            },
        ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('buddies');
  }
}
