import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingmentListComponent } from './assingment-list.component';

describe('AssingmentListComponent', () => {
  let component: AssingmentListComponent;
  let fixture: ComponentFixture<AssingmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssingmentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssingmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
