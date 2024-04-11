import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { SpyonServiceService } from "./spyon-service.service";

describe("SpyonServiceService", () => {
  let service: SpyonServiceService;

  const logger = jasmine.createSpy("log");
  const status = jasmine.createSpyObj("service", ["name", "age", "email"]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("deve criar metodo com jasmine create spy ", () => {
    logger("Loguei no sistema");
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith("Loguei no sistema");
  });

  fit("deve criar metodo com jasmine.createSpyObj", () => {
    status.name("Danilo");
    status.email("vinicios@gmail.com");
    status.age(23);
    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.email).toHaveBeenCalledWith("vinicios@gmail.com");
    expect(status.age).toHaveBeenCalledTimes(1);
  });
});
