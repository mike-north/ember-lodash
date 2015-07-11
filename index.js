/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'lodash',

  treeForAddon: function(tree) {
    var lodashPath = path.join(this.project.addonPackages['ember-lodash'].path, 'node_modules', 'lodash-es');
    var lodashTree = this.treeGenerator(lodashPath);

    var trees = mergeTrees([lodashTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
