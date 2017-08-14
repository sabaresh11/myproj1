import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDispComponent } from './default-disp.component';

describe('DefaultDispComponent', () => {
  let component: DefaultDispComponent;
  let fixture: ComponentFixture<DefaultDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
