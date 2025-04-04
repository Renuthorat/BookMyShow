import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemNgcontainerComponent } from './ngtem-ngcontainer.component';

describe('NgtemNgcontainerComponent', () => {
  let component: NgtemNgcontainerComponent;
  let fixture: ComponentFixture<NgtemNgcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtemNgcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtemNgcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
