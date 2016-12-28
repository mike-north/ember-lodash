import _, { sortBy, toPairs } from 'lodash';
import _toPairs from 'lodash/toPairs';
import _date from 'lodash/date';
import _string from 'lodash/string';
import { module, test } from 'qunit';

module('Unit | Utility | lodash exports');

test('lodash as a single module has been exported', function(assert) {
  assert.ok(_, 'lodash is exported');
  assert.equal(typeof _.sortBy, 'function', 'lodash has a known function on it (sortBy)');
});

test('lodash as a single module expose individual modules', function(assert) {
  assert.ok(sortBy, 'sortBy is exported');
});

test('regression test on toPairs', function(assert) {
  assert.ok(_toPairs, 'toPairs from lodash is exported');
  assert.ok(toPairs, 'toPairs is exported');
  assert.deepEqual(toPairs({ a: 1 }), [['a', 1]], 'toPairs works');
});

test('lodash individual modules have been exported', function(assert) {
  assert.ok(_date, 'lodash date is exported alone');
  assert.equal(typeof _date.now, 'function', 'lodash date#now() exists');

  assert.ok(_string, 'lodash string is exported alone');
  assert.equal(typeof _string.trim, 'function', 'lodash string#trim() exists');
  assert.equal(typeof _string.truncate, 'function', 'lodash string#truncate() exists');
});
