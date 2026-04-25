import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: Product[], searchText: string): Product[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(searchText);
      const categoryMatch = item.category.toLowerCase().includes(searchText);
      return nameMatch || categoryMatch;
    });
  }

}
