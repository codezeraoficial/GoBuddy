import { Column, Entity as ModelEntity, OneToMany } from "typeorm";
import Entity from "../Entity";
import Buddy from "../buddy/Buddy";




@ModelEntity("users")
class User extends Entity{
  @Column()
  private email: string;
  @Column()
  private password: string;


  @OneToMany(type => Buddy, buddy => buddy.user)
  buddies: Buddy[];

  constructor(props: Omit<User, 'id'>, id?: string) {
    super();
    Object.assign(this, props);   
  }


}

export default User;