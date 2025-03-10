import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePopupComponent } from './archive-popup.component';

describe('ArchivePopupComponent', () => {
  let component: ArchivePopupComponent;
  let fixture: ComponentFixture<ArchivePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
