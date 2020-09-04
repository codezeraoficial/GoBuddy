import Buddy from "../../../domain/models/buddy/Buddy";

export interface AddUserRequestViewModel{
  name: string;
  email: string;
  password: string;
  buddies: Buddy[]
}