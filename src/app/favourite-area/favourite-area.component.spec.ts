import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteAreaComponent } from './favourite-area.component';

describe('FavouriteAreaComponent', () => {
  let component: FavouriteAreaComponent;
  let fixture: ComponentFixture<FavouriteAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
