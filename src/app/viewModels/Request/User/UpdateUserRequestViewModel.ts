import Buddy from "../../../domain/models/buddy/Buddy";

export interface UpdateUserRequestViewModel{
  id: string;
  name: string;
  email: string;
  password: string;
  buddies: Buddy[];
}