import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainterComponentComponent } from './containter-component.component';

describe('ContainterComponentComponent', () => {
  let component: ContainterComponentComponent;
  let fixture: ComponentFixture<ContainterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
