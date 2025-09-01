const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~4MZ2QJyb#KS_7i96h4v72A-DObTCwJBXn1QtIMp3uWIovH_6Y0IM'
};
