import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsOverviewComponent } from './product-details-overview.component';

describe('ProductDetailsOverviewComponent', () => {
  let component: ProductDetailsOverviewComponent;
  let fixture: ComponentFixture<ProductDetailsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsOverviewComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
