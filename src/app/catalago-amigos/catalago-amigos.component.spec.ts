import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalagoAmigosComponent } from './catalago-amigos.component';

describe('CatalagoAmigosComponent', () => {
  let component: CatalagoAmigosComponent;
  let fixture: ComponentFixture<CatalagoAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalagoAmigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalagoAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
