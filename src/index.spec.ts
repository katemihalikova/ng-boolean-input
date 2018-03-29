import "core-js/es6";
import "core-js/es7/reflect";
import "reflect-metadata";

import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/proxy";
import "zone.js/dist/sync-test";
import "zone.js/dist/jasmine-patch";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";

import { expect } from "chai";

import { Input, Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

import { BooleanInput } from ".";

describe("BooleanInput as function called on object", () => {
  let testObject: {test: any} = {test: undefined};
  BooleanInput(testObject, "test");

  it("should have default of false", () => {
    expect(testObject.test).to.be.false;
  });

  it("should consider undefined as false", () => {
    testObject.test = undefined;
    expect(testObject.test).to.be.false;
  });

  it("should consider null as false", () => {
    testObject.test = null;
    expect(testObject.test).to.be.false;
  });

  it("should consider the empty string as true", () => {
    testObject.test = "";
    expect(testObject.test).to.be.true;
  });

  it("should consider zero as false", () => {
    testObject.test = 0;
    expect(testObject.test).to.be.false;
  });

  it("should consider one as true", () => {
    testObject.test = 1;
    expect(testObject.test).to.be.true;
  });

  it("should consider the string 'false' as false", () => {
    testObject.test = "false";
    expect(testObject.test).to.be.false;
  });

  it("should consider the boolean false as false", () => {
    testObject.test = false;
    expect(testObject.test).to.be.false;
  });

  it("should consider the boolean true as true", () => {
    testObject.test = true;
    expect(testObject.test).to.be.true;
  });

  it("should consider the string 'true' as true", () => {
    testObject.test = "true";
    expect(testObject.test).to.be.true;
  });

  it("should consider any other string as true", () => {
    testObject.test = "foo";
    expect(testObject.test).to.be.true;
  });

  it("should consider an object as true", () => {
    testObject.test = {};
    expect(testObject.test).to.be.true;
  });

  it("should consider an array as true", () => {
    testObject.test = [];
    expect(testObject.test).to.be.true;
  });
});

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

@Component({
  selector: "test",
  template: "",
})
class TestComponent {
  @BooleanInput @Input() test: boolean;
}

describe("BooleanInput as decorator in Angular component", () => {
  let component: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
    });

    component = TestBed.createComponent(TestComponent).componentInstance;
  });

  it("should have default of false", () => {
    expect(component.test).to.be.false;
  });

  it("should consider undefined as false", () => {
    component.test = undefined;
    expect(component.test).to.be.false;
  });

  it("should consider null as false", () => {
    component.test = null;
    expect(component.test).to.be.false;
  });

  it("should consider the empty string as true", () => {
    component.test = "";
    expect(component.test).to.be.true;
  });

  it("should consider zero as false", () => {
    component.test = 0;
    expect(component.test).to.be.false;
  });

  it("should consider one as true", () => {
    component.test = 1;
    expect(component.test).to.be.true;
  });

  it('should consider the string "false" as false', () => {
    component.test = "false";
    expect(component.test).to.be.false;
  });

  it("should consider the boolean false as false", () => {
    component.test = false;
    expect(component.test).to.be.false;
  });

  it("should consider the boolean true as true", () => {
    component.test = true;
    expect(component.test).to.be.true;
  });

  it('should consider the string "true" as true', () => {
    component.test = "true";
    expect(component.test).to.be.true;
  });

  it("should consider any other string as true", () => {
    component.test = "foo";
    expect(component.test).to.be.true;
  });

  it("should consider an object as true", () => {
    component.test = {};
    expect(component.test).to.be.true;
  });

  it("should consider an array as true", () => {
    component.test = [];
    expect(component.test).to.be.true;
  });
});
