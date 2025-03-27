import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingmentCreateComponent } from './assingment-create.component';

describe('AssingmentCreateComponent', () => {
  let component: AssingmentCreateComponent;
  let fixture: ComponentFixture<AssingmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssingmentCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssingmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
