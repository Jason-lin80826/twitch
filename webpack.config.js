
const path = require('path');
module.exports = {
    entry: [
    './twitch.js',
    './lang-en.js',
    './lang-zh.js'
    ],
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './'),
    }
};