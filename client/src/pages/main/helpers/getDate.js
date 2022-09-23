import * as dayjs from 'dayjs'
import local from 'dayjs/locale/ru'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import weekday from 'dayjs/plugin/weekday'
import locale_ru from 'dayjs/locale/ru'

export const getDataTimeTerm = (period, inputs) => {
    dayjs.extend(customParseFormat)
    dayjs.extend(weekday)

    const nowDay = dayjs().locale('ru')


    switch (period) {
        case 'yesterday':
            const temp = nowDay.subtract(1, 'day').format('YYYY-MM-DD')
            const yesterday =
            {
                date_from: temp,
                date_to: temp,
            }
            return yesterday

        case 'week':
            const toWeek = nowDay.format('YYYY-MM-DD')
            const fromWeek = nowDay.startOf('w').format('YYYY-MM-DD')
            const week =
            {
                date_from: fromWeek,
                date_to: toWeek,
            }
            return week

        case 'lastWeek':
            const temp2 = nowDay.subtract(1, 'w')
            const fromLastWeek = temp2.startOf('week').format('YYYY-MM-DD')
            const toLastWeek = temp2.endOf('week').format('YYYY-MM-DD')
            const lastWeek =
            {
                date_from: fromLastWeek,
                date_to: toLastWeek,
            }
            return lastWeek

        case 'month':
            const fromMonth = nowDay.format('YYYY-MM-DD')
            const toMonth = nowDay.startOf('M').format('YYYY-MM-DD')
            const month =
            {
                date_from: toMonth,
                date_to: fromMonth
            }
            return month

        case 'lastMonth':
            const temp4= nowDay.subtract(1, 'month')
            const fromLastMonth = temp4.startOf('M').format('YYYY-MM-DD')
            const toLastMonth = temp4.endOf('M').format('YYYY-MM-DD')
            const lastMonth =
            {
                date_from: fromLastMonth,
                date_to: toLastMonth,
            }
            return lastMonth

        case '90Days':
            const from90Days = nowDay.subtract(90, 'd').format('YYYY-MM-DD')
            const to90Days = nowDay.format('YYYY-MM-DD')
            const Days90 =
            {
                date_from: from90Days,
                date_to: to90Days,
            }
            return Days90

        case 'form':
            return inputs

        default:
            console.log("default");
            break
    }
}