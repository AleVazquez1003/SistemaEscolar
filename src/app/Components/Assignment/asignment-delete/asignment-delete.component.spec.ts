import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentDeleteComponent } from './asignment-delete.component';

describe('AsignmentDeleteComponent', () => {
  let component: AsignmentDeleteComponent;
  let fixture: ComponentFixture<AsignmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignmentDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
