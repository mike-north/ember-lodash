import _ from 'lodash/lodash';
import _date from 'lodash/date';
import _string from 'lodash/string';
import { module, test } from 'qunit';

module('Unit | Utility | lodash exports');

test('lodash as a single module has been exported', function(assert) {
  assert.ok(_, 'lodash is exported');
  assert.equal(typeof _.sortBy, 'function', 'lodash has a known function on it (sortBy)');
});

test('lodash individual modules have been exported', function(assert) {
  assert.ok(_date, 'lodash date is exported alone');
  assert.equal(typeof _date.now, 'function', 'lodash date#now() exists');

  assert.ok(_string, 'lodash string is exported alone');
  assert.equal(typeof _string.trim, 'function', 'lodash string#trim() exists');
  assert.equal(typeof _string.truncate, 'function', 'lodash string#truncate() exists');
});
