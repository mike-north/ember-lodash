/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'lodash',

  treeForAddon: function(tree) {
    var lodashPath = path.join(this.project.root, 'node_modules', 'ember-lodash', 'node_modules', 'lodash-es');

    if (this.app.name === 'dummy') {
      lodashPath = path.join(this.project.root, 'node_modules', 'lodash-es');
    }

    var lodashTree = this.treeGenerator(lodashPath);

    var trees = mergeTrees([lodashTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  },
};
