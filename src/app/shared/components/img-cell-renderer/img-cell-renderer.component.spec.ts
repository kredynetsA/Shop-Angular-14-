import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCellRendererComponent } from './img-cell-renderer.component';

describe('ImgCellRendererComponent', () => {
  let component: ImgCellRendererComponent;
  let fixture: ComponentFixture<ImgCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
