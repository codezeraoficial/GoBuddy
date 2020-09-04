import { Request, Response } from "express";
import { AddBuddyRequestViewModel } from "../../../app/viewModels/Request/Buddy/AddBuddyRequestViewModel";
import { IAddBuddyService } from "../../../app/Interfaces/IServices/Buddy/IAddBuddyService";
import { IUpdateBuddyService } from "../../../app/Interfaces/IServices/Buddy/IUpdateBuddyService";
import { UpdateBuddyRequestViewModel } from "../../../app/viewModels/Request/Buddy/UpdateBuddyRequestViewModel";

export class BuddyController {
  constructor(private addservice: IAddBuddyService, private updateservice: IUpdateBuddyService) {
    this.store = this.store.bind(this);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const model: AddBuddyRequestViewModel = req.body;
    const result = await this.addservice.execute(model);
    return res.status(201).send(result);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const model: UpdateBuddyRequestViewModel = req.body;
    const result = await this.updateservice.execute(model);
    return res.status(201).send(result);
  }
}
