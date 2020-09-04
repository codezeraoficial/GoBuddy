import { BuddyController } from "../../../Controllers/BuddyController/BuddyController";
import { AddBuddyService } from "../../../../app/services/BuddyServices/AddbuddyService";
import Buddy from "../../../../app/domain/models/buddy/Buddy";
import { BuddyRepository } from "../../../../app/domain/Repositories/Buddyrepository/BuddyRepository";
import { UpdateBuddyService } from "../../../../app/services/BuddyServices/UpdateBuddyService";


const addService = new AddBuddyService();
const updateService = new UpdateBuddyService();
const buddyController = new BuddyController(addService, updateService);


export {buddyController};