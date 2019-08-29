import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasillosComponent } from './pasillos.component';

describe('PasillosComponent', () => {
  let component: PasillosComponent;
  let fixture: ComponentFixture<PasillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
