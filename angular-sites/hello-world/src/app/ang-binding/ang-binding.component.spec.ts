import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngBindingComponent } from './ang-binding.component';

describe('AngBindingComponent', () => {
  let component: AngBindingComponent;
  let fixture: ComponentFixture<AngBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
