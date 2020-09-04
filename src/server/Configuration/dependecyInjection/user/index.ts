import { UserController } from "../../../Controllers/UserController/UserController";
import { AddUserService } from "../../../../app/services/UserServices/AddUserService";
import User from "../../../../app/domain/models/user/User";
import { UpdateUserService } from "../../../../app/services/UserServices/UpdateUserService";


const addService = new AddUserService();
const updateService = new UpdateUserService();
const userController = new UserController(addService, updateService);


export {userController};