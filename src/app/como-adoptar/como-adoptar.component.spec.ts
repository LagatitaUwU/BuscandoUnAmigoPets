import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoAdoptarComponent } from './como-adoptar.component';

describe('ComoAdoptarComponent', () => {
  let component: ComoAdoptarComponent;
  let fixture: ComponentFixture<ComoAdoptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoAdoptarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoAdoptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
