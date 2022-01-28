import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoDarAdopcionComponent } from './como-dar-adopcion.component';

describe('ComoDarAdopcionComponent', () => {
  let component: ComoDarAdopcionComponent;
  let fixture: ComponentFixture<ComoDarAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoDarAdopcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoDarAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
