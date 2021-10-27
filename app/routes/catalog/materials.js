import Route from '@ember/routing/route';

export default class CatalogRoute extends Route {
  async model(_args, transition) {
    const catalog = this.modelFor(transition.to.parent.name);
    return catalog.materials;
  }
}
