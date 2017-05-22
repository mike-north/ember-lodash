/* eslint-env node */
function makeScenario(emberVersion) {
  return {
    name: "ember-" + emberVersion,
    bower: {
      dependencies: {
        ember: "~" + emberVersion + ".0"
      },
      resolutions: {
        ember: "~" + emberVersion + ".0"
      }
    }
  };
}

module.exports = {
  scenarios: [
    makeScenario("1.10"),
    makeScenario("1.11"),
    makeScenario("1.12"),
    makeScenario("1.13"),
    makeScenario("2.0"),
    makeScenario("2.4"),
    makeScenario("2.8"),
    makeScenario("2.10"),
    {
      name: "ember-release",
      bower: {
        dependencies: {
          ember: "components/ember#release"
        },
        resolutions: {
          ember: "release"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: "ember-release",
      bower: {
        dependencies: {
          ember: "components/ember#release"
        },
        resolutions: {
          ember: "release"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: "ember-beta",
      bower: {
        dependencies: {
          ember: "components/ember#beta"
        },
        resolutions: {
          ember: "beta"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: "ember-canary",
      bower: {
        dependencies: {
          ember: "components/ember#canary"
        },
        resolutions: {
          ember: "canary"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    }
  ]
};
