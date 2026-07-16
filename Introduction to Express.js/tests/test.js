const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const { exec } = require("child_process");

chai.use(chaiHttp);

describe("Express Server Tests", function () {
  let serverProcess;

  this.timeout(5000);

  before((done) => {
    serverProcess = exec("node src/index.js", (error, stdout, stderr) => {
      if (error) {
        console.error(`Server error: ${stderr}`);
      }
    });

    setTimeout(done, 2000);
  });

  after(() => {
    if (serverProcess) {
      serverProcess.kill();
    }
  });

  // TC-001: Server should start on port 3000 with GET / returning status 200
  it("TC-001: should start the server on port 3000 and return status 200", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/")
      .end((err, res) => {
        if (err) {
          return done(
            new Error("Expected server to be running on port 3000")
          );
        }

        expect(res).to.have.status(200);
        done();
      });
  });

  // TC-002: GET / should return exact text: "We are learning Express"
  it('TC-002: should respond with exact text "We are learning Express"', (done) => {
    chai
      .request("http://localhost:3000")
      .get("/")
      .end((err, res) => {
        expect(res.text).to.equal("We are learning Express");
        done();
      });
  });

  // TC-003: Repeated GET / requests should return identical responses
  it("TC-003: should return the same response on repeated requests", (done) => {
    let firstResponse;
    
    chai
      .request("http://localhost:3000")
      .get("/")
      .end((err, res1) => {
        firstResponse = res1.text;
        
        chai
          .request("http://localhost:3000")
          .get("/")
          .end((err, res2) => {
            expect(res2.text).to.equal(firstResponse);
            expect(res2.status).to.equal(200);
            expect(res1.status).to.equal(res2.status);
            done();
          });
      });
  });

  // TC-004: Response body should be a non-empty string
  it("TC-004: should return a non-empty response body", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/")
      .end((err, res) => {
        expect(res.text).to.exist;
        expect(res.text.length).to.be.greaterThan(0);
        expect(res.text.trim()).to.not.be.empty;
        done();
      });
  });
});
