Object.prototype.hash = function (string) {
    let propertiesArray = new propertiesArray();
    propertiesArray = string.split(".");
    let value = this;

    for (let items = 0; items < propertiesArray.length; items++) {
        let property = propertiesArray[items];
        if (value[property] !== undefined) {
            value = value[property];
        }
        else {
            return undefined;
        }


    }

    return value;
}