import Model from '@ember-data/model';
import { attr, hasMany, belongsTo } from '@ember-data/model';
export default class ItemModel extends Model {
  @attr('string') label;

  // Relationships
  @belongsTo('catalog', { async: true, inverse: null }) catalog;
  @hasMany('tag', { async: true, inverse: null }) tags;
}
