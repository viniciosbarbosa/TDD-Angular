import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SpyonComponent } from "./spyon.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SpyonServiceService } from "../service/spyon-service.service";
import { of } from "rxjs";

describe("SpyonComponent", () => {
  let component: SpyonComponent;
  let fixture: ComponentFixture<SpyonComponent>;
  let service: SpyonServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpyonComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    service = TestBed.inject(SpyonServiceService);

    fixture = TestBed.createComponent(SpyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Deve logar usuario no sistema ao clicar btn", () => {
    let spiedComponent = spyOn(component, "isLogged").and.callThrough();

    component.isLogged();

    expect(spiedComponent).toHaveBeenCalledTimes(1);
    expect(component.logged).toBe(true);
  });

  it("Deve retonar uma lista de usuario", () => {
    const response = [
      { name: "vinicius", age: 23, email: "vinicios@gmail.com" },
      { name: "jose", age: 40, email: "jose@gmail.com" },
      { name: "maria", age: 39, email: "maria@gmail.com" },
    ];

    spyOn(service, "getUsers").and.returnValue(of(response));

    service.getUsers().subscribe((res) => {
      expect(res).toEqual(response);
    });
  });
});
