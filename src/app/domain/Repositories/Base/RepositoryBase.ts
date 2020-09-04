import { IRepositoryBase } from "../../../Interfaces/IRepositories/IRepositoryBase/IRepositoryBase";
import { getRepository, Repository } from "typeorm";
import Entity from "../../models/Entity";
export class RepositoryBase<TEntity extends Entity>  implements IRepositoryBase<TEntity> {
  private repository: Repository<TEntity>;
  constructor(entity: any) {
    this.repository = getRepository(entity);
  }

  async get(): Promise<TEntity[]> {
    return await this.repository.find();
  }

  async getById(id: string): Promise<TEntity> {
    throw new Error("Method not implemented.");
  }
  async add(entity: any): Promise<void> {
    console.log(entity);
    
    const newEntity = this.repository.create(entity);
    return await this.save(newEntity);
  }
  async update(entity: TEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async save(entity: any): Promise<void> {
    return this.repository.save(entity);
  }
}
