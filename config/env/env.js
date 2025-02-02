var env = {
    webPort: process.env.PORT || '5000',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || '27017',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbDatabase: process.env.DB_DATABASE || 'mongoRecipes'
}

var dburl = process.env.NODE_ENV === 'production' ?
    'mongodb://' + env.dbUser + ':' + env.dbPassword + '@' + env.dbHost + ':' + env.dbPort + '/' + env.dbDatabase :
    'mongodb://localhost/' + env.dbDatabase;

module.exports = {
    env: env,
    dburl: dburl
};