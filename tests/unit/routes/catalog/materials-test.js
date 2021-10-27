import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | catalog/materials', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:catalog/materials');
    assert.ok(route);
  });
});
