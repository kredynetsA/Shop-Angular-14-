import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCellRendererComponent } from './desc-cell-renderer.component';

describe('DescCellRendererComponent', () => {
  let component: DescCellRendererComponent;
  let fixture: ComponentFixture<DescCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
