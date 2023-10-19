import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourProjectComponent } from './four-project.component';

describe('FourProjectComponent', () => {
  let component: FourProjectComponent;
  let fixture: ComponentFixture<FourProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourProjectComponent]
    });
    fixture = TestBed.createComponent(FourProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
