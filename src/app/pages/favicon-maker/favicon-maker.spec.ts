import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaviconMaker } from './favicon-maker';

describe('FaviconMaker', () => {
  let component: FaviconMaker;
  let fixture: ComponentFixture<FaviconMaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaviconMaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaviconMaker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
