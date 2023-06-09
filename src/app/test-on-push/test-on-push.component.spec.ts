import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnPushComponent } from './test-on-push.component';

describe('TestOnPushComponent', () => {
  let component: TestOnPushComponent;
  let fixture: ComponentFixture<TestOnPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOnPushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
