const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return {...driver, ...{[key]:value}};
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}