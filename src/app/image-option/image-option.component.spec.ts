import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOptionComponent } from './image-option.component';

describe('ImageOptionComponent', () => {
  let component: ImageOptionComponent;
  let fixture: ComponentFixture<ImageOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
