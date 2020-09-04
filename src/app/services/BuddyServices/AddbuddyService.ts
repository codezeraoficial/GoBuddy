import { IAddBuddyService } from "../../Interfaces/IServices/Buddy/IAddBuddyService";
import { AddBuddyRequestViewModel } from "../../viewModels/Request/Buddy/AddBuddyRequestViewModel";
import { ResponseViewModel } from "../../viewModels/Response/ResponseViewModel";
import Buddy from "../../domain/models/buddy/Buddy";
import { getRepository } from "typeorm";

export class AddBuddyService implements IAddBuddyService {
  async execute(request: AddBuddyRequestViewModel): Promise<ResponseViewModel> {
    const repository = getRepository(Buddy);    
    const entity = repository.create(new Buddy(request));

    await repository.save(entity);
    return { success: true };
  }
 
}
