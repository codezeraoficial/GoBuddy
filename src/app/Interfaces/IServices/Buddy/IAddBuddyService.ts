import { IServiceBase } from "../ServiceBase/IServiceBase";
import { AddBuddyRequestViewModel } from "../../../viewModels/Request/Buddy/AddBuddyRequestViewModel";
import { ResponseViewModel } from "../../../viewModels/Response/ResponseViewModel";

export interface IAddBuddyService extends IServiceBase<AddBuddyRequestViewModel, ResponseViewModel>{
  
} 