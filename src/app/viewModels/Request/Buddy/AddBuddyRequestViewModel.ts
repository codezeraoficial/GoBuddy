import User from "../../../domain/models/user/user";

export interface AddBuddyRequestViewModel{
  name: string;
  tag: string;
  breed: string;
  birthDate: Date;
  details: string;
  user?: User
}