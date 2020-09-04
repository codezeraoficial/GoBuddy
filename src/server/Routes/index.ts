import { buddyController } from "../Configuration/dependecyInjection/buddy";
import * as express from 'express';
import { userController } from "../Configuration/dependecyInjection/user";

export class Routes {
  public routes(app: express.Application): void {
    
    app.route("/users").post(userController.store);
    app.route("/users").put(userController.update);

    app.route("/buddies").post(buddyController.store);
    app.route("/buddies").put(buddyController.update);


  }
}


