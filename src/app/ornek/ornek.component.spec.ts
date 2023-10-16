import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnekComponent } from './ornek.component';

describe('OrnekComponent', () => {
  let component: OrnekComponent;
  let fixture: ComponentFixture<OrnekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrnekComponent]
    });
    fixture = TestBed.createComponent(OrnekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
