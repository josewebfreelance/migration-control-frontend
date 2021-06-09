import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureFormComponent } from './capture-form.component';

describe('CaptureFormComponent', () => {
  let component: CaptureFormComponent;
  let fixture: ComponentFixture<CaptureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
