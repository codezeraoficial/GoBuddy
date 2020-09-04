import { IUpdateUserService } from "../../Interfaces/IServices/User/IUpdateUserService";
import { UpdateUserRequestViewModel } from "../../viewModels/Request/User/UpdateUserRequestViewModel";
import { ResponseViewModel } from "../../viewModels/Response/ResponseViewModel";
import User from "../../domain/models/user/user";
import { getRepository } from "typeorm";

export class UpdateUserService implements IUpdateUserService{
  async execute(request: UpdateUserRequestViewModel): Promise<ResponseViewModel> {
    const repository = getRepository(User);
    await repository.update(request.id, new User(request));
    return { success: true };
  }

}