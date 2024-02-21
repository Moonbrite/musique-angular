import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueDetailComponent } from './musique-detail.component';

describe('MusiqueDetailComponent', () => {
  let component: MusiqueDetailComponent;
  let fixture: ComponentFixture<MusiqueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusiqueDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusiqueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
