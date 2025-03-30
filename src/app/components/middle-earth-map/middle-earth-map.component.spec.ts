import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleEarthMapComponent } from './middle-earth-map.component';

describe('MiddleEarthMapComponent', () => {
  let component: MiddleEarthMapComponent;
  let fixture: ComponentFixture<MiddleEarthMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleEarthMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleEarthMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
