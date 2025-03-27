import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentUpdateComponent } from './asignment-update.component';

describe('AsignmentUpdateComponent', () => {
  let component: AsignmentUpdateComponent;
  let fixture: ComponentFixture<AsignmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignmentUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
