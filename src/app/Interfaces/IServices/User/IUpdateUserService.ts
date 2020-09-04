import { IServiceBase } from "../ServiceBase/IServiceBase";
import { ResponseViewModel } from "../../../viewModels/Response/ResponseViewModel";
import { UpdateUserRequestViewModel } from "../../../viewModels/Request/User/UpdateUserRequestViewModel";

export interface IUpdateUserService extends IServiceBase<UpdateUserRequestViewModel, ResponseViewModel>{

}