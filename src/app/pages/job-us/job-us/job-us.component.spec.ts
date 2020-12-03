import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobUsComponent } from './job-us.component';

describe('JobUsComponent', () => {
  let component: JobUsComponent;
  let fixture: ComponentFixture<JobUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
