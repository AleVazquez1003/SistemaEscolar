import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnCreateComponent } from './turn-create.component';

describe('TurnCreateComponent', () => {
  let component: TurnCreateComponent;
  let fixture: ComponentFixture<TurnCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
