
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableComponent } from './product-table.component';

describe('ProductTableComponent', () => {
  let component: ProductTableComponent;
  let fixture: ComponentFixture<ProductTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
