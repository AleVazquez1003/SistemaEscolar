import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomCreateComponent } from './classroom-create.component';

describe('ClassroomCreateComponent', () => {
  let component: ClassroomCreateComponent;
  let fixture: ComponentFixture<ClassroomCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
