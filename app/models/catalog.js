import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class CatalogModel extends Model {
  @attr('string') name;

  // Relationships
  @hasMany('item', { async: true, inverse: null }) allItems;
  @hasMany('material', { async: true, inverse: null }) materials;
  @hasMany('tag', { async: true }) tags;
}
