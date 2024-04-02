const path = require('path');
const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: [path.join(__dirname, 'tests/setup-tests.ts')],
};
