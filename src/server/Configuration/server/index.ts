import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';

import {Routes} from '../../Routes';

import 'reflect-metadata';
import '../../../data/database/connect';

 class Server {
  public app: express.Application;
  public routeprv: Routes = new Routes();


  constructor() {
    this.app = express();
    this.server();
    this.routeprv.routes(this.app);
  }

  public server(): void{
    this.app.use(cors());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({extended: false}));
  }

}

export default new Server().app;