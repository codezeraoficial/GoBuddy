import { IAddUserService } from "../../Interfaces/IServices/User/IAddUserService";
import { AddUserRequestViewModel } from "../../viewModels/Request/User/AddUserRequestViewModel";
import { ResponseViewModel } from "../../viewModels/Response/ResponseViewModel";
import User from "../../domain/models/user/User";
import { getRepository } from "typeorm";

export class AddUserService implements IAddUserService{
  async execute(request: AddUserRequestViewModel): Promise<ResponseViewModel> {    
    const repository = getRepository(User);    
    const entity = repository.create(new User(request));
    await repository.save(entity);
    return { success: true };
  }
  
}