/// <reference types="cypress" />

// promisified fs module
const fs = require('fs-extra');
const path = require('path');

require('dotenv').config()

function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve('..', 'project3_redo/cypress/config', `${file}.json`);

    return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
    // accept a configFile value or use 'deployed' by default
    const file = config.env.configFile || 'deployed';
    config.env.RECORD_KEY = process.env.RECORD_KEY
    config.env.CODEBUILD_INITIATOR = process.env.CODEBUILD_INITIATOR

    return (config, getConfigurationByFile(file))
};