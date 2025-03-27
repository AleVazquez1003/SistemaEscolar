import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnDeleteComponent } from './turn-delete.component';

describe('TurnDeleteComponent', () => {
  let component: TurnDeleteComponent;
  let fixture: ComponentFixture<TurnDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
