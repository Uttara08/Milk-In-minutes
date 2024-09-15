import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyProductsRequestsComponent } from './dairy-products-requests.component';

describe('DairyProductsRequestsComponent', () => {
  let component: DairyProductsRequestsComponent;
  let fixture: ComponentFixture<DairyProductsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DairyProductsRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DairyProductsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
