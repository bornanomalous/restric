/*
 * Create and export configuration variables
 */

// Container for all the environments
const environments = {};

// Staging (default) environment
environments.staging = {
    'httpPort': 3000,
    'httpsPort': 3001,
    'mongoURL': "mongodb+srv://shivu:Paganizonda5050@cluster0.ozpzz.mongodb.net/<dbname>?retryWrites=true&w=majority",
    'ENV_NAME': 'Staging',
};

// Produntion environment
environments.production = {
    'httpPort': 80,
    'httpsPort': 443,
    'mongoURL': "mongodb+srv://shivu:Paganizonda5050@cluster0.ozpzz.mongodb.net/<dbname>?retryWrites=true&w=majority",
    'ENV_NAME': 'Production',
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check if the currnet environment is one of the environments defined above, if not, default to staging
const environmentToExport = typeof (environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;