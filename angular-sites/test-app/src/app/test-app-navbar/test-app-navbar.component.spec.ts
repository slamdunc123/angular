import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppNavbarComponent } from './test-app-navbar.component';

describe('TestAppNavbarComponent', () => {
  let component: TestAppNavbarComponent;
  let fixture: ComponentFixture<TestAppNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAppNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
