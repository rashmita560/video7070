import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgbPaginationModule,CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  totalItems = 120;
  currentPage = 1;
  itemsPerPage = 10;
  pagedItems: string[] = []; // Change here: declare pagedItems as string[]

  constructor() { }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getPagedItems();
  }

  getPagedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedItems = this.getItems().slice(start, end);
  }

  getItems(): string[] { // Change here: declare getItems as returning string[]
    // Return an array of items, e.g. from a database or API
    return Array.from({ length: this.totalItems }, (_, i) => `Item ${i + 1}`);
  }
}
