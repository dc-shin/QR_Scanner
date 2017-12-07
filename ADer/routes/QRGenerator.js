"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var QRCode = require("qrcode");
var router = express.Router();
router.get('/', function (req, res) {
    QRCode.toDataURL('http://www.google.com', function (err, string) {
        if (err)
            throw err;
        console.log(string);
        res.render('QRCode', { title: 'ADer', QR: string });
    });
});
exports.default = router;
//# sourceMappingURL=QRGenerator.js.map