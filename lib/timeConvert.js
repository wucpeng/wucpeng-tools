'use strict';
const monthDays = require('month-days');
const sprintf = require('sprintf').sprintf;
const daySeconds = 86400000;


/**
 * 获取时间小时信息
 * @param date
 * @param offsetInSeconds
 * @returns {number}
 */
exports.getHour = (date, offsetInSeconds)=> {
    if(offsetInSeconds == null || offsetInSeconds == undefined) offsetInSeconds = 8 * 3600;
    return (new Date(date.getTime() + offsetInSeconds * 1000)).getUTCHours();
};

/**
 * 获取本年度第一周时间
 * @param date
 * @returns {Date}
 */
exports.getFirstWeekDayOfYear = (date)=> {
    let sDate = new Date(date.getFullYear(), 0, 1);
    let day = sDate.getDay();
    if (day > 3)
        return new Date(date.getFullYear(), 0, 7 - day + 1);
    else
        return new Date(sDate.getTime() - day * dayMillisSeconds);
};

/**
 * 获取星期时间
 * @param date
 * @returns {number}
 */
exports.getWeek = (date)=> {
    let firstWeekDate = exports.getFirstWeekDayOfYear(date);
    let w = (date.getTime() - firstWeekDate.getTime()) / (7 * dayMillisSeconds);
    w = Math.ceil(w);
    return w;
};

/**
 * 获取时间
 * @param date
 * @returns {string}
 */
exports.getDayAndWeek = (date)=> {
    if (!date) date = new Date(); else date = new Date(date);
    let day = date.getDate();
    let week = date.getDay();
    if (week == 0) week = '日';
    let str = day + '号-周' + week;
    return str;
}

/**
 * 是否零点时间
 * @param timeInt
 * @returns {boolean}
 */
exports.isZeroTime = (timeInt)=> {
    try {
        let now = new Date(parseInt(timeInt));
        let hour = now.getHours();
        return (hour == 0);
    } catch (e) {
        return false;
    }
};

/**
 * 判断是否周一
 * @param timeInt
 * @returns {boolean}
 */
exports.isMonthFirstDayTime = (timeInt)=> {
    try {
        let now = new Date(parseInt(timeInt));
        let hour = now.getHours();
        let day = now.getDate();
        return (hour == 0 && day == 1);
    }
    catch (e) {
        return false;
    }
};

/**
 * 获取日期零点时间
 * @param intTime
 * @returns {Date}
 */
exports.getZeroTime =(intTime)=> {
    let now = _.isUndefined(intTime)? new Date() : new Date(intTime);
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return now;
};

/**
 * 获取月份零点时间
 * @param intTime
 * @returns {Date}
 */
exports.getZeroMonthTime =(intTime)=> {
    let monthDate = _.isUndefined(intTime)? new Date() : new Date(intTime);
    monthDate.setDate(1);
    monthDate.setHours(0);
    monthDate.setMinutes(0);
    monthDate.setSeconds(0);
    monthDate.setMilliseconds(0);
    return monthDate;
};

/**
 * 获取年份零点时间
 * @param intTime
 * @returns {Date}
 */
exports.getZeroYearTime =(intTime)=> {
    let yearDate = _.isUndefined(intTime)? new Date() : new Date(intTime);
    yearDate.setMonth(0);
    yearDate.setDate(1);
    yearDate.setHours(0);
    yearDate.setMinutes(0);
    yearDate.setSeconds(0);
    yearDate.setMilliseconds(0);
    return yearDate;
};

/**
 * 获取一周开始时间(周一)
 * @param intTime
 * @returns {Date}
 */
exports.getZeroWeekTime = (intTime)=> {
    let now = _.isUndefined(intTime)? new Date() : new Date(intTime);
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let time = now.getTime();
    let day = now.getDay();
    //ut.log('getZeroWeekTime', day, time);
    if (day == 0) {
        time = time - 86400000 * 6;
    } else {
        time = time - (day - 1) * 86400000;
    }
    return new Date(time);
};

/**
 * 获取当月每天时间
 * @param time
 * @returns {Array}
 */
exports.getMonthDays = (time)=> {
    let monthTime = _.isUndefined(time)? new Date() : new Date(time);
    let year = monthTime.getFullYear();
    let month = monthTime.getMonth();
    monthTime.setHours(0);
    monthTime.setMinutes(0);
    monthTime.setSeconds(0);
    monthTime.setMilliseconds(0);
    let days = [];
    let dayNum = monthDays(month, year);
    for(let i = 1; i <= dayNum; ++i) {
        monthTime.setDate(i);
        days.push(monthTime.getTime());
    }
    return days;
};

/**
 * 判断时间是否是时间格式
 * @param date
 * @returns {boolean}
 */
exports.checkTimeIsSet = (date)=> {
    return  !(!date || date.getTime() == 0);
};

/**
 * 获取时间字符串 格式: 2015年12月3日8：30
 * @param dateIntTime
 * @returns {*}
 */
exports.getTimeYMDH = (dateIntTime)=> {
    let date = new Date(dateIntTime);
    return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}:${date.getMinutes()}`;
};

/**
 * 获取时间字符串 格式: 2015年12月3日
 * @param dateIntTime
 * @returns {*}
 */
exports.getTimeYMD = (dateIntTime)=> {
    let date = new Date(dateIntTime);
    return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;
};

/**
 * 获取时间字符串 格式: 2015年12月
 * @param dateIntTime
 * @returns {*}
 */
exports.getTimeYM = (dateIntTime)=> {
    let date = new Date(dateIntTime);
    return `${date.getFullYear()}年${date.getMonth()+1}月`;
};

/**
 * 获取时间字符串 格式: 08:30
 * @param dateIntTime
 * @returns {*}
 */
exports.getTimeHM = (dateIntTime)=> {
    let date = new Date(dateIntTime);
    return sprintf("%02d:%02d", date.getHours(), date.getMinutes());
};

/**
 * 判断是否同一天
 * @param date1
 * @param date2
 * @returns {boolean}
 */
exports.isSameDay = (date1, date2)=> {
    return Math.floor((parseInt(date1) / 1000 / 60 / 60 + 8) / 24) == Math.floor((parseInt(date2) / 1000 / 60 / 60 + 8) / 24);
};

/**
 * 是否当前月
 * @param date
 * @returns {boolean}
 */
exports.isCurrentMonth = (date)=> {
    let now = new Date();
    return date.getMonth() == now.getMonth() && date.getFullYear() == now.getFullYear();
};

/**
 * 判断是否是同一天
 * @param time1
 * @param time2
 * @returns {boolean}
 */
exports.isSameDayFormat = (time1, time2)=> {
    return time1.getDate() == time2.getDate() && time1.getMonth() == time2.getMonth();
};

/**
 * 根据开始时间和天数计算时间
 * @param begin
 * @param days
 * @returns {Date}
 */
exports.calcDateByDays = (begin, days)=> {
    let beginDate = new Date(begin);
    let dayTime = beginDate.getTime() + (days-2) * 24 * 3600000;
    return new Date(dayTime);
};

/**
 * 计算年龄
 * @param dateTime
 * @returns {*}
 */
exports.calcAge = (dateTime)=> {
    let birthday = new Date(dateTime);
    let birthYear = birthday.getFullYear();
    let birthMonth = birthday.getMonth() + 1;
    let birthDay = birthday.getDate();

    let d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();

    let returnAge;
    if(nowYear == birthYear){
        returnAge = 0;  //同年 则为0岁
    }
    else{
        var ageDiff = nowYear - birthYear ; //年之差
        if(ageDiff > 0) {
            if(nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay;    //日之差
                if(dayDiff < 0) {
                    returnAge = ageDiff - 1;
                }
                else {
                    returnAge = ageDiff ;
                }
            }
            else {
                var monthDiff = nowMonth - birthMonth;  //月之差
                if(monthDiff < 0) {
                    returnAge = ageDiff - 1;
                }
                else {
                    returnAge = ageDiff ;
                }
            }
        }
        else {
            returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
        }
    }
    return returnAge;   //返回周岁年龄
};

/**
 * 计算年龄 输入生日 输出 年月日
 * @param birthYear
 * @param birthMonth
 * @param birthDate
 * @returns {{year: number, month: number, date: number}}
 */
exports.calcAgeAndMonth = (birthYear, birthMonth, birthDate)=> {
    let d = new Date();
    let nowYear = d.getFullYear();
    let nowMonth = d.getMonth() + 1;
    let nowDay =  d.getDate() - 1;
    let year = 0;
    let month = 0;
    let date = 0;
    if (birthYear == nowYear) {
        if (nowDay >= birthDate) {
            month = nowMonth - birthMonth;
            date = nowDay - birthDate;
        } else {
            month = nowMonth - birthMonth - 1;
            date = nowDay + 30 - birthDate
        }
    } else {
        if (nowMonth > birthMonth) {
            year = nowYear - birthYear;
            if (nowDay >= birthDate) {
                month = nowMonth - birthMonth;
                date = nowDay - birthDate;
            } else {
                month = nowMonth - birthMonth - 1;
                date = nowDay + 30 - birthDate
            }
        } else if (nowMonth == birthMonth) {
            if (nowDay >= birthDate) {
                year = nowYear - birthYear;
                month = nowMonth - birthMonth;
                date = nowDay - birthDate;
            } else {
                year = nowYear - birthYear - 1;
                month = nowMonth + 12 - birthMonth - 1;
                date = nowDay + 30 - birthDate
            }
        } else {
            year = nowYear - birthYear - 1;
            if (nowDay >= birthDate) {
                month = nowMonth + 12 - birthMonth;
                date = nowDay - birthDate;
            } else {
                month = nowMonth + 12 - birthMonth - 1;
                date = nowDay + 30 - birthDate
            }
        }
    }
    return {year: year, month: month, date: date};
};

/**
 * 计算时间差距
 * @param beginDate
 * @param endDate
 * @returns {{year: number, month: number, date: number}}
 */
exports.calcDateDiff = (beginDate, endDate)=> {
    let birthYear = beginDate.getFullYear();
    let birthMonth = beginDate.getMonth() + 1;
    let birthDate = beginDate.getDate();

    let nowYear = endDate.getFullYear();
    let nowMonth = endDate.getMonth() + 1;
    let nowDay =  endDate.getDate();

    let year = 0;
    let month = 0;
    let date = 0;
    if (birthYear == nowYear) {
        if (nowDay >= birthDate) {
            month = nowMonth - birthMonth;
            date = nowDay - birthDate;
        } else {
            month = nowMonth - birthMonth - 1;
            date = nowDay + 30 - birthDate
        }
    } else {
        if (nowMonth > birthMonth) {
            year = nowYear - birthYear;
            if (nowDay >= birthDate) {
                month = nowMonth - birthMonth;
                date = nowDay - birthDate;
            } else {
                month = nowMonth - birthMonth - 1;
                date = nowDay + 30 - birthDate
            }
        } else if (nowMonth == birthMonth) {
            if (nowDay >= birthDate) {
                year = nowYear - birthYear;
                month = nowMonth - birthMonth;
                date = nowDay - birthDate;
            } else {
                year = nowYear - birthYear - 1;
                month = nowMonth + 12 - birthMonth - 1;
                date = nowDay + 30 - birthDate
            }
        } else {
            year = nowYear - birthYear - 1;
            if (nowDay >= birthDate) {
                month = nowMonth + 12 - birthMonth;
                date = nowDay - birthDate;
            } else {
                month = nowMonth + 12 - birthMonth - 1;
                date = nowDay + 30 - birthDate
            }
        }
    }
    return {year: year, month: month, date: date};
};
