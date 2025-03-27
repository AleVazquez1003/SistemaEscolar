import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentListComponent } from './asignment-list.component';

describe('AsignmentListComponent', () => {
  let component: AsignmentListComponent;
  let fixture: ComponentFixture<AsignmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignmentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
