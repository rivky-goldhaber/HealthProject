import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  expandedCategories: string[] = [];
  updatedDate: string = '';

  ngOnInit() {
    const currentDate = new Date();
    this.updatedDate = new DatePipe('en-US').transform(currentDate, 'dd/MM/yyyy HH:mm') || '';
  }

  toggleCategory(category: string) {
    if (this.isCategoryExpanded(category)) {
      this.expandedCategories = this.expandedCategories.filter(c => c !== category);
    } else {
      this.expandedCategories.push(category);
    }
  }

  isCategoryExpanded(category: string) {
    return this.expandedCategories.includes(category);
  }


}
