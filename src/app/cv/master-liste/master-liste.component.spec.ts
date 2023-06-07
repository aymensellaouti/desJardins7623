import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterListeComponent } from './master-liste.component';

describe('MasterListeComponent', () => {
  let component: MasterListeComponent;
  let fixture: ComponentFixture<MasterListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
