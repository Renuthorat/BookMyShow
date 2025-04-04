import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComponent } from './one.component';

describe('OneComponent', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// https://media3.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=ecf05e47fdvlr9k79i9n1h43ti8d47xabq9fli84dwgk7skj&rid=giphy.gif
// ^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$

