import { PrimaryGeneratedColumn, Column } from "typeorm";
import {v4 as uuid} from 'uuid';

abstract class Entity{ 

  constructor() {    
    if(!this.id){
      this.id = uuid();
    }
    
  }
  
  @PrimaryGeneratedColumn('uuid')
  protected readonly id?: string;

  @Column()
  protected name: string;


  @Column({default: false})
  protected removed?: boolean;
}

export default Entity;