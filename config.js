const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~AVBUyDiZ#pW6iy7tzE3rHZAslsVAMpX7XYLmqhXSEgXht343BR_A'
};
