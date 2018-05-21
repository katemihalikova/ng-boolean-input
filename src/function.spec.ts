// tslint:disable no-unused-expression

import { expect } from "chai";

import { convertToBoolean } from ".";

describe("convertToBoolean", () => {
  it("should consider undefined as false", () => {
    expect(convertToBoolean(undefined)).to.be.false;
  });

  it("should consider null as false", () => {
    expect(convertToBoolean(null)).to.be.false;
  });

  it("should consider the empty string as true", () => {
    expect(convertToBoolean("")).to.be.true;
  });

  it("should consider zero as false", () => {
    expect(convertToBoolean(0)).to.be.false;
  });

  it("should consider one as true", () => {
    expect(convertToBoolean(1)).to.be.true;
  });

  it("should consider the string 'false' as false", () => {
    expect(convertToBoolean("false")).to.be.false;
  });

  it("should consider the boolean false as false", () => {
    expect(convertToBoolean(false)).to.be.false;
  });

  it("should consider the boolean true as true", () => {
    expect(convertToBoolean(true)).to.be.true;
  });

  it("should consider the string 'true' as true", () => {
    expect(convertToBoolean("true")).to.be.true;
  });

  it("should consider any other string as true", () => {
    expect(convertToBoolean("foo")).to.be.true;
  });

  it("should consider an object as true", () => {
    expect(convertToBoolean({})).to.be.true;
  });

  it("should consider an array as true", () => {
    expect(convertToBoolean([])).to.be.true;
  });
});
