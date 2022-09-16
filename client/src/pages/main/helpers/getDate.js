import axios from 'axios';

function dateTime(period) {
    switch (period) {
        case 'yesterday':
            console.log("Yesterday");
            break

        case 'week':
            console.log("Week");
            break

        case 'last week':
            console.log("Last Week");
            break

        case 'month':
            console.log("Month");
            break

        case '30 days':
            console.log("30 days");
            break

        case 'last month':
            console.log("Last Month");
            break

        case '90 days':
            console.log("90 days");
            break

        default:
            console.log("default");
            break
    }
}


export { dateTime }