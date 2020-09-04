import { IServiceBase } from "../ServiceBase/IServiceBase";
import { ResponseViewModel } from "../../../viewModels/Response/ResponseViewModel";
import { AddUserRequestViewModel } from "../../../viewModels/Request/User/AddUserRequestViewModel";

export interface IAddUserService extends IServiceBase<AddUserRequestViewModel, ResponseViewModel>{

}