import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageFIxComponent } from './details-page-fix.component';

describe('DetailsPageFIxComponent', () => {
  let component: DetailsPageFIxComponent;
  let fixture: ComponentFixture<DetailsPageFIxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPageFIxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageFIxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
