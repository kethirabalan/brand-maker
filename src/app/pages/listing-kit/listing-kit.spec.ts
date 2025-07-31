import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingKit } from './listing-kit';

describe('ListingKit', () => {
  let component: ListingKit;
  let fixture: ComponentFixture<ListingKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingKit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
