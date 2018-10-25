'use strict';
const crypto    = require('crypto');

/**
 * rsa加密
 * @param str
 * @param privateKey
 */
let rsaSign = (str, privateKey)=> {
    let signer = crypto.createSign('RSA-MD5');
    signer.update(new Buffer(str));
    return signer.sign(privateKey, 'base64');
};

/**
 * 对序列化rsa加密
 * @param params
 * @param privateKey
 */
exports.getRsaSignArray = (params, privateKey)=> {
    params.sort();
    let str = "";
    for(let o of params) str += o;
    return rsaSign(str, privateKey);
};

/**
 * 对象序列化
 * @param options
 * @returns {Array}
 */
exports.packageParams = (options)=> {
    let params = [];
    for(let key in options) {
        params.push(key + "=" +options[key].toString());
    }
    return params;
};

/**
 * 签名验证
 * @param options
 * @param sig
 * @param priKey
 * @param pubKey
 */
exports.verifyRsa = (options, sig, priKey, pubKey)=> {
    let params = packageParams(options, priKey);
    params.sort();
    let data = "";
    for(let o of params) data += o;
    let verify = crypto.createVerify('RSA-MD5');
    verify.update(data);
    return verify.verify(pubKey, sig, 'base64');
};
