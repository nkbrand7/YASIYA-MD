const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~9BoVHZIZ#4KSbBO9iiiTQOYZZyO00Ug-uvA6mw8nku4yumjKRoIQ'
};
