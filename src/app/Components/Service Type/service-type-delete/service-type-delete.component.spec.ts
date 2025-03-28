import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeDeleteComponent } from './service-type-delete.component';

describe('ServiceTypeDeleteComponent', () => {
  let component: ServiceTypeDeleteComponent;
  let fixture: ComponentFixture<ServiceTypeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTypeDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
