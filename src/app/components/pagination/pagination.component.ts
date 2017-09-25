import { Component, Input, Output, EventEmitter } from '@angular/core';

const range = (start: number, end: number): number[] => {
  let result: number[] = [];
  for (let item = start; item <= end; ++item) {
    result = [...result, item];
  }
  return result;
};

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() activePage = 1;
  @Input() maxButtons = 5;
  @Input() items = 0;
  @Output() onSelect: EventEmitter<number> = new EventEmitter<number>();

  isActivePageEqualToOne() {
    return this.activePage <= 1;
  }

  isActivePageEqualToItems() {
    return !(this.activePage < this.items);
  }

  generatePageNumbersList(activePage, maxButtons, items) {
    if (maxButtons < items) {
      const startPage = Math.max(
        Math.min(
          activePage - Math.floor(maxButtons / 2),
          items - maxButtons + 1
        ),
        1
      );
      const endPage = startPage + maxButtons - 1;
      return range(startPage, endPage);
    } else {
      return range(1, items);
    }
  }

  setActivePage(pageIndex: number) {
    this.activePage = pageIndex;
    this.onSelect.emit(this.activePage);
  }
  previousPageOnClick() {
    this.activePage -= 1;
    this.onSelect.emit(this.activePage);
  }
  nextPageOnClick() {
    this.activePage += 1;
    this.onSelect.emit(this.activePage);
  }
}
