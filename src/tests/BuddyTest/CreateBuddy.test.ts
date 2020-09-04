
import { expect } from "chai";
import * as request from "supertest";



import app from "../../server/Configuration/server";


describe("POST /vehicles", () => {
  
  it("OK, creating a new pet (buddy)", (done) => {
    request(app)
      .post("/buddies")
      .send({
        name: "Poseidon",
        birthDate: "Mon Aug 31 2020 15:45:32",
        breed: "Doberman",
        details: "Bom cão de guarda"        
      })
      .then((res) => {
        const response: number = res.status;
        expect(response).to.equal(201);             
        done();
      })
      .catch((err: Error) => done(err));
  });

});