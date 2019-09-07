import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyControlLibraryComponent } from './my-control-library.component';

describe('MyControlLibraryComponent', () => {
  let component: MyControlLibraryComponent;
  let fixture: ComponentFixture<MyControlLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyControlLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyControlLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
