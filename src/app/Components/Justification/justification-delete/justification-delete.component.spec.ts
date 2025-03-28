import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificationDeleteComponent } from './justification-delete.component';

describe('JustificationDeleteComponent', () => {
  let component: JustificationDeleteComponent;
  let fixture: ComponentFixture<JustificationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustificationDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
