/* jshint node: true */
'use strict';

var path = require('path');
var replace = require('broccoli-string-replace');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var BroccoliDebug = require('broccoli-debug');

module.exports = {
  name: 'lodash',

  init() {
    this._super.init && this._super.init.apply(this, arguments);

    this._debugTree = BroccoliDebug.buildDebugCallback('ember-lodash');
  },


  _shouldCompileJS: function() {
    return true;
  },

  treeForAddon: function(tree) {
    var lodashPath = path.dirname(require.resolve('lodash-es'));

    let lodashTree = this._debugTree(lodashPath, 'input');

    lodashTree = replace(lodashTree, {
      files: [ '*.js' ],
      pattern: {
        match: /\.js/g,
        replacement: ''
      }
    });

    lodashTree = this._debugTree(lodashTree, 'post-extension-replace');

    lodashTree = new Funnel(lodashTree, {
      getDestinationPath: function(path) {
        if (path === 'lodash.js') {
          return 'index.js';
        }

        return path;
      }
    });

    lodashTree = this._debugTree(lodashTree, 'post-index-move');

    lodashTree = replace(lodashTree, {
      files: [ '_getNative.js' ],
      pattern: {
        match: /undefined/g,
        replacement: 'null'
      }
    });

    lodashTree = replace(lodashTree, {
      files: [ '_defineProperty.js' ],
      pattern: {
        match: /catch(e) { }/g,
        replacement: 'catch(e) { return null; }'
      }
    });

    lodashTree = this._debugTree(lodashTree, 'post-replacement');

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
