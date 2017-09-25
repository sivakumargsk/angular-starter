import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFotterComponent } from './todo-fotter.component';

describe('TodoFotterComponent', () => {
  let component: TodoFotterComponent;
  let fixture: ComponentFixture<TodoFotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
