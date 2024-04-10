import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MatchersJasmineComponent } from "./matchers-jasmine.component";

describe("MatchersJasmineComponent", () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersJasmineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("deve testar o uso do matcher toEqual", () => {
    expect(true).toEqual(true);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  it("deve testar o uso do matcher tobe", () => {
    let nomes = ["vinicius", "carlos"];
    let nomes2 = ["vinicius", "carlos"];

    let age = 10;

    expect(age).toBe(10);
  });

  it("deve testar o uso do matcher toBeTruthy", () => {
    expect(true).toBeTruthy();
  });

  it("deve testar o uso do matcher toBeFalsy", () => {
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
  });

  it("deve testar o uso do matcher tobeTrue", () => {
    expect(true).toBeTrue();
  });

  it("deve testar o uso do matcher tobeFalse", () => {
    expect(false).toBeFalse();
  });

  it("deve testar o uso do matcher not", () => {
    expect("vinicius").not.toEqual("barbosa");
  });

  it("deve testar o uso do matcher toContain", () => {
    expect("Marvel").toContain("Marvel");
    expect([1, 2, 3]).toContain(3);
  });

  it("deve testar o uso do matcher toBeDefined", () => {
    let name = "vini";
    expect(name).toBeDefined();
  });

  it("deve testar o uso do matcher toBeUndefined", () => {
    let name;
    expect(name).toBeUndefined();
  });

  //aceita apena so valor nulo "" nao funciona
  it("deve testar o uso do matcher toBeNull", () => {
    expect(null).toBeNull();
  });

  it("deve testar o uso do matcher toBeNan", () => {
    expect(NaN).toBeNaN();
  });

  it("deve testar o uso do matcher toBeGreatherThan", () => {
    expect(10).toBeGreaterThan(1);
  });

  it("deve testar o uso do matcher toBeLessThan", () => {
    expect(10).toBeLessThan(20);
  });

  it("deve testar o uso do matcher toBeLessThan", () => {
    expect(30.2).toBeCloseTo(30.2, 1);
  });

  it("deve testar o uso do matcher toMatch ", () => {
    expect("Marvel").toMatch("l");
  });

  it("deve testar o uso do matcher toThrow", () => {
    expect(function () {
      throw new Error("meu erro");
    }).toThrow();
  });
});
