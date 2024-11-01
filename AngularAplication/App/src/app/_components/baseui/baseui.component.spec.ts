import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseuiComponent } from './baseui.component';

describe('BaseuiComponent', () => {
  let component: BaseuiComponent;
  let fixture: ComponentFixture<BaseuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseuiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
