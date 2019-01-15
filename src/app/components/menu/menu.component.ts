import {AfterViewChecked, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {IMenuCategory, IMenuItem, menuCategories} from './menu';
import isString from 'lodash-es/isString';
import isNil from 'lodash-es/isNil';
import cloneDeep from 'lodash-es/cloneDeep';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewChecked {
  public menu: Array<IMenuCategory> = cloneDeep(menuCategories);
  public filterValue: string;

  @ViewChildren('menuItem', {read: ElementRef})
  private readonly menuItems: QueryList<ElementRef>;
  private hasMenuItemBeenFound = false;

  public ngAfterViewChecked(): void {
    if (this.hasMenuItemBeenFound) {
      return;
    }

    const activeMenuItem = this.menuItems.find((item: ElementRef) => item.nativeElement.classList.contains('active'));

    if (!isNil(activeMenuItem)) {
      this.hasMenuItemBeenFound = true;
      activeMenuItem.nativeElement.scrollIntoView();
    }
  }

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
