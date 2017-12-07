import express = require('express');
import QRCode = require('qrcode')
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {    
    QRCode.toDataURL('http://www.google.com', function (err, string) {
        if (err) throw err
        console.log(string)        
        res.render('QRCode', { title: 'ADer', QR: string });
    })

    
});

export default router;