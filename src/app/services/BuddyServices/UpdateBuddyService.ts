import { ResponseViewModel } from "../../viewModels/Response/ResponseViewModel";
import Buddy from "../../domain/models/buddy/Buddy";
import { getRepository } from "typeorm";
import { IUpdateBuddyService } from "../../Interfaces/IServices/Buddy/IUpdateBuddyService";
import { UpdateBuddyRequestViewModel } from "../../viewModels/Request/Buddy/UpdateBuddyRequestViewModel";

export class UpdateBuddyService implements IUpdateBuddyService {
  async execute(request: UpdateBuddyRequestViewModel): Promise<ResponseViewModel> {
    const repository = getRepository(Buddy);
    await repository.update(request.id, new Buddy(request));
    return { success: true };
  }
 
}
