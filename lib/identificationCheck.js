'use strict';

/**
 * 获取 身份证信息
 * @param certificateNo
 * @returns {null}
 */
exports.certificateNoParse = (certificateNo)=> {
    var pat = /^\d{6}(((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}([0-9]|x|X))|(\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}))$/;
    if(!pat.test(certificateNo))
        return null;

    var parseInner = function(certificateNo, idxSexStart, birthYearSpan){
        var res = {};
        res.areaCode = certificateNo.substr(0, 6);
        var idxSex = 1 - certificateNo.substr(idxSexStart, 1) % 2;
        res.sex = idxSex == '1' ? '女' : '男';
        res.gender = res.sex == '男'? 2 : 1;

        var year = (birthYearSpan == 2 ? '19' : '') +
            certificateNo.substr(6, birthYearSpan);
        var month = certificateNo.substr(6 + birthYearSpan, 2);
        var day = certificateNo.substr(8 + birthYearSpan, 2);
        res.birthday = year + '-' + month + '-' + day;

        var d = new Date(); //当然，在正式项目中，这里应该获取服务器的当前时间
        var monthFloor = ((d.getMonth()+1) < parseInt(month,10) || (d.getMonth()+1) == parseInt(month,10) && d.getDate() < parseInt(day,10)) ? 1 : 0;
        res.age = d.getFullYear() - parseInt(year,10) - monthFloor;
        return res;
    };
    return parseInner(certificateNo, certificateNo.length == 15 ? 14 : 16, certificateNo.length == 15 ? 2 : 4);
};

console.log('cert', exports.certificateNoParse('310109201509160514'));
console.log('cert', exports.certificateNoParse('372901860127283'));
