import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificationUpdateComponent } from './justification-update.component';

describe('JustificationUpdateComponent', () => {
  let component: JustificationUpdateComponent;
  let fixture: ComponentFixture<JustificationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustificationUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
