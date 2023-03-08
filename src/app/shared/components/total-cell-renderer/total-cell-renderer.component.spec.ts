import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCellRendererComponent } from './total-cell-renderer.component';

describe('TotalCellRendererComponent', () => {
  let component: TotalCellRendererComponent;
  let fixture: ComponentFixture<TotalCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
