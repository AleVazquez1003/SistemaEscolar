import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificationCreateComponent } from './justification-create.component';

describe('JustificationCreateComponent', () => {
  let component: JustificationCreateComponent;
  let fixture: ComponentFixture<JustificationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustificationCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
