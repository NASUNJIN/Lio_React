if(process.env.NOED_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}