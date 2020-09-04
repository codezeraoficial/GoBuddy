import  Entity  from "../../../domain/models/Entity";

export interface IRepositoryBase<TEntity extends Entity>{
  get(): Promise<TEntity[]>;
  getById(id: string): Promise<TEntity>;
  add(entity: TEntity): Promise<void>;
  update(entity: TEntity): Promise<void>;
  delete(id: string): Promise<void>;
  save(entity: TEntity): Promise<void>;
}