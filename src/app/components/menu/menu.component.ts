import {Component} from '@angular/core';
import {IMenuCategory, IMenuItem, menuCategories} from './menu';
import isString from 'lodash-es/isString';
import cloneDeep from 'lodash-es/cloneDeep';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menu: Array<IMenuCategory> = cloneDeep(menuCategories);
  public filterValue: string;

  public filterMenuItems(filter: string): void {
    this.menu = cloneDeep(menuCategories);

    if (isString(filter) && filter.trim().length > 0) {
      this.menu = this.menu.filter((category: IMenuCategory) => {
        category.items = category.items.filter((item: IMenuItem) => {
          return new RegExp(filter.trim(), 'gi').test(item.name);
        });

        return category.items.length > 0;
      });
    }
  }
}
