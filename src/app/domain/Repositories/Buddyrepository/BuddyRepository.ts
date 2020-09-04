import { RepositoryBase } from "../Base/RepositoryBase";
import Buddy from "../../models/buddy/Buddy";
import { IBuddyRepository } from "../../../Interfaces/IRepositories/IRepositoryBase/IBuddyRepository/IBuddyRepository";

export class BuddyRepository extends RepositoryBase<Buddy> implements IBuddyRepository{
  
}