import * as dayjs from 'dayjs'
import local from 'dayjs/locale/ru'

function getDataTimeTerm(period, inputs) {
    const nowDay = dayjs()

    switch (period) {
        case 'yesterday':
            const temp = dayjs().subtract(1, 'day')
            const yesterday =
            {
                date_from: `${temp.$y}-${temp.$M + 1}-${temp.$D}`,
                date_to: `${temp.$y}-${temp.$M + 1}-${temp.$D}`,
            }
            return yesterday

        case 'week':
            const today = new Date();
            const tempFrom = function () {
                let nowDay = today.getDay()
                if (nowDay === 1) {
                    return `${today.getMonth() + 1}-${today.getDate()}`
                }
                if (nowDay === 0) {
                    return `${today.getMonth() + 1}-${today.getDate()-6}`
                }
                else {
                    return `${today.getMonth() + 1}-${today.getDate()-(nowDay-1)}`
                }
            }

            const week =
            {
                date_from: `${today.getFullYear()}-${tempFrom()}`,
                date_to: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
            }
            return week

        case 'lastWeek':
            const temp2 = nowDay.subtract(1, 'w')
            const temp22 = temp2.startOf('week')
            const temp23 = temp2.endOf('week')
            const lastWeek =
            {
                date_from: `${temp22.$y}-${temp22.$M + 1}-${temp22.$D + 1}`,
                date_to: `${temp23.$y}-${temp23.$M + 1}-${temp23.$D + 1}`,
            }
            console.log("Last Week - helper", lastWeek);
            return lastWeek

        case 'month':
            const temp3 = nowDay
            const temp32 = nowDay.startOf('M')
            const month =
            {
                date_from: `${temp32.$y}-${temp32.$M + 1}-${temp32.$D}`,
                date_to: `${temp3.$y}-${temp3.$M + 1}-${temp3.$D}`,
            }
            return month

        case 'lastMonth':
            const temp4 = nowDay.subtract(1, 'month')
            const temp42 = temp4.startOf('M')
            const temp43 = temp4.endOf('M')
            const lastMonth =
            {
                date_from: `${temp42.$y}-${temp42.$M + 1}-${temp42.$D}`,
                date_to: `${temp43.$y}-${temp43.$M + 1}-${temp43.$D}`,
            }
            console.log("Last Month - helper", lastMonth);
            return lastMonth

        case '90Days':
            const temp5 = nowDay
            const temp52 = nowDay.subtract(90, 'd')
            const Days90 =
            {
                date_from: `${temp52.$y}-${temp52.$M + 1}-${temp52.$D}`,
                date_to: `${temp5.$y}-${temp5.$M + 1}-${temp5.$D}`,
            }
            return Days90

        case 'form':
            return inputs

        default:
            console.log("default");
            break
    }
}


export { getDataTimeTerm }