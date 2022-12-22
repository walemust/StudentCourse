import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentscoreComponent } from './studentscore.component';

describe('StudentscoreComponent', () => {
  let component: StudentscoreComponent;
  let fixture: ComponentFixture<StudentscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
