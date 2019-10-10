import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeebBackComponent } from './view-feeb-back.component';

describe('ViewFeebBackComponent', () => {
  let component: ViewFeebBackComponent;
  let fixture: ComponentFixture<ViewFeebBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFeebBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeebBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
