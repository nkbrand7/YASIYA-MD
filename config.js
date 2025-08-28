const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~BMA2FT4b#a091UE-F4G1jTaJwl79Hp9XCAzqP-FrlBVGBovRwWjs'
};
