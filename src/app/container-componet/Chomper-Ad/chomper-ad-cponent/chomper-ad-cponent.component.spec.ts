import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChomperAdCponentComponent } from './chomper-ad-cponent.component';

describe('ChomperAdCponentComponent', () => {
  let component: ChomperAdCponentComponent;
  let fixture: ComponentFixture<ChomperAdCponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChomperAdCponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChomperAdCponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
