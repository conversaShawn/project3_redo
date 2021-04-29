/// <reference types="cypress" />

// promisified fs module
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve('..', 'project3_redo/config', `${file}.json`);

    return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
    // accept a configFile value or use local by default
    const file = config.env.configFile || 'client';

    return getConfigurationByFile(file)
};