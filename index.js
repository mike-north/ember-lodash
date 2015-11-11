/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'lodash',

  treeForAddon: function(tree) {
    var lodashPath = require.resolve('lodash-es/lodash').replace(/\/lodash\.js$/, '');
    var lodashTree = this.treeGenerator(lodashPath);

    var trees = mergeTrees([lodashTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
