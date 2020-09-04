import User from "../../../domain/models/user/user";

export interface UpdateBuddyRequestViewModel{
  id: string;
  name: string;
  tag: string;
  breed: string;
  birthDate: Date;
  details: string;
  user: User

}