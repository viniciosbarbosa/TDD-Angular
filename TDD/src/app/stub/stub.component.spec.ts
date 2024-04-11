import { Router } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StubComponent } from "./stub.component";

describe("StubComponent", () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StubComponent],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy("navigate");
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Deve nevegar para home quando clicar no btn", () => {
    component.goTo();

    expect(router.navigate).toHaveBeenCalledWith(["/home"]);
  });
});
