import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingmentUpdateComponent } from './assingment-update.component';

describe('AssingmentUpdateComponent', () => {
  let component: AssingmentUpdateComponent;
  let fixture: ComponentFixture<AssingmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssingmentUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssingmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
