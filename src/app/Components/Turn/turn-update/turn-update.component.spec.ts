import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnUpdateComponent } from './turn-update.component';

describe('TurnUpdateComponent', () => {
  let component: TurnUpdateComponent;
  let fixture: ComponentFixture<TurnUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
