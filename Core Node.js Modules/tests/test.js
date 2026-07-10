const { expect } = require("chai");

describe("Counter Module", function () {
  let counterModule;

  beforeEach(function () {
    delete require.cache[require.resolve("../src/index")];
    counterModule = require("../src/index");
  });

  it("should return 0 initially", function () {
    expect(counterModule.getCount()).to.equal(0);
  });

  it("should increment the counter", function () {
    counterModule.increment();
    expect(counterModule.getCount()).to.equal(1);
  });

  it("should decrement the counter", function () {
    counterModule.increment();
    counterModule.increment();
    counterModule.decrement();

    expect(counterModule.getCount()).to.equal(1);
  });

  it("should maintain private count variable", function () {
    expect(counterModule.count).to.be.undefined;
  });

  it("should not allow direct modification of counter", function () {
    counterModule.count = 100;

    expect(counterModule.getCount()).to.not.equal(100);
  });
});