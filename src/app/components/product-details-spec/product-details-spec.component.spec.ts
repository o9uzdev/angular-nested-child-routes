import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsSpecComponent } from './product-details-spec.component';

describe('ProductDetailsSpecComponent', () => {
  let component: ProductDetailsSpecComponent;
  let fixture: ComponentFixture<ProductDetailsSpecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsSpecComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
