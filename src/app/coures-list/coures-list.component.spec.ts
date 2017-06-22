import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouresListComponent } from './coures-list.component';

describe('CouresListComponent', () => {
  let component: CouresListComponent;
  let fixture: ComponentFixture<CouresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
