'use strict';
const uuid = require('node-uuid');


/**
 * 生成6位数字密码
 * @returns {string}
 */
exports.createPasswd = ()=> {
    return (Math.random() + '123456').substr(2, 6);
};

/**
 * 生成多维复杂密码
 * @returns {string}
 */
exports.generatePassword = ()=> {
    let lStrs = 'abcdefghijklmnopqrstuvwxyz';
    let uStrs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let digits = '0123456789';
    let symbols = '~!@#$%^&*()_+';
    let pwd = '';
    for(let i = 0; i < 8; ++i) {
        let s = '';
        let n = parseInt(Math.random() * 10 + '');
        if (n < 3) {
            s = lStrs;
        } else if (n < 6) {
            s = uStrs;
        } else if (n < 9) {
            s = digits;
        } else {
            s = symbols;
        }
        let m = parseInt(Math.random() * s.length + '');
        pwd += s[m];
    }
    return pwd;
};

/**
 * 计算密码复杂度
 * @param pwd
 * @returns {number}
 */
exports.passwordStringMode = (pwd)=> {
    let len = pwd.length;
    let mode = 0;
    let numMode = 0;
    for (let i = 0; i < len; ++i) {
        let c = pwd.charCodeAt(i);
        if (c >= 48 && c <= 57) {
            mode |= 1;
        } else if (c >= 65 && c <= 90) {
            mode |= 2;
        } else if (c >= 97 && c <= 122) {
            mode |= 4;
        } else {
            mode |= 8;
        }
    }
    for (let i = 0; i < 4; ++i) {
        if (mode & 1) {
            numMode++;
        }
        mode = mode>>1;
    }
    return numMode;
};


/**
 * 计算唯一随机字符串
 * @returns {string}
 */
exports.getUuid = ()=> {
    return uuid.v4().split('-').join('');
};


/**
 * 获取随机数
 * @param min
 * @param max
 * @returns {*}
 */
exports.getRandomInt = (min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 返回从begin 到 end的一个随机数，不包括end
 * @param nBegin
 * @param nEnd
 * @returns {*}
 */
exports.randomByRange = (nBegin, nEnd)=> {
    if (nBegin === nEnd - 1) {
        return nBegin;
    }
    if (nBegin === nEnd) {
        return nEnd;
    }
    let t;
    if (nBegin > nEnd) {
        t = nEnd;
        nEnd = nBegin;
        nBegin = t;
    }
    let nRand = Math.floor(Math.random() * (nEnd - nBegin));
    return nBegin + nRand;
};

/**
 * 限制最大数字
 * @param number
 * @param max
 * @returns {Number}
 */
exports.limitMax = (number, max)=> {
    if (isNaN(number)) {
        number = max;
    }
    if (number > max) {
        number = max;
    }
    return parseInt(number);
};

/**
 * 限制数字范围
 * @param number
 * @param min
 * @param max
 * @returns {Number}
 */
exports.clamp = function(number, min, max) {
    if (isNaN(number)) {
        number = min;
    }
    if (number < min) {
        number = min;
    } else if (number > max) {
        number = max;
    }
    return parseInt(number);
};

//console.log(exports.getUuid());
//console.log(exports.generatePassword());