import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-fotter',
  templateUrl: './todo-fotter.component.html',
  styleUrls: ['./todo-fotter.component.css']
})
export class TodoFotterComponent {
  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Input() maxButtons: number;
  @Input() items: number;
  @Output() setPageIndex: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  setVisibilityFilter: EventEmitter<string> = new EventEmitter<string>();
}
