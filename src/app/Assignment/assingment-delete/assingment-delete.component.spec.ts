import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingmentDeleteComponent } from './assingment-delete.component';

describe('AssingmentDeleteComponent', () => {
  let component: AssingmentDeleteComponent;
  let fixture: ComponentFixture<AssingmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssingmentDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssingmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
