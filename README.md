## wucpeng-tools ##

一些编程小工具 时间控制

## Installation ##

	$ npm install wucpeng-tools

Enjoy yourself!

## Feature holiday ##
holiday 判断假期 需要每年添加 供当前公司场景使用

    const tools = require('wucpeng-tools');

    const holiday = tools.holiday;

    let time = new Date();

    console.log(holiday.isHolidayDate(time));


## Feature calendar ##

    const tools = require('wucpeng-tools');

    const calendar = tools.calendar;

    let time = new Date();

    console.log(calendar.solar2lunarDate(time));

        {
          lYear: 1986,
          lMonth: 1,
          lDay: 27,
          Animal: '虎',
          IMonthCn: '正月',
          IDayCn: '廿七',
          cYear: 1986,
          cMonth: 3,
          cDay: 7,
          gzYear: '丙寅',
          gzMonth: '辛卯',
          gzDay: '庚戌',
          isToday: false,
          isLeap: false,
          nWeek: 5,
          ncWeek: '星期五',
          isTerm: false,
          Term: null,
          astro: '双鱼座'
        }

## Feature identificationCheck ##
    const tools = require('wucpeng-tools');
    const identificationCheck = tools.identificationCheck;
    console.log('cert', identificationCheck.certificateNoParse('310109201509160514'));
    cert { areaCode: '310109',
          sex: '男',
          gender: 2,
          birthday: '2015-09-16',
          age: 3 }
    console.log('cert', identificationCheck.certificateNoParse('372901860127283'));
    cert { areaCode: '372901',
      sex: '男',
      gender: 2,
      birthday: '1986-01-27',
      age: 32 }

## Feature passwdCode ##
    const tools = require('wucpeng-tools');
    const passwdCode = tools.passwdCode;

功能 | 变量 | 参数 | 返回值
-----|------|-----|-----
生成6位数字密码 | createPasswd |  | string
生成多维复杂密码 | generatePassword |  | string
计算密码复杂度 | passwordStringMode | string | number
计算唯一随机字符串 | getUuid | | string
获取随机数 | getRandomInt | min max | number
从begin 到 end的一个随机数，不包括end | randomByRange | number
限制最大数字 | limitMax | number, max | number
限制数字范围 | clamp | number, min, max | number

## Feature rsaMd5Sign ##
    const tools = require('wucpeng-tools');
    const rsaMd5Sign = tools.rsaMd5Sign;

功能 | 变量 | 参数 | 返回值
-----|------|-----|-----
对序列化rsa加密 | getRsaSignArray | params, privateKey | string
对象序列化 | packageParams | options | array
签名验证 | verifyRsa | options, sig, priKey, pubKey | boolean

## Feature zip ##
    const tools = require('wucpeng-tools');

    const zip = tools.zip;

    zip.zipFilePwd(workPath, fileName, pwd, (err)=> {});

    zip.zipFile(workPath, fileName, (err)=> {});

## Feature timeConvert 时间转换 ##
    const tools = require('wucpeng-tools');
    const timeConvert = tools.timeConvert;

功能 | 变量 | 参数 | 返回值
-----|------|-----|-----
获取时间小时信息 | getHour | date offsetInSeconds | number
获取本年度第一周时间 | getFirstWeekDayOfYear | date | Date
获取星期时间 | getWeek | date | 0-6
获取时间 | getDayAndWeek | date | x号-周x
是否零点时间 | isZeroTime | timeInt | true or false
判断是否周一 | isMonthFirstDayTime | timeInt | true or false
获取日期零点时间 | getZeroTime | intTime | Date
获取月份零点时间 | getZeroMonthTime | intTime | Date
获取年份零点时间 | getZeroYearTime | intTime | Date
获取一周开始时间(周一) | getZeroWeekTime | intTime | Date
获取当月每天时间 | getMonthDays | intTime | Array [intTime]
判断时间是否是时间格式 | checkTimeIsSet | date | boolean
获取时间字符串 | getTimeYMDH | intTime | 格式: 2015年12月3日8：30
获取时间字符串 | getTimeYMD | intTime | 格式: 2015年12月3日
获取时间字符串 | getTimeYM | intTime | 格式: 2015年12月
获取时间字符串 | getTimeHM | intTime | 格式: 08:30
判断是否同一天 | isSameDay | date1, date2 | boolean
是否当前月 | isCurrentMonth | date | boolean
判断是否是同一天 | isSameDayFormat | time1, time2 | boolean
根据开始时间和天数计算时间 | calcDateByDays | begin, days | Date
计算年龄 | calcAge | dateTime | age
计算年龄 | calcAgeAndMonth | birthYear, birthMonth, birthDate | {year: number, month: number, date: number}
计算时间差距 | calcDateDiff | beginDate, endDate | {year: number, month: number, date: number}

## Feature regionCode 区域数据 ##
    const tools = require('wucpeng-tools');
    const regionCode = tools.regionCode;
    const simpleRegion = regionCode.simpleRegion;
    {
        '0': ['省1', '省2', '省3', ...],
        '0_省下标': ['城市1', '城市2', '城市3', '城市4', ...],
        '0_省下标_市下标': ['区县1', '区县2', '区县3' '区县4', ....]
    }

## Feature areaJS 区域数据 ##
    const tools = require('wucpeng-tools');
    const areaJS = tools.areaJS;
    const areaConfig = areaJS.areaConfig;
    {
        areas: [
             { code: '110000', name: '北京市' },
             { code: '110100', name: '市辖区' },
             { code: '110101', name: '东城区' },
             { code: '110102', name: '西城区' },
             { code: '110105', name: '朝阳区' },
             { code: '110106', name: '丰台区' },
             { code: '110107', name: '石景山区' },
             { code: '110108', name: '海淀区' },
             { code: '110109', name: '门头沟区' },
             { code: '110111', name: '房山区' },
             { code: '110112', name: '通州区' },
             { code: '110113', name: '顺义区' },
             { code: '110114', name: '昌平区' },
             { code: '110115', name: '大兴区' },
             { code: '110116', name: '怀柔区' },
             { code: '110117', name: '平谷区' },
             { code: '110200', name: '县' },
             { code: '110228', name: '密云县' },
             ......
        ],
        areaMap: {
             '110000': '北京市',
             '110100': '市辖区',
             '110101': '东城区',
             '110102': '西城区',
             '110105': '朝阳区',
             '110106': '丰台区',
             '110107': '石景山区',
             '110108': '海淀区',
             '110109': '门头沟区',
             '110111': '房山区',
             '110112': '通州区',
             '110113': '顺义区',
             '110114': '昌平区',
             '110115': '大兴区',
             '110116': '怀柔区',
             '110117': '平谷区',
             '110200': '县',
             '110228': '密云县',
             '110229': '延庆县',
             '120000': '天津市',
             '120100': '市辖区',
             '120101': '和平区',
             '120102': '河东区',
             '120103': '河西区',
             .......
        },
        codeMap: {
             '1101': '010',
             '1102': '010',
             '1201': '022',
             '1202': '022',
             '1301': '0311',
             '1302': '0315',
             '1303': '0335',
             '1304': '0310',
             '1305': '0319',
             '1306': '0312',
             '1307': '0313',
             '1308': '0314',
             '1309': '0317',
             '1310': '0316',
             '1311': '0318',
             '1401': '0351',
             '1402': '0352',
             ......
        },
        cArea: {
            "31": {
                    "cities": [
                        {
                            "code": "310101",
                            "name": "黄浦区"
                        },
                        {
                            "code": "310103",
                            "name": "卢湾区"
                        },
                        {
                            "code": "310104",
                            "name": "徐汇区"
                        },
                        {
                            "code": "310105",
                            "name": "长宁区"
                        },
                        {
                            "code": "310106",
                            "name": "静安区"
                        },
                        {
                            "code": "310107",
                            "name": "普陀区"
                        },
                        {
                            "code": "310108",
                            "name": "闸北区"
                        },
                        {
                            "code": "310109",
                            "name": "虹口区"
                        },
                        {
                            "code": "310110",
                            "name": "杨浦区"
                        },
                        {
                            "code": "310112",
                            "name": "闵行区"
                        },
                        {
                            "code": "310113",
                            "name": "宝山区"
                        },
                        {
                            "code": "310114",
                            "name": "嘉定区"
                        },
                        {
                            "code": "310115",
                            "name": "浦东新区"
                        },
                        {
                            "code": "310116",
                            "name": "金山区"
                        },
                        {
                            "code": "310117",
                            "name": "松江区"
                        },
                        {
                            "code": "310118",
                            "name": "青浦区"
                        },
                        {
                            "code": "310120",
                            "name": "奉贤区"
                        },
                        {
                            "code": "310230",
                            "name": "崇明县"
                        }
                    ],
                    "name": "上海市"
                },
                ......
        }
    }

    areaJS.getAreaName('990101');
    getAreaName 测试1

    areaJS.getProvinceCityCodes('990101');
    getProvinceCityCodes [ { code: '990000', name: '孩子通测试' },
      { code: '990100', name: '测试' },
      { code: '990101', name: '测试1' },
      { code: '990102', name: '测试2' },
      { code: '990103', name: '测试3' },
      { code: '990104', name: '测试4' },
      { code: '990105', name: '测试5' } ]

    areaJS.getAreaCodes('990101');
    getAreaCodes [ '990000',
      '990100',
      '990101',
      '990102',
      '990103',
      '990104',
      '990105' ]

    areaJS.getAreaCodesByCodes(['990101', '530901']);
    getAreaCodesByCodes [ '990000',
      '990100',
      '990101',
      '990102',
      '990103',
      '990104',
      '990105',
      '530000',
      '530100',
      '530101',
      '530300',
      '530301',
      '530400',
      '530401',
      '530500',
      '530501',
      '530600',
      '530601',
      '530700',
      '530701',
      '530800',
      '530801',
      '530900',
      '530901',
      '532300',
      '532301',
      '532500',
      '532501',
      '532600',
      '532601',
      '532800',
      '532801',
      '532900',
      '532901',
      '533100',
      '533102',
      '533300',
      '533321',
      '533400',
      '533421' ]

    areaJS.getProvinceCodes(['990101', '530901']);
    getProvinceCodes [ '99', '53' ]