import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGenerator } from './logo-generator';

describe('LogoGenerator', () => {
  let component: LogoGenerator;
  let fixture: ComponentFixture<LogoGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
