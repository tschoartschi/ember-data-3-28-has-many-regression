import Model from '@ember-data/model';
import { attr, hasMany, belongsTo } from '@ember-data/model';

export default class TagModel extends Model {
  @attr('string') label;

  // Relationships
  @belongsTo('catalog', { async: true, inverse: null }) catalog;
  @hasMany('tag', { async: true, inverse: null }) tags;
  @hasMany('tag', { inverse: null, async: true }) parents;
  @hasMany('item', { async: true, inverse: null }) items;
  @hasMany('material', { async: true, inverse: null }) materials;
}
