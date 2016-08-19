function makeScenario(emberVersion) {
  return {
    name: 'ember-' + emberVersion,
    bower: {
      dependencies: {
        'ember': '~' + emberVersion + '.0'
      },
      resolutions: {
        'ember': '~' + emberVersion + '.0'
      }
    }
  }
}

/*jshint node:true*/
module.exports = {
  scenarios: [
    makeScenario('1.10'),
    makeScenario('1.11'),
    makeScenario('1.12'),
    makeScenario('1.13'),
    makeScenario('2.0'),
    makeScenario('2.1'),
    makeScenario('2.2'),
    makeScenario('2.3'),
    makeScenario('2.4'),
    makeScenario('2.5'),
    makeScenario('2.6'),
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    }
  ]
};
