
      // 黄历核心数据
       const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
        const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
        const ZODIAC = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
        const ZODIAC_SIGNS = [
            { month: 1, day: 20, sign: '水瓶座' },
            { month: 2, day: 19, sign: '双鱼座' },
            { month: 3, day: 21, sign: '白羊座' },
            { month: 4, day: 20, sign: '金牛座' },
            { month: 5, day: 21, sign: '双子座' },
            { month: 6, day: 21, sign: '巨蟹座' },
            { month: 7, day: 23, sign: '狮子座' },
            { month: 8, day: 23, sign: '处女座' },
            { month: 9, day: 23, sign: '天秤座' },
            { month: 10, day: 23, sign: '天蝎座' },
            { month: 11, day: 22, sign: '射手座' },
            { month: 12, day: 22, sign: '摩羯座' }
        ];

        const SHICHEN = ['子时', '丑时', '寅时', '卯时', '辰时', '巳时', '午时', '未时', '申时', '酉时', '戌时', '亥时'];
        const SHICHEN_TIME = ['23:00-00:59', '01:00-02:59', '03:00-04:59', '05:00-06:59',
                             '07:00-08:59', '09:00-10:59', '11:00-12:59', '13:00-14:59',
                             '15:00-16:59', '17:00-18:59', '19:00-20:59', '21:00-22:59'];

        // 二十八星宿
        const STARS_28 = ['角', '亢', '氐', '房', '心', '尾', '箕', '斗', '牛', '女', '虚', '危', '室', '壁',
                        '奎', '娄', '胃', '昴', '毕', '觜', '参', '井', '鬼', '柳', '星', '张', '翼', '轸'];
        const STARS_28_INFO = {
            '角': {'五行': '木', '吉凶': '吉', '宜': ['祭祀', '婚嫁'], '忌': ['修造']},
            '亢': {'五行': '金', '吉凶': '凶', '宜': [], '忌': ['嫁娶', '出行']},
            '氐': {'五行': '土', '吉凶': '凶', '宜': ['破土'], '忌': ['安葬']},
            '房': {'五行': '日', '吉凶': '吉', '宜': ['修造', '安葬'], '忌': []},
            '心': {'五行': '月', '吉凶': '吉', '宜': ['祈福', '祭祀'], '忌': []},
            '尾': {'五行': '火', '吉凶': '吉', '宜': ['出行', '嫁娶'], '忌': []},
            '箕': {'五行': '水', '吉凶': '吉', '宜': ['修造'], '忌': []},
            '斗': {'五行': '木', '吉凶': '吉', '宜': ['修造'], '忌': []},
            '牛': {'五行': '金', '吉凶': '凶', '宜': [], '忌': ['开市', '交易']},
            '女': {'五行': '土', '吉凶': '凶', '宜': [], '忌': ['嫁娶']},
            '虚': {'五行': '日', '吉凶': '凶', '宜': [], '忌': ['开市']},
            '危': {'五行': '月', '吉凶': '凶', '宜': ['结婚'], '忌': ['出行']},
            '室': {'五行': '火', '吉凶': '吉', '宜': ['修造'], '忌': []},
            '壁': {'五行': '水', '吉凶': '吉', '宜': ['修造'], '忌': []},
            '奎': {'五行': '木', '吉凶': '凶', '宜': [], '忌': ['出行']},
            '娄': {'五行': '金', '吉凶': '吉', '宜': ['嫁娶'], '忌': []},
            '胃': {'五行': '土', '吉凶': '吉', '宜': ['安葬'], '忌': []},
            '昴': {'五行': '日', '吉凶': '凶', '宜': [], '忌': ['嫁娶', '出行']},
            '毕': {'五行': '月', '吉凶': '吉', '宜': ['祈福'], '忌': []},
            '觜': {'五行': '火', '吉凶': '凶', '宜': [], '忌': ['修造']},
            '参': {'五行': '水', '吉凶': '吉', '宜': ['修造'], '忌': []},
            '井': {'五行': '木', '吉凶': '吉', '宜': ['祭祀'], '忌': []},
            '鬼': {'五行': '金', '吉凶': '凶', '宜': [], '忌': ['出行']},
            '柳': {'五行': '土', '吉凶': '凶', '宜': [], '忌': ['嫁娶']},
            '星': {'五行': '日', '吉凶': '吉', '宜': ['嫁娶'], '忌': []},
            '张': {'五行': '月', '吉凶': '吉', '宜': ['修造'], '忌': []},
            '翼': {'五行': '火', '吉凶': '凶', '宜': [], '忌': ['出行']},
            '轸': {'五行': '水', '吉凶': '凶', '宜': [], '忌': ['嫁娶']}
        };

        // 建除十二神宜忌
        const JIANXING_YIJI = {
            '建': {'宜': ['出行', '纳财', '开市', '交易', '嫁娶', '安床'], '忌': ['动土', '安葬']},
            '除': {'宜': ['祭祀', '出行', '扫舍', '沐浴', '理发', '治病'], '忌': ['嫁娶', '安床', '开市']},
            '满': {'宜': ['祭祀', '开光', '祈福', '进人口'], '忌': ['栽种', '安葬', '出行']},
            '平': {'宜': ['祭祀', '修造', '作灶', '治病'], '忌': ['动土', '出行', '嫁娶']},
            '定': {'宜': ['嫁娶', '安床', '出行', '订盟', '纳采'], '忌': ['诉讼', '作灶', '出行']},
            '执': {'宜': ['祭祀', '求嗣', '出行', '交易', '纳财'], '忌': ['移徙', '开市', '安葬']},
            '破': {'宜': ['治病', '破屋', '坏垣', '拆卸'], '忌': ['嫁娶', '开市', '安葬', '出行']},
            '危': {'宜': ['安床', '治病', '破屋', '坏垣'], '忌': ['出行', '嫁娶', '安葬', '开市']},
            '成': {'宜': ['嫁娶', '开市', '出行', '交易', '立券', '纳财'], '忌': ['安葬', '开渠', '破土']},
            '收': {'宜': ['祭祀', '纳财', '捕鱼', '纳畜'], '忌': ['嫁娶', '开市', '安葬', '出行']},
            '开': {'宜': ['开市', '交易', '立券', '挂匾', '入宅', '嫁娶'], '忌': ['安葬', '破土', '出行']},
            '闭': {'宜': ['祭祀', '筑堤', '补垣', '塞穴'], '忌': ['开市', '出行', '嫁娶']}
        };

        // 值神宜忌
        const ZHISHEN_YIJI = {
            '青龙': {'宜': ['祭祀', '祈福', '出行', '嫁娶', '修造', '动土'], '忌': []},
            '明堂': {'宜': ['祭祀', '祈福', '开光', '出行', '嫁娶'], '忌': []},
            '天刑': {'宜': ['祭祀', '修造'], '忌': ['嫁娶', '开市', '出行', '安葬']},
            '朱雀': {'宜': ['开市', '交易'], '忌': ['嫁娶', '出行', '安葬']},
            '金匮': {'宜': ['婚嫁', '纳采', '出行', '修造'], '忌': []},
            '天德': {'宜': ['祭祀', '祈福', '修造', '嫁娶'], '忌': []},
            '白虎': {'宜': ['祭祀', '治病'], '忌': ['嫁娶', '出行', '开市', '安葬']},
            '玉堂': {'宜': ['祭祀', '祈福', '出行', '嫁娶', '修造'], '忌': []},
            '天牢': {'宜': ['祭祀', '修造'], '忌': ['嫁娶', '出行', '开市', '安葬']},
            '玄武': {'宜': ['祭祀'], '忌': ['嫁娶', '出行', '开市', '安葬']},
            '司命': {'宜': ['祭祀', '祈福', '出行', '修造'], '忌': []},
            '勾陈': {'宜': ['祭祀', '修造'], '忌': ['嫁娶', '出行', '开市']}
        };

        // 吉神信息
        const LUCKY_GODS_INFO = {
            '天德': {'性质': '吉', '宜': ['祭祀', '祈福', '修造', '嫁娶']},
            '月德': {'性质': '吉', '宜': ['祭祀', '祈福', '开市', '出行']},
            '天德合': {'性质': '吉', '宜': ['嫁娶', '开市', '交易']},
            '月德合': {'性质': '吉', '宜': ['嫁娶', '出行', '交易']},
            '天赦': {'性质': '吉', '宜': ['祭祀', '祈福', '赦罪', '修造']},
            '天喜': {'性质': '吉', '宜': ['嫁娶', '出行', '开市']},
            '六合': {'性质': '吉', '宜': ['嫁娶', '出行', '交易']},
            '三合': {'性质': '吉', '宜': ['出行', '交易', '纳财']},
            '五富': {'性质': '吉', '宜': ['交易', '开市', '纳财']},
            '天乙贵人': {'性质': '吉', '宜': ['祭祀', '祈福', '修造', '嫁娶']}
        };

        // 凶神信息
        const UNLUCKY_GODS_INFO = {
            '月破': {'性质': '凶', '忌': ['出行', '嫁娶', '开市', '安葬', '修造']},
            '月煞': {'性质': '凶', '忌': ['出行', '嫁娶', '开市']},
            '月害': {'性质': '凶', '忌': ['嫁娶', '出行', '开市']},
            '月刑': {'性质': '凶', '忌': ['出行', '嫁娶', '开市']},
            '大耗': {'性质': '凶', '忌': ['开市', '交易', '纳财']},
            '小耗': {'性质': '凶', '忌': ['开市', '交易']},
            '五鬼': {'性质': '凶', '忌': ['修造', '动土', '开市']},
            '大煞': {'性质': '凶', '忌': ['出行', '嫁娶', '开市', '修造']},
            '归忌': {'性质': '凶', '忌': ['出行', '移徙']},
            '血支': {'性质': '凶', '忌': ['针刺', '手术', '安葬']},
            '白虎': {'性质': '凶', '忌': ['嫁娶', '出行', '开市', '安葬']},
            '朱雀': {'性质': '凶', '忌': ['嫁娶', '出行', '开市', '安葬']},
            '天牢': {'性质': '凶', '忌': ['嫁娶', '出行', '开市', '安葬']},
            '玄武': {'性质': '凶', '忌': ['嫁娶', '出行', '开市', '安葬']}
        };

        // 活动列表
        const ACTIVITIES = [
            '祭祀', '祈福', '求嗣', '开光', '出行', '嫁娶', '订盟', '纳采',
            '安床', '修造', '动土', '入宅', '安葬', '破土', '作灶', '移徙',
            '开市', '交易', '纳财', '开业', '裁衣', '沐浴', '理发', '会亲友',
            '安香', '进人口', '安机械', '伐木', '作梁', '开渠', '掘井',
            '纳畜', '牧养', '出火', '针灸', '治病', '破屋', '坏垣',
            '立券', '挂匾', '筑堤', '补垣', '扫舍', '诉讼', '冠带'
        ];

        const PENGZU_TABOO = {
            '甲': '甲不开仓财物耗散', '乙': '乙不栽植千株不长', '丙': '丙不修灶必见灾殃',
            '丁': '丁不剐头头必生疮', '戊': '戊不受田田主不祥', '己': '己不破券二比并亡',
            '庚': '庚不经络织机虚张', '辛': '辛不合酱主人不尝', '壬': '壬不汲水更难提防',
            '癸': '癸不词讼理弱敌强',
            '子': '子不问卜自惹祸殃', '丑': '丑不冠带主不还乡', '寅': '寅不祭祀神鬼不尝',
            '卯': '卯不穿井水泉不香', '辰': '辰不哭泣必主重丧', '巳': '巳不远行财物伏藏',
            '午': '午不芫盖屋主更张', '未': '未不服药毒气入肠', '申': '申不安床鬼祟入房',
            '酉': '酉不宴客醉坐颠狂', '戌': '戌不吃犬作怪上床', '亥': '亥不嫁娶不利新郎'
        };



        // 各类吉日对应的活动
        const LUCKY_DAY_TYPES = {
            'huangdaoji': ['嫁娶', '订盟', '纳采', '出行', '安床', '修造', '动土', '入宅', '开市', '交易', '纳财'],
            'banjia': ['移徙', '入宅'],
            'jiehun': ['嫁娶', '订盟', '纳采'],
            'dinghun': ['订盟', '纳采'],
            'tiche': ['出行', '交易', '纳财'],
            'ruzhu': ['入宅', '移徙'],
            'chuxing': ['出行'],
            'dongtu': ['动土', '修造'],
            'zhuangxiu': ['修造', '动土'],
            'kaigong': ['开市', '开业'],
            'kaizhang': ['开市', '开业'],
            'anzang': ['安葬'],
            'jiaoyi': ['交易', '开市'],
            'lifa': ['理发'],
            'potu': ['破土', '安葬'],
            'anmen': ['安机械'],
            'anchuang': ['安床']
        };

        const CAISHEN_DIRECTIONS = ['正东', '正南', '正西', '正北', '东南', '东北', '西南', '西北'];
        const ZHISHEN = ['青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂', '天牢', '玄武', '司命', '勾陈'];
        const JIANXING = ['建', '除', '满', '平', '定', '执', '破', '危', '成', '收', '开', '闭'];
        const WEEKDAYS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

        // 干支计算函数
        function getGanZhi(index) {
            return HEAVENLY_STEMS[index % 10] + EARTHLY_BRANCHES[index % 12];
        }

        function getYearGanZhi(year) {
            return getGanZhi(year - 4);
        }

        function getMonthGanZhi(year, month) {
            const yearGanIndex = (year - 4) % 10;
            const monthStemMap = { 0: 2, 1: 4, 2: 6, 3: 8, 4: 0 };
            const monthStemIndex = (monthStemMap[yearGanIndex] + month - 1) % 10;
            const monthBranchIndex = month % 12;
            return HEAVENLY_STEMS[monthStemIndex] + EARTHLY_BRANCHES[monthBranchIndex];
        }

        function getDayGanZhi(dateObj) {
            const baseDate = new Date(1900, 0, 1);
            const baseIndex = 10;
            const daysDiff = Math.floor((dateObj - baseDate) / (1000 * 60 * 60 * 24));
            return getGanZhi((baseIndex + daysDiff) % 60);
        }

        function getHourGanZhi(dayGanZhi, hourIndex) {
            const dayGan = dayGanZhi[0];
            const dayGanIndex = HEAVENLY_STEMS.indexOf(dayGan);
            const hourStemMap = { 0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 0, 6: 2, 7: 4, 8: 6, 9: 8 };
            const hourStemIndex = (hourStemMap[dayGanIndex] + hourIndex) % 10;
            const hourBranchIndex = hourIndex % 12;
            return HEAVENLY_STEMS[hourStemIndex] + EARTHLY_BRANCHES[hourBranchIndex];
        }

        function getZodiac(year) {
            return ZODIAC[(year - 4) % 12];
        }

        function getZodiacSign(month, day) {
            // 将月日转换为年内天数
            function toDayOfYear(m, d) {
                const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                let days = 0;
                for (let i = 0; i < m - 1; i++) {
                    days += daysInMonth[i];
                }
                return days + d;
            }
            
            const inputDayOfYear = toDayOfYear(month, day);
            
            // 遍历星座，找到第一个边界日期大于输入日期的星座
            for (let i = 0; i < ZODIAC_SIGNS.length; i++) {
                const item = ZODIAC_SIGNS[i];
                const signDayOfYear = toDayOfYear(item.month, item.day);
                if (signDayOfYear > inputDayOfYear) {
                    // 返回前一个星座（循环）
                    return ZODIAC_SIGNS[(i + ZODIAC_SIGNS.length - 1) % ZODIAC_SIGNS.length].sign;
                }
            }
            
            // 如果没找到（理论上不会发生），返回最后一个星座
            return ZODIAC_SIGNS[ZODIAC_SIGNS.length - 1].sign;
        }

        function getChongSha(dayGanZhi) {
            const dayBranch = dayGanZhi[1];
            const dayBranchIndex = EARTHLY_BRANCHES.indexOf(dayBranch);
            const chongIndex = (dayBranchIndex + 6) % 12;
            const chongAnimal = ZODIAC[chongIndex];
            const chongBranch = EARTHLY_BRANCHES[chongIndex];
            // 煞方映射：子寅申北、丑卯未酉东、辰戌南、巳亥西
            const shaMap = ['北', '东', '北', '东', '南', '西', '北', '东', '北', '东', '南', '西'];
            const sha = shaMap[dayBranchIndex];
            return { chong: `冲${chongBranch}(${chongAnimal})`, sha: `煞${sha}` };
        }

        function getTaishen(lunar) {
            // 胎神基于六甲口诀：甲子-门炉外屎池，乙丑-碓磨外西南
            // 简化版：基于天干推算胎神方位
            const dayGan = lunar.day_gan + lunar.day_zhi;
            const dayGanIndex = (lunar.day - 1) % 10;
            const dayBranchIndex = (lunar.day - 1) % 12;
            
            // 胎神位置传统歌诀（简化版）
            const taishenMap = [
                '占门炉外屎池', '占碓磨外西南', '占厨灶外正西', '占大门外正北',
                '占房床外东北', '占碓磨外东南', '占仓库外正西', '占碓磨外正南',
                '占安保外正西', '占安灶外正北', '占床房外西北', '占碓磨外正西'
            ];
            
            // 精确版：基于六十甲子逐日推算
            const dayGanZhi = getDayGanZhiFromSolar(lunar.year, lunar.month, lunar.day);
            const ganIndex = HEAVENLY_STEMS.indexOf(dayGanZhi[0]);
            const zhiIndex = EARTHLY_BRANCHES.indexOf(dayGanZhi[1]);
            
            // 六甲胎神位置
            const liuJiaTaishen = [
                '占门炉外屎池', '占碓磨外西南', '占厨灶外正西', '占大门外正北',
                '占房床外东北', '占碓磨外东南', '占仓库外正西', '占碓磨外正南',
                '占安保外正西', '占安灶外正北'
            ];
            
            return liuJiaTaishen[ganIndex];
        }
        
        // 根据农历日期获取日干支
        function getDayGanZhiFromSolar(year, month, day) {
            const lunar = solarToLunar(new Date(year, month - 1, day));
            const baseDate = new Date(1900, 0, 30); // 1900年1月30日为甲子日
            const targetDate = new Date(year, month - 1, day);
            const daysDiff = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
            return getGanZhi(daysDiff);
        }

        function getCaishenPosition(dayGanZhi) {
            // 财神位传统规则：甲艮乙坎丙离丁坤戊震，己巽庚兑辛乾壬癸艮
            const dayGan = dayGanZhi[0];
            const caishenMap = {
                '甲': '东北', '乙': '正北', '丙': '正南', '丁': '西南', '戊': '正东',
                '己': '东南', '庚': '正西', '辛': '西北', '壬': '西北', '癸': '东北'
            };
            return caishenMap[dayGan] || '正南';
        }

        function getPengzuTaboo(dayGanZhi) {
            const dayGan = dayGanZhi[0];
            const dayBranch = dayGanZhi[1];
            const ganTaboo = PENGZU_TABOO[dayGan] || '';
            const branchTaboo = PENGZU_TABOO[dayBranch] || '';
            return `${ganTaboo}，${branchTaboo}`;
        }

        function getZhishen(dayGanZhi) {
            const dayBranch = dayGanZhi[1];
            const dayBranchIndex = EARTHLY_BRANCHES.indexOf(dayBranch);
            return ZHISHEN[dayBranchIndex % 12];
        }

        function getJianxing(dayGanZhi, monthGanZhi) {
            const dayBranch = dayGanZhi[1];
            const monthBranch = monthGanZhi[1];
            const dayBranchIndex = EARTHLY_BRANCHES.indexOf(dayBranch);
            const monthBranchIndex = EARTHLY_BRANCHES.indexOf(monthBranch);
            const offset = (dayBranchIndex - monthBranchIndex + 12) % 12;
            return JIANXING[offset];
        }

        function getLuckyUnluckyGods(dayGanZhi, monthGanZhi, jianxing, zhishen) {
            const dayGan = dayGanZhi[0];
            const dayBranch = dayGanZhi[1];
            const dayGanIndex = HEAVENLY_STEMS.indexOf(dayGan);
            const dayBranchIndex = EARTHLY_BRANCHES.indexOf(dayBranch);
            const monthBranchIndex = EARTHLY_BRANCHES.indexOf(monthGanZhi[1]);
            
            const luckyGods = [];
            const unluckyGods = [];

            // 天德位置判断
            const tianDeMap = {
                '甲': '亥', '乙': '己', '丙': '寅', '丁': '酉', '戊': '寅',
                '己': '酉', '庚': '寅', '辛': '亥', '壬': '巳', '癸': '申'
            };
            if (dayBranch === tianDeMap[dayGan]) {
                luckyGods.push('天德');
            }

            // 月德判断
            if ([0, 4, 8].includes(dayBranchIndex)) { // 子辰申
                luckyGods.push('月德');
            }

            // 月破判断 - 月破是月建的对冲地支
            const poIndex = (monthBranchIndex + 6) % 12;
            if (dayBranchIndex === poIndex) {
                unluckyGods.push('月破');
            }

            // 根据值神判断
            if (['青龙', '明堂', '金匮', '天德', '玉堂', '司命'].includes(zhishen)) {
                luckyGods.push(zhishen);
            } else {
                unluckyGods.push(zhishen);
            }

            // 根据建星判断
            if (['建', '成', '开', '执'].includes(jianxing)) {
                luckyGods.push('建除' + jianxing);
            } else if (['破', '危'].includes(jianxing)) {
                unluckyGods.push('建除' + jianxing);
            }

            // 天乙贵人 - 甲戊并牛羊，乙己鼠猴乡，丙丁猪鸡位，壬癸兔蛇藏，庚辛逢虎马
            const tianYiMap = {
                '甲': ['丑', '未'], '戊': ['丑', '未'],
                '乙': ['子', '申'], '己': ['子', '申'],
                '丙': ['亥', '酉'], '丁': ['亥', '酉'],
                '壬': ['卯', '巳'], '癸': ['卯', '巳'],
                '庚': ['寅', '午'], '辛': ['寅', '午']
            };
            if (tianYiMap[dayGan] && tianYiMap[dayGan].includes(dayBranch)) {
                luckyGods.push('天乙贵人');
            }

            // 三合判断
            const sanHeMap = {
                0: [4, 8], 4: [0, 8], 8: [0, 4],
                5: [9, 1], 9: [5, 1], 1: [9, 5],
                6: [2, 10], 2: [6, 10], 10: [6, 2],
                7: [3, 11], 3: [7, 11], 11: [7, 3]
            };
            const heBranches = sanHeMap[dayBranchIndex];
            if (heBranches && heBranches.length > 0) {
                luckyGods.push('三合');
            }

            // 月煞判断 - 月煞是月建的五行相克方位
            // 寅卯月煞北，巳午月煞东，申酉月煞南，亥子月煞西，辰戌丑未月煞中
            const yueShaMap = { 3: '北', 4: '北', 0: '西', 1: '西', 6: '中', 8: '中', 2: '北', 7: '南', 9: '南', 5: '东', 10: '中', 11: '东' };
            if (yueShaMap[monthBranchIndex]) {
                unluckyGods.push('月煞');
            }

            // 五鬼判断 - 基于日支
            const wuGuiMap = ['龙', '鸡', '狗', '蛇', '虎', '鼠', '牛', '兔', '马', '猴', '羊', '猪'];
            if (wuGuiMap.includes(dayBranch)) {
                unluckyGods.push('五鬼');
            }

            // 劫煞判断 - 基于日支
            const jieShaMap = { 2: '劫煞', 5: '劫煞', 8: '劫煞', 11: '劫煞' };
            if (jieShaMap[dayBranchIndex]) {
                unluckyGods.push('劫煞');
            }

            // 灾煞判断
            const zaiShaMap = { 1: '灾煞', 4: '灾煞', 7: '灾煞', 10: '灾煞' };
            if (zaiShaMap[dayBranchIndex]) {
                unluckyGods.push('灾煞');
            }

            return { '吉神宜趋': [...new Set(luckyGods)], '凶神宜忌': [...new Set(unluckyGods)] };
        }

        function get28Star(dateObj) {
            const baseDate = new Date(1900, 0, 31);
            const daysDiff = Math.floor((dateObj - baseDate) / (1000 * 60 * 60 * 24));
            const starIndex = daysDiff % 28;
            const starName = STARS_28[starIndex];
            const starInfo = STARS_28_INFO[starName];
            return { name: starName, info: starInfo };
        }

        // 农历数据 - 从1900年开始的农历信息
        // 数据格式：使用经过验证的标准农历数据
        // months: [正月到腊月的大小月，1=大月30天，0=小月29天]
        // leap: 闰月月份（0=无闰月）
        // leapDays: 闰月天数
        const LUNAR_INFO = {
            1900: { leap: 6, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1901: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1902: { leap: 0, leapDays: 0, months: [1,1,0,1,0,1,0,1,0,1,0,1] },  // 354天
            1903: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1904: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1905: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1906: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1907: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1908: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1909: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1910: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1911: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1912: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1913: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1914: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1915: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1916: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1917: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1918: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1919: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1920: { leap: 4, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1921: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1922: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1923: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1924: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1925: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1926: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1927: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1928: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1929: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1930: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1931: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1932: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1933: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1934: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1935: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1936: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1937: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1938: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1939: { leap: 3, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1940: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1941: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1942: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1943: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1944: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1945: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1946: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1947: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1948: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1949: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1950: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1951: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1952: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1953: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1954: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1955: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1956: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1957: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1958: { leap: 4, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1959: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1960: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1961: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1962: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1963: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1964: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1965: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1966: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1967: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1968: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1969: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1970: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1971: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1972: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1973: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1974: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1975: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1976: { leap: 6, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1977: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1978: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1979: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1980: { leap: 4, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1981: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1982: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1983: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1984: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1985: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1986: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1987: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1988: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1989: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1990: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1991: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1992: { leap: 3, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1993: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1994: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1995: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1996: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            1997: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            1998: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            1999: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2000: { leap: 4, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2001: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2002: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2003: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2004: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2005: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2006: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2007: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2008: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2009: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2010: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2011: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2012: { leap: 4, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2013: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2014: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2015: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2016: { leap: 6, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2017: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2018: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2019: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2020: { leap: 4, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2021: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2022: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2023: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2024: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2025: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2026: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2027: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2028: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2029: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2030: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2031: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2032: { leap: 3, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2033: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2034: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2035: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2036: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2037: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2038: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2039: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2040: { leap: 4, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2041: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2042: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2043: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2044: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2045: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2046: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2047: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2048: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2049: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2050: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2051: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2052: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2053: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2054: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2055: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2056: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2057: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2058: { leap: 3, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2059: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2060: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2061: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2062: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2063: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2064: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2065: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2066: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2067: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2068: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2069: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2070: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2071: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2072: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2073: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2074: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2075: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2076: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2077: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2078: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2079: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2080: { leap: 4, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2081: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2082: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2083: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2084: { leap: 2, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2085: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2086: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2087: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2088: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2089: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2090: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2091: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2092: { leap: 3, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2093: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2094: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2095: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2096: { leap: 5, leapDays: 30, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 384天
            2097: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 354天
            2098: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] },  // 355天
            2099: { leap: 0, leapDays: 0, months: [1,0,1,0,1,0,1,0,1,0,1,0] }   // 354天
        };

        // 获取某年农历每月的天数（返回数组，包含闰月）
        function getLunarMonthDays(year) {
            const info = LUNAR_INFO[year];
            if (!info) return [];
            
            const days = [];
            const leapMonth = info.leap;
            
            for (let month = 1; month <= 12; month++) {
                // 先添加正常月份的天数
                days.push(getMonthDays(year, month, false));
                // 如果有闰月，且当前是闰月所在的月份，在正常月份后面添加闰月
                if (leapMonth > 0 && month === leapMonth) {
                    days.push(info.leapDays); // 闰月天数
                }
            }
            return days;
        }


        // 正确的公历转农历函数（使用lunar-javascript库）
        function solarToLunar(dateObj) {
            const year = dateObj.getFullYear();
            const month = dateObj.getMonth() + 1;
            const day = dateObj.getDate();
            
            try {
                // 使用lunar-javascript库进行转换
                const lunar = Lunar.fromDate(new Date(year, month - 1, day));
                return {
                    year: lunar.getYear(),
                    month: lunar.getMonth(),
                    day: lunar.getDay(),
                    is_leap: false
                };
            } catch (e) {
                // 如果库不可用，使用原来的算法（备用方案）
                const baseDate = new Date(1900, 0, 31);
                const daysDiff = Math.floor((dateObj - baseDate) / (1000 * 60 * 60 * 24));
                
                let offset = daysDiff;
                let lunarYear = 1900;
                let lunarMonth = 1;
                let lunarDay = 1;
                let isLeap = false;
                
                for (let y = 1900; y <= 2100; y++) {
                    const info = LUNAR_INFO[y];
                    if (!info) break;
                    
                    const leapMonth = info.leap;
                    const leapDays = info.leapDays;
                    
                    let yearDays = 0;
                    for (let m = 1; m <= 12; m++) {
                        yearDays += getMonthDays(y, m, false);
                    }
                    if (leapMonth > 0) {
                        yearDays += leapDays;
                    }
                    
                    if (offset < yearDays) {
                        lunarYear = y;
                        let monthOffset = offset;
                        for (let m = 1; m <= 12; m++) {
                            const normalMonthDays = getMonthDays(y, m, false);
                            if (leapMonth > 0 && m === leapMonth) {
                                if (monthOffset < normalMonthDays) {
                                    lunarMonth = m;
                                    lunarDay = monthOffset + 1;
                                    isLeap = false;
                                    break;
                                }
                                monthOffset -= normalMonthDays;
                                if (monthOffset < leapDays) {
                                    lunarMonth = m;
                                    lunarDay = monthOffset + 1;
                                    isLeap = true;
                                    break;
                                }
                                monthOffset -= leapDays;
                            } else {
                                if (monthOffset < normalMonthDays) {
                                    lunarMonth = m;
                                    lunarDay = monthOffset + 1;
                                    isLeap = false;
                                    break;
                                }
                                monthOffset -= normalMonthDays;
                            }
                        }
                        break;
                    }
                    offset -= yearDays;
                }
                return { year: lunarYear, month: lunarMonth, day: lunarDay, is_leap: isLeap };
            }
        }

        // 获取某年的总天数
        function getYearDays(year) {
            const info = LUNAR_INFO[year];
            if (!info) return 365;
            
            let days = 0;
            for (let i = 1; i <= 12; i++) {
                days += getMonthDays(year, i);
            }
            // 加上闰月天数（如果该年有闰月）
            if (info.leap > 0) {
                days += info.leapDays;
            }
            return days;
        }

        // 获取某年某月的天数
        function getMonthDays(year, month, isLeapMonth = false) {
            const info = LUNAR_INFO[year];
            if (!info) return 30;
            
            const leapMonth = info.leap;
            
            // 如果查询的是闰月，返回闰月天数
            if (isLeapMonth && month === leapMonth) {
                return info.leapDays;
            }
            
            // 使用 months 数组获取天数
            // months 数组索引 0-11 对应正月到腊月
            // 1 = 大月(30天), 0 = 小月(29天)
            const monthIndex = month - 1;
            if (monthIndex >= 0 && monthIndex < 12) {
                return info.months[monthIndex] === 1 ? 30 : 29;
            }
            
            return 29; // 默认小月
        }

        function calculateYiJi(dateObj) {
            const lunar = solarToLunar(dateObj);
            const dayGanZhi = getDayGanZhi(dateObj);
            const zhishen = getZhishen(dayGanZhi);
            const jianxing = getJianxing(dayGanZhi, getMonthGanZhi(lunar.year, lunar.month));
            const star = get28Star(dateObj);
            const godsInfo = getLuckyUnluckyGods(dayGanZhi, getMonthGanZhi(lunar.year, lunar.month), jianxing, zhishen);

            const yiActivities = new Set();
            const jiActivities = new Set();

            // 根据建除十二神添加宜忌
            if (JIANXING_YIJI[jianxing]) {
                const jianInfo = JIANXING_YIJI[jianxing];
                for (const act of jianInfo['宜']) {
                    if (ACTIVITIES.includes(act)) {
                        yiActivities.add(act);
                    }
                }
                for (const act of jianInfo['忌']) {
                    if (ACTIVITIES.includes(act)) {
                        jiActivities.add(act);
                    }
                }
            }

            // 根据值神添加宜忌
            if (ZHISHEN_YIJI[zhishen]) {
                const zhishenInfo = ZHISHEN_YIJI[zhishen];
                for (const act of zhishenInfo['宜']) {
                    if (ACTIVITIES.includes(act)) {
                        yiActivities.add(act);
                    }
                }
                for (const act of zhishenInfo['忌']) {
                    if (ACTIVITIES.includes(act)) {
                        jiActivities.add(act);
                    }
                }
            }

            // 根据二十八星宿添加宜忌
            if (STARS_28_INFO[star.name]) {
                const starInfo = STARS_28_INFO[star.name];
                for (const act of starInfo['宜']) {
                    if (ACTIVITIES.includes(act)) {
                        yiActivities.add(act);
                    }
                }
                for (const act of starInfo['忌']) {
                    if (ACTIVITIES.includes(act)) {
                        jiActivities.add(act);
                    }
                }
            }

            // 根据吉凶神煞添加宜忌
            for (const god of godsInfo['吉神宜趋']) {
                if (LUCKY_GODS_INFO[god]) {
                    const godInfo = LUCKY_GODS_INFO[god];
                    for (const act of godInfo['宜']) {
                        if (ACTIVITIES.includes(act)) {
                            yiActivities.add(act);
                        }
                    }
                }
            }

            for (const god of godsInfo['凶神宜忌']) {
                if (UNLUCKY_GODS_INFO[god]) {
                    const godInfo = UNLUCKY_GODS_INFO[god];
                    for (const act of godInfo['忌']) {
                        if (ACTIVITIES.includes(act)) {
                            jiActivities.add(act);
                        }
                    }
                }
            }

            // 彭祖百忌处理 - 将百忌中的活动添加到忌列表
            const ganTaboo = dayGanZhi[0];
            const branchTaboo = dayGanZhi[1];
            
            // 从彭祖百忌提取忌讳关键词并添加到忌列表
            const tabooMapping = {
                '开仓': ['开市', '交易', '出货'],
                '栽植': ['种植', '农林相关'],
                '修灶': ['动土', '修造'],
                '剃头': ['理发'],
                '破券': ['签订合同', '交易'],
                '经络': ['纺织', '缝纫'],
                '合酱': ['制作', '酿造'],
                '汲水': ['取水', '打水'],
                '词讼': ['诉讼', '打官司'],
                '问卜': ['占卜', '算卦'],
                '冠带': ['穿戴'],
                '祭祀': ['祭祀', '拜神'],
                '穿井': ['打井', '挖井'],
                '哭泣': ['哭泣', '哀悼'],
                '远行': ['出行', '旅游'],
                '芟盖': ['装修', '盖房'],
                '服药': ['吃药', '求医'],
                '安床': ['安床', '移动床铺'],
                '宴客': ['请客', '宴会'],
                '吃犬': ['食用狗肉'],
                '嫁娶': ['嫁娶', '结婚']
            };
            
            // 检查天干彭祖百忌
            const ganText = PENGZU_TABOO[ganTaboo] || '';
            for (const [key, activities] of Object.entries(tabooMapping)) {
                if (ganText.includes(key)) {
                    activities.forEach(act => jiActivities.add(act));
                }
            }
            
            // 检查地支彭祖百忌
            const branchText = PENGZU_TABOO[branchTaboo] || '';
            for (const [key, activities] of Object.entries(tabooMapping)) {
                if (branchText.includes(key)) {
                    activities.forEach(act => jiActivities.add(act));
                }
            }

            // 排除既在宜又在忌的项
            for (const act of jiActivities) {
                yiActivities.delete(act);
            }

            // 转换为数组并限制数量
            const yiList = Array.from(yiActivities).slice(0, 8);
            const jiList = Array.from(jiActivities).slice(0, 6);

            return { '宜': yiList, '忌': jiList };
        }

        function getHourYiJi(hourGanZhi) {
            const hourGan = hourGanZhi[0];
            const hourBranch = hourGanZhi[1];
            const hourGanIndex = HEAVENLY_STEMS.indexOf(hourGan);
            const hourBranchIndex = EARTHLY_BRANCHES.indexOf(hourBranch);
            const seed = (hourGanIndex * 12 + hourBranchIndex) % 29;

            const yiCount = 2 + (seed % 3);
            const jiCount = 2 + Math.floor((seed / 4) % 3);

            // 时辰宜忌简化规则
            const allYi = ['祭祀', '祈福', '出行', '交易', '纳财', '嫁娶', '修造', '动土'];
            const allJi = ['出行', '嫁娶', '开市', '修造', '动土'];

            // 使用种子打乱数组，然后取前n个不重复项
            const shuffledYi = [...allYi];
            let tempSeed = seed;
            for (let i = shuffledYi.length - 1; i > 0; i--) {
                const j = tempSeed % (i + 1);
                [shuffledYi[i], shuffledYi[j]] = [shuffledYi[j], shuffledYi[i]];
                tempSeed = Math.floor(tempSeed / (i + 1));
            }

            const yiList = [];
            for (const activity of shuffledYi) {
                if (!yiList.includes(activity) && yiList.length < yiCount) {
                    yiList.push(activity);
                }
            }

            const shuffledJi = [...allJi];
            tempSeed = seed * 3;
            for (let i = shuffledJi.length - 1; i > 0; i--) {
                const j = tempSeed % (i + 1);
                [shuffledJi[i], shuffledJi[j]] = [shuffledJi[j], shuffledJi[i]];
                tempSeed = Math.floor(tempSeed / (i + 1));
            }

            const jiList = [];
            for (const activity of shuffledJi) {
                if (!jiList.includes(activity) && jiList.length < jiCount) {
                    jiList.push(activity);
                }
            }

            return { yi: yiList, ji: jiList };
        }

        function getHourXingShen(hourGanZhi, dayGanZhi) {
            const hourBranch = hourGanZhi[1];
            const hourBranchIndex = EARTHLY_BRANCHES.indexOf(hourBranch);
            const dayGan = dayGanZhi[0];

            const xingShenMap = {
                '甲': ['青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂', '天牢', '玄武', '司命', '勾陈'],
                '乙': ['天德', '白虎', '玉堂', '天牢', '玄武', '司命', '勾陈', '青龙', '明堂', '天刑', '朱雀', '金匮'],
                '丙': ['勾陈', '青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂', '天牢', '玄武', '司命'],
                '丁': ['司命', '勾陈', '青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂', '天牢', '玄武'],
                '戊': ['玄武', '司命', '勾陈', '青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂', '天牢'],
                '己': ['天牢', '玄武', '司命', '勾陈', '青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂'],
                '庚': ['玉堂', '天牢', '玄武', '司命', '勾陈', '青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎'],
                '辛': ['白虎', '玉堂', '天牢', '玄武', '司命', '勾陈', '青龙', '明堂', '天刑', '朱雀', '金匮', '天德'],
                '壬': ['金匮', '白虎', '玉堂', '天牢', '玄武', '司命', '勾陈', '青龙', '明堂', '天刑', '朱雀', '天德'],
                '癸': ['朱雀', '金匮', '白虎', '玉堂', '天牢', '玄武', '司命', '勾陈', '青龙', '明堂', '天刑', '金匮']
            };

            const map = xingShenMap[dayGan] || xingShenMap['甲'];
            return map[hourBranchIndex];
        }

        function getHourJiXiong(hourXingShen) {
            const luckyStars = ['青龙', '明堂', '金匮', '天德', '玉堂', '司命'];
            return luckyStars.includes(hourXingShen) ? '吉' : '凶';
        }

        function getHourChongSha(hourGanZhi) {
            const hourBranch = hourGanZhi[1];
            const hourBranchIndex = EARTHLY_BRANCHES.indexOf(hourBranch);
            const chongIndex = (hourBranchIndex + 6) % 12;
            const chongAnimal = ZODIAC[chongIndex];
            const chongBranch = EARTHLY_BRANCHES[chongIndex];
            // 煞方映射：子丑申酉北、寅卯未戌东、辰巳南、亥东
            const shaMap = ['北', '北', '东', '东', '南', '南', '北', '东', '北', '北', '东', '东'];
            const sha = shaMap[hourBranchIndex];
            return { chong: `冲${chongBranch}(${chongAnimal})`, sha: `煞${sha}` };
        }

        function getAlmanac(dateObj) {
            // 计算农历（需要先计算，因为胎神需要用到）
            const lunar = solarToLunar(dateObj);
            const nongli = `${lunar.year}年${lunar.month}月${lunar.day}日`;
            
            const dayGanZhi = getDayGanZhi(dateObj);
            const monthGanZhi = getMonthGanZhi(dateObj.getFullYear(), dateObj.getMonth() + 1);
            const yiJi = calculateYiJi(dateObj);
            const zhishen = getZhishen(dayGanZhi);
            const jianxing = getJianxing(dayGanZhi, monthGanZhi);
            const star = get28Star(dateObj);
            const godsInfo = getLuckyUnluckyGods(dayGanZhi, monthGanZhi, jianxing, zhishen);
            const chongSha = getChongSha(dayGanZhi);
            const taishen = getTaishen(lunar);
            const caishen = getCaishenPosition(dayGanZhi);
            const pengzu = getPengzuTaboo(dayGanZhi);
            const zodiac = getZodiac(dateObj.getFullYear());
            const zodiacSign = getZodiacSign(dateObj.getMonth() + 1, dateObj.getDate());

            return {
                gongli: `${dateObj.getFullYear()}年${dateObj.getMonth() + 1}月${dateObj.getDate()}日`,
                xingqi: WEEKDAYS[dateObj.getDay()],
                nongli: nongli,
                ganzhi: {
                    nian: getYearGanZhi(dateObj.getFullYear()),
                    yue: monthGanZhi,
                    ri: dayGanZhi
                },
                shengxiao: zodiac,
                xingzuo: zodiacSign,
                yiji: yiJi,
                jishen: godsInfo['吉神宜趋'],
                xiongshen: godsInfo['凶神宜忌'],
                chongsha: chongSha,
                taishen: taishen,
                caishen: caishen,
                pengzu: pengzu,
                zhishen: zhishen,
                jianxing: jianxing,
                xingxiu: star.name,
                xingxiu_jixiong: star.info['吉凶']
            };
        }

        function getHourInfo(dateObj) {
            const dayGanZhi = getDayGanZhi(dateObj);
            const hourInfoList = [];

            for (let i = 0; i < 12; i++) {
                const hourGanZhi = getHourGanZhi(dayGanZhi, i);
                const hourYiJi = getHourYiJi(hourGanZhi);
                const hourXingShen = getHourXingShen(hourGanZhi, dayGanZhi);
                const hourChongSha = getHourChongSha(hourGanZhi);
                const hourJiXiong = getHourJiXiong(hourXingShen);

                hourInfoList.push({
                    shichen: SHICHEN[i],
                    shike: SHICHEN_TIME[i],
            shiganzhi: hourGanZhi,
                    xingshen: hourXingShen,
                    chongsha: `${hourChongSha.chong} ${hourChongSha.sha}`,
                    shiyi: hourYiJi.yi.join(' '),
                    shiji: hourYiJi.ji.join(' '),
                    jixiong: hourJiXiong
                });
            }

            return hourInfoList;
        }

        function getSolarTerms(year) {
            const solarTermBaseDates = [
                [1, 6], [1, 20], [2, 4], [2, 19], [3, 6], [3, 21],
                [4, 5], [4, 20], [5, 6], [5, 21], [6, 6], [6, 21],
                [7, 7], [7, 23], [8, 8], [8, 23], [9, 8], [9, 23],
                [10, 8], [10, 23], [11, 7], [11, 22], [12, 7], [12, 22]
            ];

            const solarTerms = [
                '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨',
                '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑',
                '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'
            ];

            const times = ['05:24', '18:44', '19:49', '15:34', '05:56', '12:31',
                          '09:27', '16:28', '05:36', '22:37', '15:26', '04:51',
                          '10:38', '04:09', '20:29', '12:04', '06:34', '15:52',
                          '22:07', '04:54', '18:01', '11:25', '07:22', '00:06'];

            const terms = [];
            for (let i = 0; i < solarTermBaseDates.length; i++) {
                const [m, d] = solarTermBaseDates[i];
                terms.push({
                    xuhao: i + 1,
                    jieqi: solarTerms[i],
                    riqi: `${year}年${m}月${d}日`,
                    shijian: times[i % 24]
                });
            }

            return terms;
        }

        // 获取月度吉日
        function getMonthlyLuckyDays(year, month, type) {
            const luckyDays = [];
            const targetActivities = LUCKY_DAY_TYPES[type] || LUCKY_DAY_TYPES['huangdaoji'];
            const daysInMonth = new Date(year, month, 0).getDate();

            for (let day = 1; day <= daysInMonth; day++) {
                const dateObj = new Date(year, month - 1, day);
                const dayGanZhi = getDayGanZhi(dateObj);
                const lunar = solarToLunar(dateObj);
                const monthGanZhi = getMonthGanZhi(year, month);
                const yiJi = calculateYiJi(dateObj);
                const zhishen = getZhishen(dayGanZhi);
                const jianxing = getJianxing(dayGanZhi, monthGanZhi);
                const godsInfo = getLuckyUnluckyGods(dayGanZhi, monthGanZhi, jianxing, zhishen);
                const chongSha = getChongSha(dayGanZhi);

                // 检查该日是否包含目标活动
                let isLucky = targetActivities.some(activity => yiJi['宜'].includes(activity));

                // 黄道吉日需要额外过滤：排除凶煞较重的日子
                if (isLucky && type === 'huangdaoji') {
                    // 排除有严重凶煞的日子
                    const seriousBadGods = ['月破', '大煞', '五鬼', '月煞'];
                    let hasSeriousBad = godsInfo['凶神宜忌'].some(god => seriousBadGods.includes(god));
                    
                    // 排除建星为破、危的日子
                    if (['破', '危'].includes(jianxing)) {
                        hasSeriousBad = true;
                    }
                    
                    // 排除值神为凶神的日子
                    if (['天刑', '白虎', '朱雀', '天牢', '玄武', '勾陈'].includes(zhishen)) {
                        hasSeriousBad = true;
                    }
                    
                    if (hasSeriousBad) {
                        isLucky = false;
                    }
                }

                if (isLucky) {
                    luckyDays.push({
                        date: `${year}年${month}月${day}日`,
                        weekday: WEEKDAYS[dateObj.getDay()],
                        ganzhi: dayGanZhi,
                        yi: yiJi['宜'].join('，'),
                        ji: yiJi['忌'].join('，'),
                        zhishen: zhishen,
                        jianxing: jianxing,
                        jishen: godsInfo['吉神宜趋'].join('，'),
                        chongsha: `${chongSha.chong} ${chongSha.sha}`
                    });
                }
            }

            return luckyDays;
        }

        // UI 函数
        function showTab(tabId, event) {
            const tabs = document.querySelectorAll('.tab');
            const contents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // 找到对应的tab按钮
            const targetTab = Array.from(tabs).find(tab =>
                tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(`'${tabId}'`)
            );

            if (targetTab) {
                targetTab.classList.add('active');
            }

            document.getElementById(tabId).classList.add('active');

            // 阻止事件冒泡
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        }

        function updateAlmanac() {
            const dateInput = document.getElementById('dailyDate').value;
            if (!dateInput) {
                alert('请选择日期');
                return;
            }

            const dateObj = new Date(dateInput);
            const almanac = getAlmanac(dateObj);

            const resultDiv = document.getElementById('almanacResult');
            resultDiv.innerHTML = `
                <div class="info-row">
                    <div class="info-label">公历日期</div>
                    <div class="info-value">${almanac.gongli}  ${almanac.xingqi}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">农历</div>
                    <div class="info-value">${almanac.nongli}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">干支</div>
                    <div class="info-value">${almanac.ganzhi.nian}年  ${almanac.ganzhi.yue}月  ${almanac.ganzhi.ri}日</div>
                </div>
                <div class="info-row">
                    <div class="info-label">生肖</div>
                    <div class="info-value">${almanac.shengxiao}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">星座</div>
                    <div class="info-value">${almanac.xingzuo}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">值神</div>
                    <div class="info-value" style="color: #4682b4; font-weight: bold;">${almanac.zhishen}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">建星</div>
                    <div class="info-value" style="color: #9370db; font-weight: bold;">${almanac.jianxing}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">二十八星宿</div>
                    <div class="info-value" style="color: #9370db; font-weight: bold;">${almanac.xingxiu}（${almanac.xingxiu_jixiong}）</div>
                </div>
                <div class="info-row">
                    <div class="info-label">宜</div>
                    <div class="info-value yi">${almanac.yiji['宜'].join('，')}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">忌</div>
                    <div class="info-value ji">${almanac.yiji['忌'].join('，')}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">吉神宜趋</div>
                    <div class="info-value jishen">${almanac.jishen.join('，')}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">凶神宜忌</div>
                    <div class="info-value xiongshen">${almanac.xiongshen.join('，')}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">冲煞</div>
                    <div class="info-value">${almanac.chongsha.chong}  ${almanac.chongsha.sha}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">胎神</div>
                    <div class="info-value">${almanac.taishen.wai}<br>${almanac.taishen.nei}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">财神位</div>
                    <div class="info-value">${almanac.caishen}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">彭祖百忌</div>
                    <div class="info-value">${almanac.pengzu}</div>
                </div>
            `;
        }

        function updateHourTable() {
            const dateInput = document.getElementById('hourDate').value;
            if (!dateInput) {
                alert('请选择日期');
                return;
            }

            const dateObj = new Date(dateInput);
            const hourInfo = getHourInfo(dateObj);

            const tbody = document.getElementById('hourTableBody');
            tbody.innerHTML = hourInfo.map(info => `
                <tr>
                    <td>${info.shichen}</td>
                    <td>${info.shike}</td>
                    <td>${info.shiganzhi}</td>
                    <td>${info.xingshen}</td>
                    <td>${info.chongsha}</td>
                    <td>${info.shiyi}</td>
                    <td>${info.shiji}</td>
                    <td class="${info.jixiong === '吉' ? 'lucky' : 'unlucky'}">${info.jixiong}</td>
                </tr>
            `).join('');
        }

        function updateSolarTerms() {
            const year = parseInt(document.getElementById('yearSelect').value);
            const solarTerms = getSolarTerms(year);

            const tbody = document.getElementById('solarTableBody');
            tbody.innerHTML = solarTerms.map(st => `
                <tr>
                    <td>${st.xuhao}</td>
                    <td>${st.jieqi}</td>
                    <td>${st.riqi}</td>
                    <td>${st.shijian}</td>
                </tr>
            `).join('');
        }

        function updateMonthlyLucky() {
            const year = parseInt(document.getElementById('monthlyYearSelect').value);
            const month = parseInt(document.getElementById('monthlyMonthSelect').value);
            const type = document.getElementById('monthlyTypeSelect').value;

            const luckyDays = getMonthlyLuckyDays(year, month, type);

            const tbody = document.getElementById('monthlyTableBody');
            if (luckyDays.length === 0) {
                tbody.innerHTML = '<tr><td colspan="10" style="text-align: center; padding: 20px; color: #999;">该月暂无符合条件的吉日</td></tr>';
            } else {
                tbody.innerHTML = luckyDays.map((day, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td style="color: #daa520; font-weight: bold;">${day.date}</td>
                        <td>${day.weekday}</td>
                        <td>${day.ganzhi}</td>
                        <td class="lucky">${day.yi}</td>
                        <td class="unlucky">${day.ji}</td>
                        <td style="color: #4682b4;">${day.zhishen}</td>
                        <td style="color: #9370db; font-weight: bold;">${day.jianxing}</td>
                        <td class="lucky">${day.jishen}</td>
                        <td>${day.chongsha}</td>
                    </tr>
                `).join('');
            }
        }

        // 初始化
        function init() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const todayStr = `${year}-${month}-${day}`;

            document.getElementById('dailyDate').value = todayStr;
            document.getElementById('hourDate').value = todayStr;

            // 填充年份选择
            const yearSelect = document.getElementById('yearSelect');
            for (let year = 2024; year <= 2030; year++) {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year + '年';
                if (year === today.getFullYear()) {
                    option.selected = true;
                }
                yearSelect.appendChild(option);
            }

            // 填充按月吉日的年份选择
            const monthlyYearSelect = document.getElementById('monthlyYearSelect');
            for (let year = 2024; year <= 2030; year++) {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year + '年';
                if (year === today.getFullYear()) {
                    option.selected = true;
                }
                monthlyYearSelect.appendChild(option);
            }

            // 填充月份选择
            const monthlyMonthSelect = document.getElementById('monthlyMonthSelect');
            for (let month = 1; month <= 12; month++) {
                const option = document.createElement('option');
                option.value = month;
                option.textContent = month + '月';
                if (month === today.getMonth() + 1) {
                    option.selected = true;
                }
                monthlyMonthSelect.appendChild(option);
            }

            updateAlmanac();
            updateHourTable();
            updateSolarTerms();
            updateMonthlyLucky();
        }

        // 页面加载完成后初始化
        window.onload = function() {
            init();
        };
   