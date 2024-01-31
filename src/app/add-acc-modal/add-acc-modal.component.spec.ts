import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccModalComponent } from './add-acc-modal.component';

describe('AddAccModalComponent', () => {
  let component: AddAccModalComponent;
  let fixture: ComponentFixture<AddAccModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAccModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAccModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
