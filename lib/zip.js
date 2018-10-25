'use strict';

const child_process = require('child_process');
const path = require('path');
const fs = require('fs');

exports.zipFilePwd = (workPath, fileName, pwd, callback)=> {
    let zipName = path.join(workPath, fileName + '.zip');
    let filePath = path.join(workPath, fileName);
    if (fs.existsSync(zipName)) fs.unlinkSync(zipName);
    let cmd = `zip -rjP ${pwd} ${zipName}  ${filePath}`;
    child_process.exec(cmd, (err) => {
        callback(err);
    });
};

exports.zipFile = (workPath, fileName, callback)=> {
    let zipName = path.join(workPath, fileName + '.zip');
    let filePath = path.join(workPath, fileName);
    if (fs.existsSync(zipName)) fs.unlinkSync(zipName);
    let cmd = `zip -rj ${pwd} ${zipName}  ${filePath}`;
    child_process.exec(cmd, (err) => {
        callback(err);
    });
};
