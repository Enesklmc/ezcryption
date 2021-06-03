"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var subtle = require("crypto").webcrypto.subtle;
var defaultOptions = {
    iv: new Uint8Array([
        60, 114, 145, 14, 139, 254, 202, 21, 208, 198, 204, 142, 15, 200, 50, 6,
    ]),
    salt: "salt",
};
Object.freeze(defaultOptions);
var Aes = {
    /**
     * Encryption Funtion
     * @param {string} message - A message that you want to be encrypted.
     * @param {string} password - Password for using both encryption and decryption.
     * @param {AesOptionsType} options - An optional settings.
     * @return {string} Returns an encrypted text.
     */
    encrypt: function (message, password, _a) {
        var _b = _a === void 0 ? {} : _a, overrideOptions = _b.options;
        return __awaiter(void 0, void 0, void 0, function () {
            var encoder, options, key, cipherArray, buffer, cipherText, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        encoder = new TextEncoder();
                        options = Object.assign({}, defaultOptions, overrideOptions);
                        return [4 /*yield*/, passwordToCryptoKey(password, options.salt)];
                    case 1:
                        key = _c.sent();
                        return [4 /*yield*/, subtle.encrypt({
                                name: "AES-CBC",
                                iv: options.iv,
                            }, key, encoder.encode(message))];
                    case 2:
                        cipherArray = _c.sent();
                        buffer = new Uint8Array(cipherArray);
                        cipherText = buffer.join("e");
                        //console.log("Encrypt output: ", cipherText);
                        return [2 /*return*/, cipherText];
                    case 3:
                        error_1 = _c.sent();
                        console.log("Encryption Error ", error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Decryption Funtion
     * @param {string}  ciphertext - An encrypted message that you want to be decrypted.
     * @param {string} password - Password for using both encryption and decryption.
     * @param {AesOptionsType} options - An optional settings.
     * @return {string} Returns the message you have encrypted.
     */
    decrypt: function (ciphertext, password, _a) {
        var _b = _a === void 0 ? { options: {} } : _a, overrideOptions = _b.options;
        return __awaiter(void 0, void 0, void 0, function () {
            var options, decoder, key, chars, charsStringToInt, charsToCipherArray, decrypted, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        options = Object.assign({}, defaultOptions, overrideOptions);
                        decoder = new TextDecoder();
                        return [4 /*yield*/, passwordToCryptoKey(password, options.salt)];
                    case 1:
                        key = _c.sent();
                        chars = ciphertext.split("e");
                        charsStringToInt = chars.map(function (char) { return parseInt(char); });
                        charsToCipherArray = new Uint8Array(charsStringToInt);
                        return [4 /*yield*/, subtle.decrypt({
                                name: "AES-CBC",
                                iv: options.iv,
                            }, key, charsToCipherArray)];
                    case 2:
                        decrypted = _c.sent();
                        return [2 /*return*/, decoder.decode(decrypted)];
                    case 3:
                        error_2 = _c.sent();
                        console.log("Decryption Error ", error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
};
exports.default = Aes;
/**
 * Helper function that turns password string to CryptoKey.
 * @param {string}  password - Password for using both encryption and decryption.
 * @param {string}  salt - Like another password.
 * @return {string} Returns a CryptoKey.
 */
function passwordToCryptoKey(password, salt) {
    return __awaiter(this, void 0, void 0, function () {
        var enc, keyMaterial, key, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    enc = new TextEncoder();
                    return [4 /*yield*/, subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits", "deriveKey"])];
                case 1:
                    keyMaterial = _a.sent();
                    return [4 /*yield*/, subtle.deriveKey({
                            name: "PBKDF2",
                            salt: enc.encode(salt),
                            iterations: 4000,
                            hash: "SHA-256",
                        }, keyMaterial, { name: "AES-CBC", length: 256 }, true, ["encrypt", "decrypt"])];
                case 2:
                    key = _a.sent();
                    return [2 /*return*/, key];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=aes.jsx.map