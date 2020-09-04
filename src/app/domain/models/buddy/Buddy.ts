import Entity from "../Entity";
import { Column, Entity as ModelEntity, ManyToOne } from "typeorm";
import User from "../user/User";

@ModelEntity('buddies')
 class Buddy extends Entity{ 

  @Column()
  private birthDate: Date;

  @Column()
  private breed: string;

  @Column()
  private details: string;

  @Column()
  private tag: string;

  @ManyToOne(type => User, user => user.buddies)
  user?: User;

  constructor(props: Omit<Buddy, 'id'>, id?: string) {
    super();
    Object.assign(this, props);   
  }


}

export default Buddy;