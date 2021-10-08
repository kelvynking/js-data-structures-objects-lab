const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return {...driver, ...{[key]:value}};
}