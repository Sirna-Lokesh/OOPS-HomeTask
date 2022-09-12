Object.prototype.hash = function (string) {
    let propertiesArray = new propertiesArray();
    propertiesArray = string.split(".");
    let value = this;

    for (let propertyNumber = 0; propertyNumber < propertiesArray.length; propertyNumber++) {
        let property = propertiesArray[propertyNumber];
        if (value[property] !== undefined) {
            value = value[property];
        }
        else {
            return undefined;
        }


    }

    return value;
}