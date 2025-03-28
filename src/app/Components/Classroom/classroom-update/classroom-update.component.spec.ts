import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomUpdateComponent } from './classroom-update.component';

describe('ClassroomUpdateComponent', () => {
  let component: ClassroomUpdateComponent;
  let fixture: ComponentFixture<ClassroomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
