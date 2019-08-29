import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomovComponent } from './tipomov.component';

describe('TipomovComponent', () => {
  let component: TipomovComponent;
  let fixture: ComponentFixture<TipomovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipomovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
