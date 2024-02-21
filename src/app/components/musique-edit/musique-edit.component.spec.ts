import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueEditComponent } from './musique-edit.component';

describe('MusiqueEditComponent', () => {
  let component: MusiqueEditComponent;
  let fixture: ComponentFixture<MusiqueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusiqueEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusiqueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
