import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeUpdateComponent } from './service-type-update.component';

describe('ServiceTypeUpdateComponent', () => {
  let component: ServiceTypeUpdateComponent;
  let fixture: ComponentFixture<ServiceTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTypeUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
