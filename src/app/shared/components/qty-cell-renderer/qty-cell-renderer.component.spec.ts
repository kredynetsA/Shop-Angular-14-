import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtyCellRendererComponent } from './qty-cell-renderer.component';

describe('QtyCellRendererComponent', () => {
  let component: QtyCellRendererComponent;
  let fixture: ComponentFixture<QtyCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtyCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtyCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
