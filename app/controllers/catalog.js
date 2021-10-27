import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
export default class CatalogController extends Controller {
  @tracked showLink = false;

  constructor() {
    super();
    later(() => {
      this.showLink = true;
    }, 2000);
  }
}
