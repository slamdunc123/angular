import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotcharacterComponent } from './gotcharacter.component';

describe('GotcharacterComponent', () => {
  let component: GotcharacterComponent;
  let fixture: ComponentFixture<GotcharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotcharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
