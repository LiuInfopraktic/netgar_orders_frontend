import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseordersRegisterComponent } from './purchaseorders-register.component';

describe('PurchaseordersRegisterComponent', () => {
  let component: PurchaseordersRegisterComponent;
  let fixture: ComponentFixture<PurchaseordersRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseordersRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseordersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
