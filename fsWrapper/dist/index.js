"use strict";
exports.__esModule = true;
var fs = require("fs");
var fsWrapper = /** @class */ (function () {
    function fsWrapper() {
    }
    fsWrapper.prototype.readDirectory = function (directoryPath, Log) {
        var fsOutput = fs.readdirSync(directoryPath);
        if (Log) {
            console.log('The directory output was: ' + fsOutput);
        }
        return fsOutput;
    };
    return fsWrapper;
}());
exports.fsWrapper = fsWrapper;
