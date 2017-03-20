/* jshint node: true */
'use strict';

var path = require('path');
var replace = require('broccoli-string-replace');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'lodash',

  _shouldCompileJS: function() {
    return true;
  },

  treeForAddon: function(tree) {
    var lodashPath = path.dirname(require.resolve('lodash-es'));

    let lodashTree = replace(lodashPath, {
      files: [ '*.js' ],
      pattern: {
        match: /\.js/g,
        replacement: ''
      }
    });

    lodashTree = new Funnel(lodashTree, {
      getDestinationPath: function(path) {
        if (path === 'lodash.js') {
          return 'index.js';
        }

        return path;
      }
    });

    lodashTree = replace(lodashTree, {
      files: [ '_getNative.js' ],
      pattern: {
        match: /undefined/g,
        replacement: 'null'
      }
    });

    if (tree) {
      tree = mergeTrees([lodashTree, tree], {
        overwrite: true
      });
    } else {
      tree = lodashTree;
    }

    return this._super.treeForAddon.call(this, tree);
  }
};
