'use strict';
const _ = require('underscore');
const path = require('path');
const fs = require('fs');

const CONFIG = {
    areas: [],
    areaMap: {},
    codeMap: {}
};

const dataPath = path.join(__dirname, './area.txt');
const rawData = fs.readFileSync(dataPath, 'utf-8');
for (let line of rawData.split('\n')) {
    let info = line.split(/\s+/);
    CONFIG.areas.push({code: info[0], name: info[1]});
    CONFIG.areaMap[info[0]] = info[1];
}

const dataPath1 = path.join(__dirname, './code_map.txt');
const rawData1 = fs.readFileSync(dataPath1, 'utf-8');
for(let line of rawData1.split('\n')) {
    line = line.trim();
    if (!line) continue;
    let info = line.split(/\s+/);
    CONFIG.codeMap[info[0]] = info[1];
}

let cArea = {};
for (let a of CONFIG.areas) {
    let provCode = a.code.slice(0, 2);
    let province = cArea[provCode];
    if (!province) {
        province = {cities: []};
        cArea[provCode] = province;
    }
    if (/0000$/.test(a.code)) {
        province.name = a.name;
    } else if (!/00$/.test(a.code)) {
        province.cities.push(a);
    }
}
CONFIG.cArea = cArea;
// console.log('cArea', cArea);


// let s = `var AreaData = ${JSON.stringify(cArea, null, 4)};`;
// const filePath2 = path.join(__dirname, 'public/operation/script/AreaData.js');
// fs.writeFileSync(filePath2, s);

exports.getAreaName = (area)=> {
    return CONFIG.areaMap[area];
};

exports.getProvinceCityCodes = (area)=> {
    let provinceCode = area.substr(0, 2);
    let areas = [];
    for(let o of CONFIG.areas) {
        if (o.code.indexOf(provinceCode) == 0) areas.push(o);
    }
    return areas;
};

exports.getAreaCodes = (area)=> {
    let provinceCode = area.substr(0, 2);
    let areas = [];
    for(let o of CONFIG.areas) {
        if (o.code.indexOf(provinceCode) == 0) areas.push(o.code);
    }
    return areas;
};

exports.getAreaCodesByCodes = (list)=> {
    let result = [];
    for(let o of list) {
        result = _.union(result, exports.getAreaCodes(o));
    }
    return result;
};

exports.getProvinceCodes = (list)=> {
    let provinceCodes = [];
    for(let o of list) provinceCodes.push(o.substr(0, 2));
    return provinceCodes;
};

exports.areaConfig = CONFIG;

// console.log('getAreaName', exports.getAreaName('990101'));
// console.log('getProvinceCityCodes', exports.getProvinceCityCodes('990101'));
// console.log('getAreaCodes', exports.getAreaCodes('990101'));
//
// console.log('getAreaCodesByCodes', exports.getAreaCodesByCodes(['990101', '530901']));
// console.log('getProvinceCodes', exports.getProvinceCodes(['990101', '530901']));
