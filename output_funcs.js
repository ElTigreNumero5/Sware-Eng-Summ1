// function to take the current number of working days in the month
//    and the current number of days attended and work out attend%
const attendPC = (workDays, attendDays) => {
    if (workDays == 0) return 0;
    const attendPercent = ((attendDays / workDays) * 100);
    return attendPercent;
}


// function to work out number of days required to hit target
const daysLeft = ( attendDays, workDays, targetPC ) => {
    const targetDays = workDays * (targetPC / 100);
    const daysToHit = targetDays - attendDays;
    return daysToHit;
}



module.exports = { attendPC, daysLeft };