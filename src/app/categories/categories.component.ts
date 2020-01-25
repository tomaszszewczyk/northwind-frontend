import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  loading = false;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.loading = true;
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
        this.loading = false;
      });
  }
}
