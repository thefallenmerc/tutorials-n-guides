const fs = require('fs');
const os = require('os');
const path = require('path');

const express = require('express');

const app = express();

const port = 2323;

const staticDir = 'static';

const source = path.join(__dirname, staticDir, 'src');

console.log('Starting the scan...');
fs.writeFileSync(staticDir + '/content.json', JSON.stringify(scanDirectoryRecursive(source), null, 2));
console.log("Scan successful!");

if (!process.argv.includes('--scanonly')) {
    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.use(express.static('static')).listen(port);

    console.log('Listening at the port: ' + port);
    console.log('Server at: http://localhost:' + port);
}


function scanDirectoryRecursive(route = './') {

    const structure = [];

    for (let item of fs.readdirSync(route)) {
        const itemPath = path.join(route, item);
        const itemStat = fs.lstatSync(itemPath);
        if (itemStat.isDirectory()) {
            structure.push({
                content: scanDirectoryRecursive(itemPath),
                path: itemPath.replace(path.join(__dirname, staticDir), '').replace(/\\/g, '/'),
                name: item,
                type: 'directory'
            });
        } else {
            structure.push({
                name: item,
                path: itemPath.replace(path.join(__dirname, staticDir), '').replace(/\\/g, '/'),
                type: 'file'
            });
        }
    }
    return structure;
}