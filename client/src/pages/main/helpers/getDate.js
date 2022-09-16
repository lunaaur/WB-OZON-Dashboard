


function getDataTimeTerm(period) {
    switch (period) {
        case 'yesterday':
            console.log("Yesterday - helper");
           
            break

        case 'week':
            console.log("Week- helper");
            break

        case 'lastWeek':
            console.log("Last Week - helper");
            break

        case 'month':
            console.log("Month - helper");
            break

        case '30Days':
            console.log("30 days - helper");
            break

        case 'lastMonth':
            console.log("Last Month - helper");
            break

        case '90Days':
            console.log("90 days - helper");
            break

        default:
            console.log("default");
            break
    }
}


export { getDataTimeTerm }