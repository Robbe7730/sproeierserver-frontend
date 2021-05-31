import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | battery', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:battery');
    assert.ok(route);
  });
});
