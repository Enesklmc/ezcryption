"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spoiler = {
    /**
     * Encryption Funtion
     * @param {string} message - A message that you want to be encrypted.
     * @return {string} Returns an encrypted text.
     */
    encrypt: function (message, offset) {
        if (offset === void 0) { offset = 5; }
        var charCodes = stringToCharCodes(message);
        var messageArrayMaptoOffset = charCodes.map(function (index) { return String.fromCharCode(index + offset); });
        return encodeURIComponent(messageArrayMaptoOffset.join(""));
    },
    /**
     * Encryption Funtion
     * @param {string} encryptedMessage - An encrypted message that you want to be decrypted.
     * @return {string} Returns the message you have encrypted.
     */
    decrypt: function (encryptedMessage, offset) {
        if (offset === void 0) { offset = 5; }
        var decodedMessage = decodeURIComponent(encryptedMessage);
        var charCodes = stringToCharCodes(decodedMessage);
        var messageArrayMaptoOffset = charCodes.map(function (index) { return String.fromCharCode(index - offset); });
        return messageArrayMaptoOffset.join("");
    },
};
exports.default = Spoiler;
function stringToCharCodes(message) {
    var messageSplit = message.split("");
    var charCodes = messageSplit.map(function (char) {
        return char.charCodeAt(0);
    });
    return charCodes;
}
//# sourceMappingURL=spoiler.jsx.map