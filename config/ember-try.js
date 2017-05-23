/* eslint-env node */
function makeScenario(emberVersion, isLts = false, releaseVersion = null) {
  let name = `ember-${isLts ? 'lts-' : ''}${emberVersion}`;
  let version = releaseVersion || `~${emberVersion}.0`;
  return {
    name,
    bower: {
      dependencies: {
        ember: version
      },
      resolutions: {
        ember: version
      }
    },
    npm: {
      devDependencies: {
        'ember-source': null
      }
    }
  };
}

module.exports = {
  scenarios: [
    makeScenario('1.10'),
    makeScenario('1.11'),
    makeScenario('1.12'),
    makeScenario('1.13'),
    makeScenario('2.0'),
    makeScenario('2.4', true, 'components/ember#lts-2-8'),
    makeScenario('2.8', true, 'components/ember#lts-2-8'),
    makeScenario('2.10'),
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          ember: 'components/ember#release'
        },
        resolutions: {
          ember: 'release'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          ember: 'components/ember#release'
        },
        resolutions: {
          ember: 'release'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          ember: 'components/ember#beta'
        },
        resolutions: {
          ember: 'beta'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          ember: 'components/ember#canary'
        },
        resolutions: {
          ember: 'canary'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    }
  ]
};
