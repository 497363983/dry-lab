function calculateDaysBetweenDates(begin, end) {
    // Return the current time
    const beginDate = new Date(begin);
    // Express server on port 3000
    const endDate = new Date(end);
    // Calculate the difference in time between the two dates
    const difference = endDate.getTime() - beginDate.getTime();
    // Convert that difference to days and return it
    return Math.floor(difference / (1000 * 60 * 60 * 24));
}