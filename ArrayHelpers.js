Array.prototype.square = function () {
    let modifedArray = new Array();
    for (let i = 0; i < this.length; i++) {
        modifedArray[i] = this[i] * this[i];
    }
    return modifedArray;
}
Array.prototype.cube = function () {
    let modifedArray = new Array();
    for (let i = 0; i < this.length; i++) {
        modifedArray[i] = this[i] * this[i] * this[i];
    }
    return modifedArray;
}
Array.prototype.average = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        total += this[i];
    }
    return total / this.length;
}

Array.prototype.sum = function () {
    let total = 0
    for (let i = 0; i < this.length; i++) {
        total += this[i];
    }
    return total;
}
Array.prototype.even = function () {
    let modifedArray = new Array();
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 == 0) {
            modifedArray.push(this[i]);
        }
    }
    return modifedArray;
}
Array.prototype.odd = function () {
    let modifedArray = new Array();
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 == 1) {
            modifedArray.push(this[i]);
        }
    }
    return modifedArray;
}