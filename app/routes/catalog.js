import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default class CatalogRoute extends Route {
  @service store;
  async model() {
    const catalogPromise = this.store.findRecord('catalog', 'usm');
    // This "later" just mimics what happens in our app somewhere else.
    // It's a huge app and the catalog is a central model so we
    // need it in several places, therefore it can happen that
    // there are two simultaneous calls to try to find a specific
    // catalog
    later(async () => {
      const catalog = await this.store.findRecord('catalog', 'usm');
      console.log(catalog);
    }, 1500);

    const catalog = await catalogPromise;
    console.log('hello world', catalog.allItems, catalog.tags);
    return catalog;
  }
}
