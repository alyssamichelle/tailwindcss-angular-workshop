import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillerContentComponent } from './filler-content.component';

describe('FillerContentComponent', () => {
  let component: FillerContentComponent;
  let fixture: ComponentFixture<FillerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
