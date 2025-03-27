import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentCreateComponent } from './asignment-create.component';

describe('AsignmentCreateComponent', () => {
  let component: AsignmentCreateComponent;
  let fixture: ComponentFixture<AsignmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignmentCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
