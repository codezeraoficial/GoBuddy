import { Request, Response } from "express";
import { IAddUserService } from "../../../app/Interfaces/IServices/User/IAddUserService";
import { IUpdateUserService } from "../../../app/Interfaces/IServices/User/IUpdateUserService";
import { AddUserRequestViewModel } from "../../../app/viewModels/Request/User/AddUserRequestViewModel";
import { UpdateUserRequestViewModel } from "../../../app/viewModels/Request/User/UpdateUserRequestViewModel";

export class UserController {
  constructor(private addservice: IAddUserService, private updateservice: IUpdateUserService) {
    this.store = this.store.bind(this);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const model: AddUserRequestViewModel = req.body;
    const result = await this.addservice.execute(model);
    return res.status(201).send(result);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const model: UpdateUserRequestViewModel = req.body;
    const result = await this.updateservice.execute(model);
    return res.status(201).send(result);
  }
}
